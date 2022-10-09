const Sellers = require('../models/sellers');

async function getSellers(req, res) {
    try {
        const sellers = await Sellers.findAll();
        const array = [];
        sellers.map(seller => {
            array.push({
                id: seller.id,
                username: seller.username,
                email: seller.email,
                full_name: seller.full_name
            });
        });
        res.status(200).json(array);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal server error',
            error
        })
    }
}

async function getSeller(req, res) {
    const id = req.params.id;
    const seller = await Sellers.findByPk(id);
    res.status(200).json(seller);
}

function createSeller(req, res) {
    const body = req.body;
    Sellers.create(body).then(seller => {
        res.status(201).json(seller);
    });
}

async function signUpSeller(req, res) {
    const body = req.body;
    try { 
        const existId = await Sellers.findOne({where:{id: body.id}});
        if(!existId){
            const seller = await Sellers.create(body);
            const {salt, hash} = Sellers.createPassword(body['password']);
            seller.password_salt = salt;
            seller.password_hash = hash;
            await seller.save();
            res.status(201).json(seller);
        } else {
            res.status(400).json({message:"Id en existencia, use otro"});
        }
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

async function logInSeller(req, res) {
    const body = req.body;
    const user = await Sellers.findOne({where: {username: body['username']}});
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }
    if (Sellers.validatePassword(body['password'], user.password_salt, user.password_hash)) {
        return res.status(200).json({
            user: user.username,
            email: user.email,
            token: Sellers.generateJWT(user)
        }); 
    } else {
        return res.status(400).json({mensaje: "Password Incorrecto"});
    }
}

async function updateSeller(req, res) {
    const id = req.params.id;
    const seller = req.body;
    await Sellers.update(seller, {where: {id}});
    const seller_updated = await Sellers.findByPk(id);
    res.status(200).json(seller_updated);
}

async function deleteSeller(req, res) {
    const id = req.params.id;
    const deleted = Sellers.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = { getSellers, getSeller, createSeller, updateSeller, deleteSeller, signUpSeller, logInSeller };