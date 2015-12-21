main_module.factory('loginFactory', function ($resource) {
    
    var factory = {};
    
    //This function can be called from ANY controller using this factory implementation
    factory.startLogin = function (data) {
        
        console.log('startLogin: ' + data.username);
        
        //Save current username to localstorage and sessionstorage. 
        //Used in other controllers to identify username
        localStorage.username = data.username;
        sessionStorage.username = data.username;
        
        console.log('localStorage.username: ' + data.username);
        //Create resource for context "/users/login", empty object {} includes options
        var req = $resource('/users/login', {}, {'post': {method: 'POST'}});
        //Use POST method to send the username and password to above context
        //Note that we return an promise object from here
        return req.post(data).$promise;
        
    };
    
    //This function can be called from ANY controller using this factory implementation
    factory.startRegister = function (data) {
        
        console.log('startRegister: ' + data.username);
        //Create resource for context "/users/register"
        var req = $resource('/users/register', {}, {'post': {method: 'POST'}});
        //Use POST method to send the username and password to above context
        //Note that we return an promise object from here
        return req.post(data).$promise;
        
    };
    
    //Factory must always return an object!!!!
    return factory;
    
});