const router = require('express').Router();
const {
    getCustomers,
} = require('../controllers/customers');
//const auth = require('../config/auth');

router.get('/', getCustomers);


module.exports = router;