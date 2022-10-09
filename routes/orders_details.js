const router = require('express').Router();
const { getOrdersDetails, getOrdersDetailByProduct, getOrdersDetailByOrderId, getOrdersDetailsById, createOrderDetail, updateOrderDetails, deleteOrderDetail  } = require('../controllers/orders_details')

/**
 * @openapi
 * '/orders_details':
 *  get:
 *     tags:
 *     - Orders Details
 *     summary: Obtiene la lista de detalle de ordenes.
 *     description: Obtiene la lista de detalles de ordenes existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de detalles de ordenes exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *                  
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.get('/', getOrdersDetails);

/**
 * @openapi
 * '/orders_details/{id}':
 *  get:
 *     tags:
 *     - Orders Details
 *     summary: Obtiene el detalle de orden mediante su id.
 *     description: Obtiene el detalle de orden existentes en la BD mediante su id.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo el detalle de orden exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *                  
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
 router.get('/:id', getOrdersDetailsById);

/**
 * @openapi
 * '/orders_details/product/{product_id}':
 *  get:
 *     tags:
 *     - Orders Details
 *     summary: Obtiene el detalle de una orden por el id de un producto.
 *     description: Obtiene el detalle de una orden existente en la BBDD de un producto determinado por una ID. 
 *     parameters:
 *      - name: product_id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener el detalle de orden dado un id de producto.
 *     responses:
 *      200:
 *        description: Se obtuvieron los detalles de orden del producto exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *      
 *      404:
 *        description: producto no encontrado
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *             
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.get('/product/:id', getOrdersDetailByProduct);

/**
 * @openapi
 * '/orders_details/order/{order_id}':
 *  get:
 *     tags:
 *     - Orders Details
 *     summary: Obtiene el detalle de una orden por el id de la orden.
 *     description: Obtiene el detalle de una orden existentes en la BBDD determinado por una ID. 
 *     parameters:
 *      - name: order_id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener el detalle de orden dado un id de orden.
 *     responses:
 *      200:
 *        description: Se obtuvo el detalle de la orden exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *      
 *      404:
 *        description: orden no encontrada
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *             
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.get('/order/:id', getOrdersDetailByOrderId);

/**
 * @openapi
 * '/orders_details':
 *  post:
 *     tags:
 *     - Orders Details
 *     summary: Crea un nuevo detalle de orden.
 *     description: Crea un nuevo detalle de orden en la BBDD. 
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                      -id
 *                      -order_id
 *                      -product_id
 *                      -price
 *                      -quantity
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *      
 *     responses:
 *      201:
 *        description: Se creo el detalle de orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *                   
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.post('/', createOrderDetail);

/**
 * @openapi
 * '/orders_details/{id}':
 *  patch:
 *     tags:
 *     - Orders Details
 *     summary: Actualiza los detalles de una orden .
 *     description: Actualiza los detalles de una orden en la BBDD. 
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para actualizar la información de los detalles de una orden en la BBDD.
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      -id
 *                      -order_id
 *                      -product_id
 *                      -price
 *                      -quantity
 *                  properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *      
 *     responses:
 *      200:
 *        description: Se actualizó el detalle de la orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                      id:
 *                          type: number
 *                      order_id:
 *                          type: number
 *                      product_id:
 *                          type: number
 *                      price:
 *                          type: numebr
 *                      quantity:
 *                          type: number
 *                   
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.patch('/:id', updateOrderDetails);

/**
 * @openapi
 * '/orders_details/{id}':
 *  delete:
 *     tags:
 *     - Orders Details
 *     summary: Elimina el detalle de una orden por id.
 *     description: Elimina el detalle de una orden de la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para eliminar el detalle de la orden.
 *     requestBody:
 *        required: false
 *     responses:
 *      200:
 *        description: Se elimino la orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: integer
 *                  order_id:
 *                    type: integer
 *                  product_id:
 *                    type: integer
 *                  price:
 *                    type: integer
 *                  quantity:
 *                    type: integer
 * 
 *      500:
 *        description: Error al eliminar el detalle de la orden
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */

router.delete('/:id', deleteOrderDetail);

module.exports = router;