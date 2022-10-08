const Sellers = require('../models/sellers');

async function getSellers(req, res) {
    const sellers = await Sellers.findAll();
    res.status(200).json(sellers);    
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
        const seller = await Sellers.create(body);
        const {salt, hash} = Sellers.createPassword(body['password']);
        seller.password_salt = salt;
        seller.password_hash = hash;
        await seller.save();
        res.status(201).json(seller);
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

module.exports = { getSellers, getSeller, createSeller, updateSeller, deleteSeller,signUpSeller };