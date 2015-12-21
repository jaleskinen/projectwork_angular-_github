"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /persons context
router.get('/', function (req, res) {
    
    db.getAllHorses(req, res);
});

//Handle POST request for /persons context
router.post('/', function (req, res) {
    
    db.saveNewHorse(req, res);
});

//Handle UPDATE request for /persons context
router.put('/', function (req, res) {
    console.log('router.put: ' + req.body.Kutsumanimi);
    db.updateHorse(req, res);
});

//Handle DELETE request for /persons context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    db.deleteHorse(req, res);
});

module.exports = router;