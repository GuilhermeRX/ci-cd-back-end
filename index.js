require('dotenv/config')
const express = require('express');
const port = process.env.PORT || 3000;
const { Product } = require('./models');

const app = express();
app.use(express.json());


app.post('/products', async (req, res) => {
  const { name } = req.body;
  const product = await Product.create({ name });
  res.status(201).json(product);
});

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

app.get('/', (_req, res) => {
  res.send('Hello Back End');
})

app.listen(port, () => console.log(`Rodando na porta ${port}!`))