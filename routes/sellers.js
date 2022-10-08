const router = require('express').Router();
const { getSellers, getSeller, createSeller, updateSeller, deleteSeller,signUpSeller } = require('../controllers/sellers')

router.get('/', getSellers);
router.get('/:id', getSeller);
router.post('/', createSeller);
router.patch('/:id', updateSeller);
router.delete('/:id', deleteSeller);
router.post('/signUpSeller', signUpSeller);



module.exports = router;