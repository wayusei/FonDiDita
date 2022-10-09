const router = require('express').Router();
const { getOrderStatus, getOrderStatusById, createOrderStatus, updateOrderStatus, deleteOrderStatus } = require('../controllers/order_status')

/**
 * @openapi
 * '/order_status':
 *  get:
 *     tags:
 *     - Order Status
 *     summary: Obtiene la lista de estatus de ordenes.
 *     description: Obtiene la lista de estatus de ordenes existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de estatus de ordenes exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string
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
router.get('/', getOrderStatus);

/**
 * @openapi
 * '/order_status/{id}':
 *  get:
 *     tags:
 *     - Orders Status
 *     summary: Obtiene el estatus de una orden mediante su id.
 *     description: Obtiene el estatus de orden existente en la BD mediante su id.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo el estatus de orden exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string
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
 router.get('/:id', getOrderStatusById);

/**
 * @openapi
 * '/order_status':
 *  post:
 *     tags:
 *     - Order Status
 *     summary: Crea un nuevo estatus de orden.
 *     description: Crea un nuevo estatus de orden en la BBDD. 
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                      -id
 *                      -status
 *                      -description
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string      
 *     responses:
 *      201:
 *        description: Se creo el estatus de orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string    
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
router.post('/', createOrderStatus);

/**
 * @openapi
 * '/order_status/{id}':
 *  patch:
 *     tags:
 *     - Order Status
 *     summary: Actualiza un estatus de orden existente.
 *     description: Actualiza los detalles de un estatus de orden en la BBDD. 
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para actualizar la información de un estatus de orden en la BBDD.
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      -id
 *                      -status
 *                      -description
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string    
 *     responses:
 *      200:
 *        description: Se actualizó el estatus de orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string    
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
router.patch('/:id', updateOrderStatus);

/**
 * @openapi
 * '/order_status/{id}':
 *  delete:
 *     tags:
 *     - Order Status
 *     summary: Elimina el estatus de orden por id.
 *     description: Elimina el estatus de orden de la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para eliminar el estatus de orden.
 *     requestBody:
 *        required: false
 *     responses:
 *      200:
 *        description: Se elimino la orden exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                      id:
 *                          type: number
 *                      status:
 *                          type: number
 *                      description:
 *                          type: string    
 *      500:
 *        description: Error al eliminar el detalle de la orden
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */

router.delete('/:id', deleteOrderStatus);

module.exports = router;