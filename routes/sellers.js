const router = require('express').Router();
const { getSellers, getSeller, createSeller, updateSeller, deleteSeller, signUpSeller, logInSeller } = require('../controllers/sellers')

/**
 * @openapi
 * '/sellers':
 *  get:
 *     tags:
 *     - Sellers
 *     summary: Obtiene una lista de los vendedores.
 *     description: Obtiene una lista de vendedores existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de los vendedores exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                    example: 1
 *                  username:
 *                    type: string
 *                    example: gonzalo
 *                  email:
 *                    type: string
 *                    example: gonzalo@gmail.com
 *                  full_name:
 *                    type: string
 *                    example: Gonzalo Perez
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
router.get('/', getSellers);


router.get('/:id', getSeller);


router.post('/', createSeller);


router.patch('/:id', updateSeller);


router.delete('/:id', deleteSeller);

/**
 * @openapi
 * '/sellers/signUpSeller':
 *  post:
 *     tags:
 *     - Sellers
 *     summary: Registra a un vendedor.
 *     description: Registra a un vendedor en la BD.
 *     requestBody:
 *      required: true
 *      content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - id
 *                      - username
 *                      - email
 *                      - password
 *                      - full_name
 *                      - account
 *                  properties:
 *                      id:
 *                          type: integer
 *                          example: 8
 *                      username:
 *                          type: string
 *                          example: armando
 *                      email:
 *                          type: string
 *                          example: armando@gmail.com
 *                      password:
 *                          type: string
 *                          example: password8
 *                      full_name:
 *                          type: string
 *                          example: Armando Sanchez
 *                      account:
 *                          type: string
 *                          example: account8
 *     responses:
 *      200:
 *        description: Se registro a un vendedor exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                      id:
 *                          type: integer
 *                          example: 8
 *                      username:
 *                          type: string
 *                          example: armando
 *                      email:
 *                          type: string
 *                          example: armando@gmail.com
 *                      full_name:
 *                          type: string
 *                          example: Armando Sanchez
 *                      account:
 *                          type: string
 *                          example: account8
 *                      password_hash:
 *                          type: string
 *                          example: 484849x48a4449c4c9z949x4sxsxs94
 *                      password_salt:
 *                          type: string
 *                          example: 5a45a4s54as5a45asxasc5
 * 
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                   example: Id en existencia, use otro
 */
router.post('/signUpSeller', signUpSeller);

/**
 * @openapi
 * '/sellers/logInSeller':
 *  post:
 *     tags:
 *     - Sellers
 *     summary: Login del vendedor.
 *     description: Logea a un vendedor.
 *     requestBody:
 *      required: true
 *      content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - username
 *                      - password
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: armando
 *                      password:
 *                          type: string
 *                          example: password8
 *     responses:
 *      200:
 *        description: Se logeo un vendedor exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                      user:
 *                          type: string
 *                          example: armando
 *                      email:
 *                          type: string
 *                          example: armando@gmail.com
 *                      token:
 *                          type: string
 *                          example: 5a4sa5s4a4s.as5as4a4s.dsds5454
 * 
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                   example: Password Incorrecto
 * 
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 *                   example: Usuario no encontrado
 */
router.post('/logInSeller', logInSeller);


module.exports = router;