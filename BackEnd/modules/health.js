"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /health context
router.get('/', function (req, res) {
    
    db.getAllHealths(req, res);
});

//Handle POST request for /health context
router.post('/', function (req, res) {
    
    db.saveNewHealth(req, res);
});

//Handle UPDATE request for /health context
router.put('/', function (req, res) {
    
    db.updateHealth(req, res);
});

//Handle DELETE request for /health context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deleteHealth(req, res);
});

module.exports = router;