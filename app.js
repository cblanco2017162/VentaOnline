const express = require('express');
const cors = require('cors');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

module.exports = app;