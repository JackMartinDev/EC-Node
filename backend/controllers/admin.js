import Product from "../models/product.js"

const postAddProduct = (req, res) => {
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.status(200).json({message: "Product succesfully added", product: product});
};

const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

export default {postAddProduct, getProducts}
