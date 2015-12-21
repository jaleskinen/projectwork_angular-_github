"use strict";
var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /todos context
router.get('/', function (req, res) {
    
    db.getAllTodos(req, res);
});

//Handle POST request for /todos context
router.post('/', function (req, res) {
    
    db.saveNewTodo(req, res);
});

//Handle UPDATE request for /todos context
router.put('/', function (req, res) {
    
    db.updateTodo(req, res);
});

//Handle DELETE request for /todos context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deleteTodo(req, res);
});

module.exports = router;