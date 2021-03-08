/* eslint-disable import/no-unresolved */

const ProductService = require('../services/product.services');
const db = require('../models');

const { Products } = db;

exports.createProduct = (req, res) => {
  // Valskuate request
  if (!req.body.sku) {
    res.status(400).send({
      message: 'SKU can not be empty!',
    });
    return;
  }
  if (!req.body.name) {
    res.status(401).send({
      message: 'Name can not be empty!',
    });
    return;
  }
  if (!req.body.price) {
    res.status(402).send({
      message: 'Price can not be empty!',
    });
    return;
  }

  // Create a Product
  const product = {
    sku: req.body.sku,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  };

  // Save Product in the database
  ProductService.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Product.',
      });
    });
};

// Retrieve all Product Items from the database.
exports.getProducts = (req, res) => {
  ProductService.getProducts()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Products.',
      });
    });
};

// Find a single Product Item with an sku
exports.getProduct = (req, res) => {
  const { sku } = req.params;

  ProductService.getProduct(sku)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving Product with sku: ${sku}`,
      });
    });
};

// Delete a Product with the specified sku in the request
exports.deleteOne = (req, res) => {
  const { sku } = req.params;

  ProductService.deleteAll({
    where: { sku },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Product was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Product with sku=${sku}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Product with sku=${sku}`,
      });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  ProductService.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Products.',
      });
    });
};

// Update a Product with the specified sku in the request
exports.updateOne = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const { sku } = req.params.sku;

  ProductService.updateOne(req.body, {
    where: { sku },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Product was updated successfully!',
        });
      } else {
        res.send({
          message: `Cannot update Product with sku=${sku}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not update Product with sku=${sku}`,
      });
    });
};

// patch one product
app.patch('/products/:sku', async (request, response) => {
  const { sku } = request.params;
  const product = request.body;
  delete product.sku;
  await doActionThatMightFailValskuation(request, response, async () => {
    const patchResult = await Product
      .findOneAndUpdate({ sku }, product, {
        new: true,
      })
      .select('-_sku -__v');
    if (patchResult != null) {
      response.json(patchResult);
    } else {
      response.sendStatus(404);
    }
  });
});
