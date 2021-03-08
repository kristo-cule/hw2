const ProductService = require('../services/product.services');

exports.createProduct = async function (req, res) {
  try {
    const product = await ProductService.createProduct(req, res);
    return res.status(200).json({ status: 200, data: product, message: 'Product successfully created' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getProducts = async function (req, res) {
  try {
    const products = await ProductService.getProducts();
    return res.status(200).json({ status: 200, data: products, message: 'Products successfully retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getProduct = async function (req, res) {
  try {
    const sku = req.params;
    const product = await ProductService.getProduct(sku);
    return res.status(200).json({ status: 200, data: product, message: 'Product successfully retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteProducts = async function (req, res) {
  try {
    const products = await ProductService.deleteProducts();
    // console.log(products);
    return res.status(200).json({ status: 200, deletedCount: products.deletedCount, message: 'Products successfully deleted' });
  } catch (e) {
    // console.log(req);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteProduct = async function (req, res) {
  try {
    const sku = req.params;
    const product = await ProductService.deleteProduct(sku);
    if (product.deletedCount === 0) {
      return res.status(200).json({ status: 200, deletedCount: product.deletedCount, message: 'Product with given SKU did not exist. Process finished successfully.' });
    }
    return res.status(200).json({ status: 200, deletedCount: product.deletedCount, message: 'Product successfully deleted' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateProduct = async function (req, res) {
  try {
    const sku = req.params;
    const product = await ProductService.updateProduct(sku, req, res);
    return res.status(200).json({ status: 200, data: product, message: 'Product successfully updated' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.patchProduct = async function (req, res) {
  try {
    const sku = req.params;
    const product = await ProductService.patchProduct(sku, req, res);
    return res.status(200).json({ status: 200, data: product, message: 'Product successfully patched' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
