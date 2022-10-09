const Orders = require('../models/orders');

/**
 * Obtiene la lista de ordenes
 * @param {*} req 
 * @param {*} res 
 */
async function getOrders(req, res) {
    try{
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error',error});
    }
}

/**
 * Obtiene las ordenes de un cliente determinado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function getOrdersByCustomer(req, res) {

    const id = req.params.id;
    const orders = await Orders.findAll({where: {customer_id: id}});
    if(!orders){
        return res.status(404).json({message: "Cliente no encontrado"});
    }
    res.status(200).json(orders);    
}


/**
 * Obtiene una orden mediante un id
 * @param {*} req 
 * @param {*} res 
 */
async function getOrder(req, res) {
    const id = req.params.id;
    const order = await Orders.findByPk(id);
    if(!order){
        return res.status(404).json({message: "orden no encontrada"});
    }
    res.status(200).json(order);
}

/**
 * Crea una orden y la guarda en la BBDD
 * @param {*} req 
 * @param {*} res 
 */
async function createOrder(req, res) {
    const body = req.body;
    await Orders.create(body).then(order => {
        res.status(201).json(order);
    }).catch(function(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});

    });
}

/**
 * Actualiza información de una orden
 * @param {*} req 
 * @param {*} res 
 */
async function updateOrder(req, res) {
    const id = req.params.id;
    const order = req.body;
    await Orders.update(order, {where: {id}});
    const order_updated = await Orders.findByPk(id);
    if(!order){
        return res.status(404).json({message:"orden no encontrada"});
    }
    res.status(200).json(order_updated);
}

/**
 * Elimina una orden de la BBDD mediante una ID
 * @param {*} req 
 * @param {*} res 
 */
async function deleteOrder(req, res) {
    const id = req.params.id;
    const deleted = Orders.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}


module.exports = { getOrders, getOrder, getOrdersByCustomer, createOrder, updateOrder, deleteOrder };

