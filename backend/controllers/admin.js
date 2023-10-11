import Product from "../models/product.js"

const getAddProduct = (req, res, next) => {
    console.log("here")
};


const postAddProduct = (req, res, next) => {
  const {title, imageUrl, price, description} = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.status(200).json({message: "Product succesfully added"});
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

export default {getAddProduct, postAddProduct, getProducts}
