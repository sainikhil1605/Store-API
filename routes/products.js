const router = require('express').Router();
const {
  getAllProductsStatic,
  getAllProducts,
} = require('../controllers/products');

router.get('/', getAllProducts);
router.get('/static', getAllProductsStatic);
module.exports = router;
