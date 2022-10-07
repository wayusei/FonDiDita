const router = require('express').Router();
const { getSellers, getSeller, createSeller, updateSeller, deleteSeller } = require('../controllers/sellers')

router.get('/', getSellers);
router.get('/:id', getSeller);
router.post('/', createSeller);
router.patch('/:id', updateSeller);
router.delete('/:id', deleteSeller);

module.exports = router;