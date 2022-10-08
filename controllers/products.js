const Products = require('../models/products');
const Sellers = require('../models/sellers');


/**
 * Obtiene una lista de productos
 * @param {*} req 
 * @param {*} res 
 */
async function getProducts(req, res) {
    try {
        const products = await Products.findAll();
        res.status(200).json({products});

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal server error',
            error
        })
    }
}

/**
 * Obtiene un producto mediante un id
 * @param {*} req 
 * @param {*} res 
 */
async function getProduct(req, res) {
    const id = req.params.id;
    const product = await Products.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: "producto no encontrado" });
    }
    res.status(200).json(product);
}

/**
 * Se crea un producto y lo guarda en la bd
 * @param {*} req 
 * @param {*} res 
 */
async function createProduct(req, res) {

    const body = req.body;
    await Products.create(body).then(product => {
        res.status(201).json(product);
    }).catch(function(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    });
}

/**
 * Función que nos permite actualizar la información de un producto
 * @param {*} req 
 * @param {*} res 
 */
async function updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;
    await Products.update(product, {where: {id}});
    const product_updated = await Products.findByPk(id);
    res.status(200).json(product_updated);
}

/**
 * Función que nos permite eliminar un producto por id
 * @param {*} req 
 * @param {*} res 
 */
async function deleteProduct(req, res) {
    const id = req.params.id;
    const deleted = Products.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };