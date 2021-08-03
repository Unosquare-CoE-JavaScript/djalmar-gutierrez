const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const schemaValidator = require('../middleware/schemaValidator');
const productSchema = require('../schemas/productSchema');
const tokenValidator = require('../middleware/tokenValidator');

router.post('/',
    tokenValidator.validateToken,
    schemaValidator.validateBody(productSchema.createProductSchema),
    productController.createProduct);

router.get('/:id',
    tokenValidator.validateToken,
    productController.getProductById);

router.put('/',
    tokenValidator.validateToken,
    schemaValidator.validateBody(productSchema.updateProductSchema),
    productController.updateProduct);

router.get('/',
    tokenValidator.validateToken,
    schemaValidator.validateQuery(productSchema.getAllProductsSchema),
    productController.getAllProducts);

module.exports = router;