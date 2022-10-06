const router = require('express').Router();
const customers = require('./customers');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to fondidita API!'})
});

router.use('/customers', customers);


module.exports = router;
