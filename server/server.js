'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  // res.send("Hello world!");
  res.status(404).send({
    error: 'Page not found.',
    name: "Todo App v1.0"
  });
});

app.get('/users', (req, res) => {

  res.send([
    {
      name: "John",
      age: 21
    },
    {
      name: "Bob",
      age: 30
    },
    {
      name: "Alice",
      age: 35
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
