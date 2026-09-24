// Final assignment:
// - GET /products  -> returns a list of products
// - POST /products -> accepts JSON data and adds a new product to the list
// Test both routes with Postman.

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); // parse JSON request bodies

let products = [
  { id: 1, name: 'Widget' },
  { id: 2, name: 'Gadget' }
];

// GET /products -> return the current list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products -> add a new product to the list
app.post('/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
