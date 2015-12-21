"use strict";
var query = require('./queries');
/**
  *This file is a router for User resource
  *Version:0.0.1
  *Author:Jarmo Leskinen
  *Description:Created this new file
  */

var express = require("express");

var router = express.Router();

router.get('/', function (req, res) {
    
    query.getUsersByUsername(req, res);
});


//This router handles a post login request to uri
router.post('/login', function (req, res) {
    
    query.loginUser(req, res);
});

//This router handles a post register request to uri
router.post('/register', function (req, res) {
    
    query.registerUser(req, res);
});

module.exports = router;