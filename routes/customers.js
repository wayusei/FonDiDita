const router = require('express').Router();


const {
    getCustomers,
    getCustomerbyId,
    insertCustomer,
    signUp,
    logIn,
    deleteCustomer,
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


/**
 * @openapi
 * '/customers/getbyId/{id}':
 *  get:
 *     tags:
 *     - Customers
 *     summary: Obtiene los datos de un cliente buscando por un id que debe ponerse como parametro en el url
 *     description: Obtiene un cliente por id en la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener datos de un cliente.
 *     responses:
 *      200:
 *        description: Se obtuvo el cliente exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                id:
 *                  type: number
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                password_hash:
 *                  type: string
 *                full_name:
 *                  type: string
 *                billing_address:
 *                  type: string
 *                default_shipping_address:
 *                  type: string
 *                phone:
 *                  type: string
 *                password_salt:
 *                  type: string
 * 
 *      404:
 *        description: Producto no encontrado
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */
router.get('/getbyId/:id', getCustomerbyId);


/**
 * @openapi
 * '/customers/insert':
 *   post:
 *     tags:
 *     - Customers
 *     summary: Crea un nuevo cliente (requiere login de admin).
 *     description: Crea un nuevo cliente y lo inserta en la BD, sin encriptar el password. (username admin, contraseña 1234)
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                    - id
 *                    - username
 *                    - email
 *                    - password
 *                    - full_name
 *                    - billing_address
 *                    - default_shipping_address
 *                    - phone
 *                  properties:
 *                   id:
 *                      type: number
 *                      example: 1
 *                   username:
 *                       type: string
 *                       example: user1
 *                   email:
 *                       type: string
 *                       example: mail@mail.com
 *                   password:
 *                      type: string
 *                      example: 1234
 *                   full_name:
 *                       type: string
 *                       example: Fulanito de Tal
 *                   billing_address:
 *                       type: string
 *                       example: Calle 1
 *                   default_shipping_address:
 *                       type: string
 *                       example: Calle 22
 *                   phone:
 *                       type: string
 *                       example: 12345678
 *     responses:
 *      201:
 *        description: Se creo el cliente exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *                  properties:
 *                      id:
 *                          type: number
 *                          example: 1
 *                      username:
 *                          type: string
 *                          example: user1
 *                      email:
 *                          type: string
 *                          example: mail@mail.com
 *                      password_hash:
 *                          type: string
 *                          example: 1234
 *                      full_name:
 *                          type: string
 *                          example: Fulanito de Tal
 *                      billing_address:
 *                          type: string
 *                          example: Calle 1
 *                      default_shipping_address:
 *                          type: string
 *                          example: Calle 22
 *                      phone:
 *                          type: string
 *                          example: 12345678
 *                      password_salt:
 *                          type: string
 *                          example: 1234
 * 
 *      500:
 *        description: Error al crear el cliente
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *      401:
 *        description: Sin autorización
 *        content: 
 *          application/json:
 *              schema:
 *                  properties:
 *                      message:
 *                          type: string
 */
router.post('/insert',auth.isAdmin, insertCustomer);


/**
 * @openapi
 * '/customers/signUp':
 *   post:
 *     tags:
 *     - Customers
 *     summary: Crea un nuevo cliente (con password_hash y password_salt).
 *     description: Crea un nuevo cliente y lo inserta en la BD. Realiza encriptación del password
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                    - id
 *                    - username
 *                    - email
 *                    - password
 *                    - full_name
 *                    - billing_address
 *                    - default_shipping_address
 *                    - phone
 *                  properties:
 *                   id:
 *                      type: number
 *                      example: 1
 *                   username:
 *                       type: string
 *                       example: user1
 *                   email:
 *                       type: string
 *                       example: mail@mail.com
 *                   password:
 *                      type: string
 *                      example: 1234
 *                   full_name:
 *                       type: string
 *                       example: Fulanito de Tal
 *                   billing_address:
 *                       type: string
 *                       example: Calle 1
 *                   default_shipping_address:
 *                       type: string
 *                       example: Calle 22
 *                   phone:
 *                       type: string
 *                       example: 12345678
 *     responses:
 *      201:
 *        description: Se creo el cliente exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *                  properties:
 *                      id:
 *                          type: number
 *                          example: 1
 *                      username:
 *                          type: string
 *                          example: user1
 *                      email:
 *                          type: string
 *                          example: mail@mail.com
 *                      password_hash:
 *                          type: string
 *                          example: 1234
 *                      full_name:
 *                          type: string
 *                          example: Fulanito de Tal
 *                      billing_address:
 *                          type: string
 *                          example: Calle 1
 *                      default_shipping_address:
 *                          type: string
 *                          example: Calle 22
 *                      phone:
 *                          type: string
 *                          example: 12345678
 *                      password_salt:
 *                          type: string
 *                          example: 1234
 * 
 *      500:
 *        description: Error al crear el cliente
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 
 */
router.post('/signUp', signUp);



/**
 * @openapi
 * '/customers/logIn':
 *  post:
 *     tags:
 *     - Customers
 *     summary: Login para obtener token.
 *     description: Al introducir un usuario y contraseña correctos, se devuee un token para poder autorizarse.
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type:object:
 *                  required:
 *                      - username
 *                      - password
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: admin
 *                      password:
 *                          type: string
 *                          example: 1234
 *      
 *     responses:
 *      404:
 *        description: Usuario no encontrado
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  username:
 *                       type: string
 *                  email:
 *                       type: string
 *                  token:
 *                       type: string
 * 
 *      400:
 *        description: Contraseña incorrecta
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                 error:
 *                  type: string
 */
router.post('/logIn', logIn);

/**
 * @openapi
 * '/customers/deleteCustomer/{id}':
 *  delete:
 *     tags:
 *     - Customers
 *     summary: Borra el registro de un cliente (requiere login de admin)
 *     description: Borra un cliente por id en la BD. Para poder proceder es necesario hacer un login de la cuenta de admin (contraseña = 1234) y utilizar el token
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener el cliente y borrarlo.
 *     responses:
 *      200:
 *        description: Se borró el cliente exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                message:
 *                  type: string
 * 
 *      404:
 *        description: Producto no encontrado
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */
router.delete('/deleteCustomer/:id',auth.isAdmin, deleteCustomer);



module.exports = router;