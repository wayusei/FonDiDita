const Customers = require('../models/customers');


/**
 * 
 * @swagger 
 * /customers/:
 * get:
 *  summary: Creación y consulta de clientes (customers)
 *  produces: 
 *      - application/json
 *  responses: 
 *      200:
 *          description: Todos los clientes
 *          type: json
 */

async function getCustomers(req, res) {
    const customers = await Customers.findAll();
    res.status(200).json(customers);    
}

async function getCustomerbyId(req, res) {
    const id = req.params.id;
    
    const cus = await Customers.findAll({
        where: {id:id}, attributes:['username','password_salt']
    
    });
    

    res.status(200).json(cus);
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

async function encriptarTodo(req, res) {
    
    const customers = await Customers.findAll();
    //const j= res.json(customers);
    //    res.status(200).json(customers);    

    
    //console.log(customers);

    
    for(const element of customers){

        //console.log(element.id);//
        
        const id= element.id;

            const {salt, hash} = Customers.createPassword('1234');
            

            await Customers.update(
                {   password_salt:salt,
                    password_hash:hash},
                        {where: {id}}
            );
            //const god_updated = await Customers.findByPk(id);
            //res.status(200).json(god_updated);

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
            cus: cus.username,
            email: cus.email,
            token: Customers.generateJWT(cus)
        }); // JWT
    } else {
        return res.status(400).json({mensaje: "Password Incorrecto"});
    }
}


module.exports = {
    getCustomers,
    getCustomerbyId,
    insertCustomer,
    signUp,
    logIn,
    encriptarTodo,
}