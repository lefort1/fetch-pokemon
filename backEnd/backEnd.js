const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const app = express();
var Client = require('node-rest-client').Client;



var client = new Client();

//====ROOT DIRECTORY===//
app.get('/', function (req, res) {
    res.json('you did it');
});
//====Retrieve Pokemon===//
app.get('/pokemon', function (req, res) {
    client.get("https://pokeapi.co/api/v2/pokemon/1/", function (data, response) {
        res.json(data);
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));