require('dotenv').config();

const connectDB = require('./db/connect');
const jsonProducts = require('./db/products.json');
const Product = require('./models/products');

const start = async () => {
  try {
    connectDB(process.env.CONNECTION_STRING);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Done');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
