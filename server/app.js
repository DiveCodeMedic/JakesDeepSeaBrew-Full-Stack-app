const express = require('express');
const bodyParser = require('body-parser');


const db = require('./models');

const app = express();


app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());


app.use('/api/customers', require('./routes/customers'));
app.use('/api/products', require('./routes/products'));
app.use('/api/saleItems', require('./routes/saleItems'));
app.use('/api/sales', require('./routes/sales'));



app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
