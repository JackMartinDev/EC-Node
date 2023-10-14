import Product from "../models/product.js"

const getProducts = (_, res ) => {
  Product.fetchAll(products => {
    if(products) {
        res.status(200).json(products);
    }else res.status(404);
  });
};

const getProduct = (req, res) =>{
  const productId = req.params.productId;
  Product.fetchById(productId, product => {
    console.log(product)
  })
}
const getIndex = (_, res) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

const getCart = (_, res) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

const getOrders = (_, res) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

const getCheckout = (_, res) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

export default {getProducts, getProduct, getIndex, getCart, getOrders, getCheckout}
