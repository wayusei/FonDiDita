const Orders = require('../models/orders');
const Orders = require('../models/orders');
const Orders = require('../models/orders');

async function getOrders(req, res) {
    const orders = await Orders.findAll();
    res.status(200).json(orders);    
}

async function getCustomerOrders(req, res) {
    const customerId = req.params.customerId;
    const orders = await Orders.findAll({
        where: {
            
        }
    });
    res.status(200).json(orders);    
}

async function getOrder(req, res) {
    const id = req.params.id;
    const seller = await Sellers.findByPk(id);
    res.status(200).json(seller);
}

function createOrder(req, res) {
    const body = req.body;
    Orders.create(body).then(order => {
        res.status(201).json(order);
    });
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

module.exports = { createOrder, getSellers, getSeller, createSeller, updateSeller, deleteSeller };