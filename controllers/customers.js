const Customers = require('../models/customers');

async function getCustomers(req, res) {
    const customers = await Customers.findAll();
    res.status(200).json(customers);    
}

module.exports = {
    getCustomers,
}