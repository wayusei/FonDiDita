const router = require('express').Router();
const customers = require('./customers');
const sellers = require('./sellers');
const products = require('./products');
const categories = require('./categories');
const orders = require('./orders');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to fondidita API!'})
});

router.use('/customers', customers);
router.use('/sellers', sellers);
router.use('/products', products);
router.use('/categories', categories);
router.use('/orders', orders);


module.exports = router;
