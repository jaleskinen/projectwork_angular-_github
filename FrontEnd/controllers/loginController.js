//This is the controller for login
main_module.controller('loginController', function ($scope, loginFactory, $location, Flash) {
    
    //This is called when login button is pressed in login.html
    $scope.loginClicked = function () {
        
        console.log('login was pressed');
        
        var temp = {
            username: $scope.user,
            password: $scope.pass
        };
        

       
        //wait the response from server
        var waitPromise = loginFactory.startLogin(temp);
        waitPromise.then(function (data) {
            //Code inside this block will be called when success responce
            console.log('Login OK');
            //from server receives
            $location.path('/main');
            
        }, function (data) {
            //Code inside this block will be called when error responce
            console.log('Login Error');
            Flash.create('danger', 'Wrong Username or Password! Please try again.!', 'custom-class');
        });
    };
    
    $scope.registerClicked = function () {
        
        console.log('register was pressed');
        var temp = {
            username: $scope.user,
            password: $scope.pass
        };
        
        //wait the response from server
        var waitPromise = loginFactory.startRegister(temp);
        waitPromise.then(function succ(data) {
            //Code inside this block will be called when success responce
            console.log('Register status was ok');
            Flash.create('success', 'New user registrated', 'custom-class');
            
        }, function err(data) {
            //Code inside this block will be called when error responce
            console.log('Register Error:' + data.status);
            Flash.create('danger', 'Username ' + $scope.user + ' is already in use! Please use some other username!', 'custom-class');
        });
    };
    
    //Load user-specific presentation to main.html
    $.get(localStorage.username + ".html", function (data) {
        $("#includedPresentation").html(data);
    });

       
});