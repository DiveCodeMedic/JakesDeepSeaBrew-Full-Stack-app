const express = require('express');
const bodyParser = require('body-parser');
const customersRoute = require('./routes/notes.route');

const db = require('./models');

const app = express();


app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
app.use('/api/customers',customersRoute);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
