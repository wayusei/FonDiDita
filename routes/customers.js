const router = require('express').Router();


const {
    getCustomers,
    getCustomerbyId,
    insertCustomer,
    signUp,
    logIn,
    encriptarTodo,
} = require('../controllers/customers');
const auth = require('../config/auth');

/**
 * @openapi
 * '/customers':
 *  get:
 *     tags:
 *     - Customers
 *     summary: Obtiene la lista de Clientes.
 *     description: Obtiene la lista de cñientes existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de clientes exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  username:
 *                       type: string
 *                  email:
 *                       type: string
 *                  password_hash:
 *                      type: string
 *                  full_name:
 *                       type: string
 *                  billing_address:
 *                       type: string
 *                  default_shipping_address:
 *                       type: string
 *                  phone:
 *                       type: string
 *                  password_salt:
 *                       type: string
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
router.get('/', getCustomers);



router.get('/getbyId/:id', getCustomerbyId);
router.post('/insert',auth.isAdmin, insertCustomer);
router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.get('/encriptar', auth.isAdmin, encriptarTodo);



module.exports = router;