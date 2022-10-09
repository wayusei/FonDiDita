const router = require('express').Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products')
const auth = require('../config/auth');


/**
 * @openapi
 * '/products':
 *  get:
 *     tags:
 *     - Products
 *     summary: Obtiene una lista de productos.
 *     description: Obtiene una lista de productos existentes en la BD.
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Se obtuvo la lista de productos exitosamente
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  price:
 *                    type: number
 *                  description:
 *                    type: string
 *                  image:
 *                    type: string
 *                  thumbnail:
 *                    type: string
 *                  category:
 *                    type: number
 *                  seller_id:
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
router.get('/', getProducts);

/**
 * @openapi
 * '/products/{id}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Obtiene un producto por id.
 *     description: Obtiene un producto por id de la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para obtener un producto.
 *     responses:
 *      200:
 *        description: Se obtuvo el producto exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *               properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  price:
 *                    type: number
 *                  description:
 *                    type: string
 *                  image:
 *                    type: string
 *                  thumbnail:
 *                    type: string
 *                  category:
 *                    type: number
 *                  seller_id:
 *                    type: number
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
router.get('/:id', getProduct);

/**
 * @openapi
 * '/products':
 *  post:
 *     tags:
 *     - Products
 *     summary: Crea un producto (requiere token).
 *     description: Crea un nuevo producto y lo agrega a la BD. Este módulo requiere autorización por lo que se neceistará copiar y pegar el token de la función de Customers/LogIn
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - id
 *                      - name
 *                      - price
 *                      - description
 *                      - image
 *                      - thumbnail
 *                      - category
 *                      - seller_id
 *                  properties:
 *                      id:
 *                          type: integer
 *                          example: 18
 *                      name:
 *                          type: string
 *                          example: Aceitunas
 *                      price:
 *                          type: integer
 *                          example: 180
 *                      description:
 *                          type: string
 *                          example: Aceitunas de la mejor calidad
 *                      image:
 *                          type: string
 *                          example: /src/images/aceituna.png
 *                      thumbnail:
 *                          type: string
 *                          example: thumbnail
 *                      category:
 *                          type: integer
 *                          example: 4
 *                      seller_id:
 *                          type: integer
 *                          example: 1
 *     responses:
 *      201:
 *        description: Se creo el producto exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *                  properties:
 *                      id:
 *                          type: integer
 *                          example: 18
 *                      name:
 *                          type: string
 *                          example: Aceitunas
 *                      price:
 *                          type: integer
 *                          example: 180
 *                      description:
 *                          type: string
 *                          example: Aceitunas de la mejor calidad
 *                      image:
 *                          type: string
 *                          example: /src/images/aceituna.png
 *                      thumbnail:
 *                          type: string
 *                          example: thumbnail
 *                      category:
 *                          type: integer
 *                          example: 4
 *                      seller_id:
 *                          type: integer
 *                          example: 1
 * 
 *      500:
 *        description: Error al crear el producto
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
router.post('/', auth.required, createProduct);

/**
 * @openapi
 * '/products/{id}':
 *  patch:
 *     tags:
 *     - Products
 *     summary: Actualiza un producto por id.
 *     description: Actualiza la información de un producto y lo agrega a la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para actualizar la información producto.
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - id
 *                      - name
 *                      - price
 *                      - description
 *                      - image
 *                      - thumbnail
 *                      - category
 *                      - seller_id
 *                  properties:
 *                      id:
 *                          type: integer
 *                      name:
 *                          type: string
 *                      price:
 *                          type: integer
 *                      description:
 *                          type: string
 *                      image:
 *                          type: string
 *                      thumbnail:
 *                          type: string
 *                      category:
 *                          type: integer
 *                      seller_id:
 *                          type: integer
 *     responses:
 *      200:
 *        description: Se actualizo el producto exitosamente.
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
 *        description: Error al actualizar el producto
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */
router.patch('/:id', updateProduct);

/**
 * @openapi
 * '/products/{id}':
 *  delete:
 *     tags:
 *     - Products
 *     summary: Elimina un producto por id.
 *     description: Elimina un producto de la BD.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Parametro en el path para eliminar el producto.
 *     requestBody:
 *        required: false
 *     responses:
 *      200:
 *        description: Se elimino el producto exitosamente.
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
 *        description: Error al eliminar el producto
 *        content:
 *          application/json:
 *           schema:
 *              properties:
 *                 message:
 *                   type: string
 */
router.delete('/:id', deleteProduct);

module.exports = router;