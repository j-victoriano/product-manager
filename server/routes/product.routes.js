const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.FindAllProducts);
    app.get('/api/products/:id', ProductController.FindOneProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.post('/api/products', ProductController.createProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}