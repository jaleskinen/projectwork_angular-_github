//This is Pehtoori main module.
var main_module = angular.module('main_module', ['ngRoute', 'ngResource', 'ngAnimate', 'flash']);

//Create basic configuration for our angular app.
//Configuration includes routers for Pehtoori views.
main_module.config(function ($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'login.html',
        controller: 'loginController'
    }).when('/main', {
        templateUrl: 'main.html',
        controller:  'loginController'
    }).when('/horse', {
        templateUrl: 'horse.html',
        controller: 'mainController'
    }).when('/addHorse', {
        templateUrl: 'addHorse.html',
        controller: 'mainController'
    }).when('/modifyHorse', {
        templateUrl: 'modifyHorse.html',
        controller: 'mainController'
    }).when('/feedHorse', {
        templateUrl: 'feedHorse.html',
        controller: 'mainController'
    }).when('/addFeedHorse', {
        templateUrl: 'addFeedHorse.html',
        controller: 'mainController'
    }).when('/modifyFeedHorse', {
        templateUrl: 'modifyFeedHorse.html',
        controller: 'mainController'
    }).when('/healthHorse', {
        templateUrl: 'healthHorse.html',
        controller: 'mainController'
    }).when('/addHealthHorse', {
        templateUrl: 'addHealthHorse.html',
        controller: 'mainController'
    }).when('/modifyHealthHorse', {
        templateUrl: 'modifyHealthHorse.html',
        controller: 'mainController'
    }).when('/person', {
        templateUrl: 'person.html',
        controller: 'mainController'
    }).when('/addPerson', {
        templateUrl: 'addPerson.html',
        controller: 'mainController'
    }).when('/modifyPerson', {
        templateUrl: 'modifyPerson.html',
        controller: 'mainController'
    }).when('/todo', {
        templateUrl: 'todo.html',
        controller: 'mainController'
    }).when('/addTodo', {
        templateUrl: 'addTodo.html',
        controller: 'mainController'
    }).when('/modifyTodo', {
        templateUrl: 'modifyTodo.html',
        controller: 'mainController'
    }).when('/stableCalendar', {
        templateUrl: 'stableCalendar.html',
        controller: 'mainController'
    }).when('/addStableCalendar', {
        templateUrl: 'addStableCalendar.html',
        controller: 'mainController'
    }).when('/modifyStableCalendar', {
        templateUrl: 'modifyStableCalendar.html',
        controller: 'mainController'
    }).when('/paddoc', {
        templateUrl: 'paddoc.html',
        controller: 'mainController'
    }).when('/addPaddoc', {
        templateUrl: 'addPaddoc.html',
        controller: 'mainController'
    }).when('/modifyPaddoc', {
        templateUrl: 'modifyPaddoc.html',
        controller: 'mainController'
    }).when('/horseHour', {
        templateUrl: 'horseHour.html',
        controller: 'mainController'
    }).when('/addHorseHour', {
        templateUrl: 'addHorseHour.html',
        controller: 'mainController'
    }).when('/modifyHorseHour', {
        templateUrl: 'modifyHorseHour.html',
        controller: 'mainController'
    }).when('/personHour', {
        templateUrl: 'personHour.html',
        controller: 'mainController'
    }).when('/addPersonHour', {
        templateUrl: 'addPersonHour.html',
        controller: 'mainController'
    }).when('/modifyPersonHour', {
        templateUrl: 'modifyPersonHour.html',
        controller: 'mainController'
    }).when('/test', {
        templateUrl: 'test.html',
        controller: 'mainController'
    }).when('/addTest', {
        templateUrl: 'addTest.html',
        controller: 'mainController'
    }).when('/modifyTest', {
        templateUrl: 'modifyTest.html',
        controller: 'mainController'
    });
    
    
    
});