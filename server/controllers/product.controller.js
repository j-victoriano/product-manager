const Product = require('../models/product.model');

module.exports.FindAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            res.json({message: 'Something went wrong..', error: err})
        });
}

module.exports.FindOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => {
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong..', error: err})
        });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong..', error: err})
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err));
}