const router = require('express').Router();
const customers = require('./customers');
const sellers = require('./sellers');
const products = require('./products');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to fondidita API!'})
});

router.use('/customers', customers);
router.use('/sellers', sellers);
router.use('/products', products);


module.exports = router;
