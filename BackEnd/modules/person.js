"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /persons context
router.get('/', function (req, res) {
    
    db.getAllPersons(req, res);
});

//Handle POST request for /persons context
router.post('/', function (req, res) {
    
    db.saveNewPerson(req, res);

});

//Handle UPDATE request for /persons context
router.put('/', function (req, res) {
    
    db.updatePerson(req, res);
});

//Handle DELETE request for /persons context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deletePerson(req, res);
});

module.exports = router;