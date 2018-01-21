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
app.get('/pokemon/:id', function (req, res) {
    let id = req.param('id');
    let uri = "https://pokeapi.co/api/v2/pokemon/" +id;
    client.get(uri, function (data, response) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:3000/pokemon',
          })    
    res.json(data);
    })
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));