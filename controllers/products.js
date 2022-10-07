const Products = require('../models/products');

async function getProducts(req, res) {
    const products = await Products.findAll();
    res.status(200).json(products);    
}

async function getProduct(req, res) {
    const id = req.params.id;
    const product = await Products.findByPk(id);
    res.status(200).json(product);
}

function createProduct(req, res) {
    const body = req.body;
    Products.create(body).then(product => {
        res.status(201).json(product);
    });
}

async function updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;
    await Products.update(product, {where: {id}});
    const product_updated = await Products.findByPk(id);
    res.status(200).json(product_updated);
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    const deleted = Products.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };