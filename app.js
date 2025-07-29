const express = require('express');
const app = express();

let items = [];
app.use(express.json());

app.get('/items', (req, res) => res.json(items));
app.post('/items', (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

app.listen(3000, () => console.log('Servidor monolític actiu al port 3000'));
