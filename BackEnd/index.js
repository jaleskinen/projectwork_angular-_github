var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var horse = require('./modules/horse');
var todo = require('./modules/todo');
var personhour = require('./modules/personhour');
var stablecalendar = require('./modules/stablecalendar');
var paddoc = require('./modules/paddoc');
var feed = require('./modules/feed');
var health = require('./modules/health');
var horsehour = require('./modules/horsehour');
var user = require('./modules/user');

//This is used only for testing purposes, to be removed from tthe final version!
var test = require('./modules/test');

//This is used for creating a secret key value
var uuid = require('uuid');
//This is used to create a session object for client
var session = require('express-session');

var app = express();

//============ MIDDLEWARES =================
// Must be befoer routers, sometimes also order is fixed

app.use(session({
    secret: uuid.v1(),
    cookie: {maxAge: 6000000}
}));
//bodyParser urlencoded() middleware parses the json object from HTTP POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
        
    console.log(req.method);
    //console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    //console.log(req.session);
    //console.log(database.Person);
    //database.myFunction();
    //Send request forward in stack
    next();
});

app.use('/', express.static(path.join(__dirname, '../FrontEnd/views')));
app.use('/FrontEnd/css', express.static(path.join(__dirname, '../FrontEnd/css')));
app.use('/FrontEnd/lib', express.static(path.join(__dirname, '../FrontEnd/lib')));
app.use('/FrontEnd/module', express.static(path.join(__dirname, '../FrontEnd/module')));
app.use('/FrontEnd/controllers', express.static(path.join(__dirname, '../FrontEnd/controllers')));
app.use('/FrontEnd/factories', express.static(path.join(__dirname, '../FrontEnd/factories')));

app.use('/persons', person);
app.use('/horses', horse);
app.use('/todos', todo);
app.use('/personhours', personhour);
app.use('/stablecalendars', stablecalendar);
app.use('/paddocs', paddoc);
app.use('/feeds', feed);
app.use('/healths', health);
app.use('/horsehours', horsehour);
app.use('/users', user);

//This is used only for testing purposes, to be removed from the final version!
app.use('/tests', test);


//============ ROUTERS======================

app.get('/logout', function (req, res) {
    
    // req.session.kayttaja = null; other way to remove user session
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);