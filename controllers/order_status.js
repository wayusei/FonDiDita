const OrderStatus = require('../models/order_status');


/**
 * Obtiene una lista de los estatus de orden
 * @param {*} req 
 * @param {*} res 
 */
async function getOrderStatus(req, res) {
    try {
        const orderStatuses = await OrderStatus.findAll();
        res.status(200).json(orderStatuses);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal server error',
            error
        })
    }
}

/**
 * Obtiene un estatus de orden mediante un id
 * @param {*} req 
 * @param {*} res 
 */
async function getOrderStatusById(req, res) {
    const id = req.params.id;
    const orderStatus = await OrderStatus.findByPk(id);
    if (!orderStatus) {
        return res.status(404).json({ message: "Estatus de orden no encontrado" });
    }
    res.status(200).json(orderStatus);
}

/**
 * Se crea estatus de orden y la guarda en la bd
 * @param {*} req 
 * @param {*} res 
 */
async function createOrderStatus(req, res) {

    const body = req.body;
    await OrderStatus.create(body).then(orderStatus => {
        res.status(201).json(orderStatus);
    }).catch(function(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    });
}

/**
 * Función que nos permite actualizar la información de un estatus de orden creado anteriormente
 * @param {*} req 
 * @param {*} res 
 */
async function updateOrderStatus(req, res) {
    const id = req.params.id;
    const orderStatus = req.body;
    await OrderStatus.update(orderStatus, {where: {id}});
    const orderStatus_updated = await OrderStatus.findByPk(id);
    res.status(200).json(orderStatus_updated);
}

/**
 * Función que nos permite eliminar una categoria por id
 * @param {*} req 
 * @param {*} res 
 */
async function deleteOrderStatus(req, res) {
    const id = req.params.id;
    const deletedOrderStatus = OrderStatus.destroy(
        {where: {id} }
    );
    res.status(200).json(deletedOrderStatus);
}

module.exports = { getOrderStatus, getOrderStatusById, createOrderStatus, updateOrderStatus, deleteOrderStatus };