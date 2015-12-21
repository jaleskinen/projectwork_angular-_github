"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /hourcalendar.context
router.get('/', function (req, res) {
    
    db.getAllPersonhours(req, res);
});

//Handle POST request for /hourcalendar.context
router.post('/', function (req, res) {
    
    db.saveNewPersonhour(req, res);
});

//Handle UPDATE request for /hourcalendar.context
router.put('/', function (req, res) {
    
    db.updatePersonhour(req, res);
});

//Handle DELETE request for /hourcalendar.context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deletePersonhour(req, res);
});

module.exports = router;