"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /horsehours context
router.get('/', function (req, res) {
    
    db.getAllHorsehours(req, res);
});

//Handle POST request for /horsehours context
router.post('/', function (req, res) {
    
    db.saveNewHorsehour(req, res);
});

//Handle UPDATE request for /horsehours context
router.put('/', function (req, res) {
    
    db.updateHorsehour(req, res);
});

//Handle DELETE request for /horsehours context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deleteHorsehour(req, res);
});

module.exports = router;