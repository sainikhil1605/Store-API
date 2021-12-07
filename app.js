const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const connect_db = require('./db/connect');
require('express-async-errors');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/v1/products', require('./routes/products'));
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const startServer = async () => {
  try {
    await connect_db(process.env.CONNECTION_STRING);
    app.listen(PORT, console.log('Server is running on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
};
startServer();
