const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(cors());
app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.get('/api/similarHomes', (req, res) => {
  db.getAllHomes((err, homes) => {
    if (err) {
      res.status(400).send();
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).send(homes);
    }
  });
});

app.get('/api/favorited', (req, res) => {
  db.findFavorited((err, homes) => {
    if (err) {
      res.status(400).send();
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).send(homes);
    }
  });
});

app.post('/api/similarHomes', (req, res) => {
  const { id } = req.body;
  const { favorited } = req.body;
  db.favoriteHome(id, favorited, (err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200);
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




