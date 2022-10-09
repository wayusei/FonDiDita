const router = require('express').Router();
const customers = require('./customers');
const sellers = require('./sellers');
const products = require('./products');
const categories = require('./categories');
const orders = require('./orders');
const orders_details = require('./orders_details');
const order_status = require('./order_status');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to fondidita API!, Para ver la documentación entra a https://fondidita.herokuapp.com/docs/'})
});

router.use('/customers', customers);
router.use('/sellers', sellers);
router.use('/products', products);
router.use('/categories', categories);
router.use('/orders', orders);
router.use('/orders_details', orders_details);
router.use('/order_status', order_status);


module.exports = router;
