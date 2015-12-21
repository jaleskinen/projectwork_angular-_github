"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /Stablecalendar.context
router.get('/', function (req, res) {
    
    db.getAllStablecalendars(req, res);
});

//Handle POST request for /Stablecalendar.context
router.post('/', function (req, res) {
    
    db.saveNewStablecalendar(req, res);
});

//Handle UPDATE request for /Stablecalendar.context
router.put('/', function (req, res) {
    
    db.updateStablecalendar(req, res);
});

//Handle DELETE request for /Stablecalendar.context, id comes from request.
router.delete('/:id', function (req, res) {
    
    db.deleteStablecalendar(req, res);
});

module.exports = router;