const Product = require('../database/models/productModel');
const { formatMongoData } = require('../helpers/dbHelper');
const constants = require('../constants');

module.exports.createProduct = async data => {
    try {
        let product = new Product({ ...data });
        let result = await Product.save();
        return formatMongoData(result);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
    try {
        let products = await Product.find({})
            .skip(parseInt(skip))
            .limit(parseInt(limit));
        return formatMongoData(products);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

module.exports.getProductById = async ({ id }) => {
    try {
        let product = await Product.findById(id);
        if (!product) throw new Error(constants.productMessages.PRODUCT_NOT_FOUND);
        return formatMongoData(products);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

module.exports.updateProduct = async ({ id, productUpdate }) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: id },
            productUpdate,
            { new: true }
        );
        if (!product) throw new Error(constants.productMessages.PRODUCT_NOT_FOUND);
        return formatMongoData(product);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

module.exports.deleteProduct = async ({ id }) => {
    try {
        let product = await Product.findByIdAndDelete(id);
        
        return formatMongoData(product);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}