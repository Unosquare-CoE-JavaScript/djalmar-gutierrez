const productService = require('../service/productService');
const CreatedResponse = require('../constants/CreatedResponse');
const UpdatedResponse = require('../constants/UpdateResponse');
const DeletedResponse = require('../constants/DeleteResponse');

module.exports.createProduct = async (req, res) => {
    let response;
    try {
        let createdProduct = await productService.createProduct(req.body);
        response = new CreatedResponse(createdProduct);
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getAllProducts = async (req, res) => {
    let response;
    try {
        let products = await productService.getAllProducts(req.query);
        response = new CreatedResponse(products);
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getProductById = async (req, res) => {
    let response;
    try {
        let product = await productService.getProductById(req.params);
        response = new CreatedResponse(product);
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateProduct = async (req, res) => {
    let response;
    try {
        let createdProduct = await productService.updateProduct(
            { id: req.params.id, body: req.body });
        response = new UpdatedResponse(createdProduct); // use a UpdateResponse
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.deleteProduct = async (req, res) => {
    let response;
    try {
        await productService.deleteProduct(req.params);
        response = new DeletedResponse();
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}
