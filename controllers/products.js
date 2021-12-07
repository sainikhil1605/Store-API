const Product = require('../models/products');
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};
const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  if (company) {
    queryObject.company = company;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ products, Hits: products.length });
};
module.exports = { getAllProductsStatic, getAllProducts };
