const express = require('express');
const app = express();

const recipe_api = require('./recipe_API_JSON.json');
  
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/recipe', (req, res) => {
    res.json(recipe_api);
} );