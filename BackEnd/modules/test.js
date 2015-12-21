"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /test context
router.get('/', function (req, res) {
    
    db.getAllTests(req, res);
});

//Handle POST request for /test context
router.post('/', function (req, res) {
    db.saveNewTest(req, res);
});

//Handle UPDATE request for /test context
router.put('/', function (req, res) {
    
    db.updateTest(req, res);
});

//Handle DELETE request for /test context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deleteTest(req, res);
});

module.exports = router;