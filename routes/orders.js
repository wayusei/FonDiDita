const router = require('express').Router();
const { getOrders, getOrder, getOrdersByCustomer, createOrder, updateOrder, deleteOrder  } = require('../controllers/orders')

/**
 * @openapi
 * '/orders':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Obtiene la lista de ordenes.
 *     description: Obtiene la lista de ordenes existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de ordenes exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  ammount:
 *                       type: number
 *                  shipping_address:
 *                       type: string
 *                  order_address:
 *                      type: string
 *                  order_email:
 *                       type: string
 *                  order_date:
 *                       type: string
 *                  order_status:
 *                       type: number
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
router.get('/', getOrders);

/**
 * @openapi
 * '/orders/{id}':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Obtiene la orden por id.
 *     description: Obtiene la orden existente en la BBDD por una ID. 
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener la orden por su ID.
 *     responses:
 *      200:
 *        description: Se obtuvo la orden exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  ammount:
 *                    type: number
 *                  shipping_address:
 *                    type: string
 *                  order_address:
 *                    type: string
 *                  order_email:
 *                    type: string
 *                  order_date:
 *                    type: string
 *                  order_status:
 *                    type: number
 *      
 *      404:
 *        description: Orden no encontrada
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                 message:
 *                   type: string
 *             
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */
router.get('/:id', getOrder);

/**
 * @openapi
 * '/orders/customer/{customer_id}':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Obtiene las ordenes de un cliente determinado.
 *     description: Obtiene la lista de ordenes existentes en la BBDD de un cliente determinado por una ID. 
 *     parameters:
 *      - name: customer_id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener las ordenes de un cliente.
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de ordenes exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  ammount:
 *                       type: number
 *                  shipping_address:
 *                       type: string
 *                  order_address:
 *                      type: string
 *                  order_email:
 *                       type: string
 *                  order_date:
 *                       type: string
 *                  order_status:
 *                       type: number
 *      
 *      404:
 *        description: Cliente no encontrado
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
router.get('/customer/:id', getOrdersByCustomer);

/**
 * @openapi
 * '/orders':
 *  post:
 *     tags:
 *     - Orders
 *     summary: Crea una orden nueva.
 *     description: Crea una orden nueva en la BBDD. 
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - id
 *                  - customer_id
 *                  - ammount
 *                  - shipping_address
 *                  - order_address
 *                  - order_email
 *                  - order_date
 *                  - order_status
 *              properties:
 *                   id:
 *                     type: number
 *                   customer_id:
 *                     type: number
 *                   ammount:
 *                     type: number
 *                   shipping_address:
 *                     type: string
 *                   order_address:
 *                     type: string
 *                   order_email:
 *                     type: string
 *                   order_date:
 *                     type: string
 *                   order_status:
 *                     type: number
 *      
 *     responses:
 *      201:
 *        description: Se creo la orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  ammount:
 *                    type: number
 *                  shipping_address:
 *                    type: string
 *                  order_address:
 *                    type: string
 *                  order_email:
 *                    type: string
 *                  order_date:
 *                    type: string
 *                  order_status:
 *                    type: number
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
router.post('/', createOrder);

/**
 * @openapi
 * '/orders/{id}':
 *  patch:
 *     tags:
 *     - Orders
 *     summary: Actualiza una orden .
 *     description: Actualiza una orden en la BBDD. 
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para actualizar la información de la orden en la BBDD.
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      -id
 *                      -customer_id
 *                      -ammount
 *                      -shipping_address
 *                      -order_address
 *                      -order_email
 *                      -order_date
 *                      -order_status
 *                  properties:
 *                      id:
 *                          type: number
 *                      customer_id:
 *                          type: number
 *                      ammount:
 *                          type: number
 *                      shipping_address:
 *                          type: string
 *                      order_address:
 *                          type: string
 *                      order_email:
 *                          type: string
 *                      order_date:
 *                          type: string
 *                      order_status:
 *                          type: number
 *      
 *     responses:
 *      200:
 *        description: Se actualizó la orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  ammount:
 *                       type: number
 *                  shipping_address:
 *                       type: string
 *                  order_address:
 *                      type: string
 *                  order_email:
 *                       type: string
 *                  order_date:
 *                       type: string
 *                  order_status:
 *                       type: number
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
router.patch('/:id', updateOrder);

/**
 * @openapi
 * '/orders/{id}':
 *  delete:
 *     tags:
 *     - Orders
 *     summary: Elimina una orden por id.
 *     description: Elimina una orden de la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para eliminar la orden.
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
 *                  name:
 *                    type: string
 *                  price:
 *                    type: integer
 *                  description:
 *                    type: string
 *                  image:
 *                    type: string
 *                  thumbnail:
 *                    type: string
 *                  category:
 *                    type: integer
 *                  seller_id:
 *                    type: integer
 * 
 *      500:
 *        description: Error al eliminar la orden
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */

router.delete('/:id', deleteOrder);

module.exports = router;