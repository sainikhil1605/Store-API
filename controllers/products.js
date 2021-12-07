const Product = require('../models/products');
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');
  res.status(200).json(products);
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, select, numericFilters } = req.query;
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
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }
  if (select) {
    const selectList = select.split(',').join(' ');
    result = result.select(selectList);
  }
  if (numericFilters) {
    const operatorMap = {
      '<': '$lt',
      '<=': '$lte',
      '>': '$gt',
      '>=': '$gte',
      ':': '$eq',
    };
    const regex = /\b(<|>|>=|=|<|<=)\b/g;
    const filters = numericFilters.replace(
      regex,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, Hits: products.length });
};
module.exports = { getAllProductsStatic, getAllProducts };
