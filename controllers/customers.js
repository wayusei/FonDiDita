const Customers = require('../models/customers');




async function getCustomers(req, res) {
    const customers = await Customers.findAll();
    res.status(200).json(customers);    
}

async function getCustomerbyId(req, res) {
    const id = req.params.id;
    
    const cus = await Customers.findByPk(id);   
    if(cus==null){
        res.status(404).json({"error":"Cliente no encontrado"});
    }else{
        res.status(200).json(cus);
    }
    
}

function insertCustomer(req, res) {
    const body = req.body;
    Customers.create(body).then(customer => {
        res.status(201).json(customer);
    });
}

async function signUp(req, res) {
    const body = req.body;
    try { 
        const cus = await Customers.create(body);
        const {salt, hash} = Customers.createPassword(body['password']);
        cus.password_salt = salt;
        cus.password_hash = hash;
        await cus.save();
        res.status(201).json(cus);
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
            return res.status(400).json({
                error: err.errors.map(e => e.message)
            })
        }
        else {
            throw err;
        }
    }
}

async function logIn(req, res) {
    const body = req.body;
    const cus = await Customers.findOne({where: {username: body['username']}});
    if (!cus) {
        return res.status(404).json({error: "User not found"});
    }
    if (Customers.validatePassword(body['password'], cus.password_salt, cus.password_hash)) {
        return res.status(200).json({
            username: cus.username,
            email: cus.email,
            token: Customers.generateJWT(cus)
        }); 
    } else {
        return res.status(400).json({mensaje: "Password Incorrecto"});
    }
}




async function deleteCustomer(req, res) {
    const id = req.params.id;
    const deleted = Customers.destroy(
        {where: {id} }
    );
    res.status(200).json({"message":"Usuario eliminado"});
}


module.exports = {
    getCustomers,
    getCustomerbyId,
    insertCustomer,
    signUp,
    logIn,
    deleteCustomer,
}