const Orders_Details = require('../models/orders_details');


/**
 * Obtiene la lista de detalles de ordenes
 * @param {*} req 
 * @param {*} res 
 */
async function getOrdersDetails(req, res) {
    try{
        const ordersDetails = await Orders_Details.findAll();
        res.status(200).json(ordersDetails);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error',error});
    }
}

/**
 * Obtiene los detalles de ordenes de un producto determinado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function getOrdersDetailByProduct(req, res) {
    const id = req.params.id;
    const ordersDetailsByProduct = await Orders_Details.findAll({where: {product_id: id}});
    if(!ordersDetailsByProduct){
        return res.status(404).json({message: "Producto no tiene ordenes"});
    }
    res.status(200).json(orders);    
}

/**
 * Obtiene los detalles de ordenes de una orden determinada
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
 async function getOrdersDetailByProduct(req, res) {
    const id = req.params.id;
    const ordersDetailsByOrder = await Orders_Details.findAll({where: {order_id: id}});
    if(!ordersDetailsByOrder){
        return res.status(404).json({message: "Detalle de orden no encontrada"});
    }
    res.status(200).json(ordersDetailsByOrder);    
}
/**
 * Obtiene detalles de una orden mediante un id
 * @param {*} req 
 * @param {*} res 
 */
async function getOrdersDetailsById(req, res) {
    const id = req.params.id;
    const orderDetail = await Orders_Details.findByPk(id);
    if(!orderDetail){
        return res.status(404).json({message: "Detalle de orden no encontrada"});
    }
    res.status(200).json(orderDetail);
}

/**
 * Crea detalle de orden y la guarda en la BBDD
 * @param {*} req 
 * @param {*} res 
 */
async function createOrderDetail(req, res) {
    const body = req.body;
    await Orders_Details.create(body).then(order_detail => {
        res.status(201).json(order_detail);
    }).catch(function(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    });
}

/**
 * Actualiza información de detalle de una orden
 * @param {*} req 
 * @param {*} res 
 */
async function updateOrderDetails(req, res) {
    const id = req.params.id;
    const orderDetail = req.body;
    await Orders_Details.update(orderDetail, {where: {id}});
    const orderDetail_updated = await Orders_Details.findByPk(id);
    if(!orderDetail){
        return res.status(404).json({message:"orden no encontrada"});
    }
    res.status(200).json(orderDetail_updated);
}

/**
 * Elimina el detalle de una orden de la BBDD mediante una ID
 * @param {*} req 
 * @param {*} res 
 */
async function deleteOrderDetail(req, res) {
    const id = req.params.id;
    const deletedDetail = Orders_Details.destroy(
        {where: {id} }
    );
    res.status(200).json(deletedDetail);
}

module.exports = { getOrdersDetails, getOrdersDetailByProduct, getOrdersDetailsById, getOrdersDetails, createOrderDetail, updateOrderDetails, deleteOrderDetail };