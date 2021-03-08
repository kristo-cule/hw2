const router = require('express').Router();
const ProductController = require('../controllers/product.controller');

module.exports = app => {
    //Create new user
    router.post('/', ProductController.createProduct);

    //get all users
    router.get('/', ProductController.getProducts);

    //get user based on sku
    router.get('/:sku', ProductController.getProduct);

    //delete all users
    router.delete('/', ProductController.deleteProducts)

    //delete user based on sku
    router.delete('/:sku', ProductController.deleteProduct)

    //update user based on sku
    router.put('/:sku', ProductController.updateProduct)

    //patch user based on sku
    router.patch('/:sku', ProductController.patchProduct)

    app.use('/products', router);
}