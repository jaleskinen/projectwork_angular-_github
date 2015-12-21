main_module.factory('mainFactory', function ($resource, $http) {
    
    console.log('mainFactory loaded');
    
    var path, resoursePath, i;
    
    var factory = {};
    
    path = location.href.split("#/")[1];
    console.log('path: ' + path);
    
    console.log('Factory path: ' + path);
    if (path === "horse" || path === "modifyHorse" || path === "addHorse") {
        resoursePath = "/horses";
    } else if (path === "feedHorse" || path === "modifyFeedHorse" || path === "addFeedHorse") {
        resoursePath = "/feeds";
    } else if (path === "healthHorse" || path === "modifyHealthHorse" || path === "addHealthHorse") {
        resoursePath = "/healths";
    } else if (path === "person" || path === "modifyPerson" || path === "addPerson") {
        resoursePath = "/persons";
    } else if (path === "todo" || path === "modifyTodo" || path === "addTodo") {
        resoursePath = "/todos";
    } else if (path === "stableCalendar" || path === "modifyStableCalendar" || path === "addStableCalendar") {
        resoursePath = "/stablecalendars";
    } else if (path === "paddoc" || path === "modifyPaddoc" || path === "addPaddoc") {
        resoursePath = "/paddocs";
    } else if (path === "horseHour" || path === "modifyHorseHour" || path === "addHorseHour") {
        resoursePath = "/horsehours";
    } else if (path === "personHour" || path === "modifyPersonHour" || path === "addPersonHour") {
        resoursePath = "/personhours";
    } else if (path === "test" || path === "modifyTest" || path === "addTest") {
        resoursePath = "/tests";
    } else {
        console.log("HTML FILE MISSING!");
    }

    factory.collectionArray = [];
    
    factory.selected_id = null;
    
    factory.getCollectionData = function (callbackFunc) {
        console.log('factory.getCollectionData collectionArray.length: ' + factory.collectionArray.length);
        if (factory.collectionArray.length === 0) {
            var resource = $resource(resoursePath, {}, {'get': {method: 'GET'}});
            resource.query().$promise.then(function (data) {
                factory.collectionArray = data;
                callbackFunc(factory.collectionArray);
                
            }, function (error) {
                console.log('function(error)');
                factory.collectionArray = [];
                callbackFunc(factory.collectionArray);
            });
        } else {
            
            callbackFunc(factory.collectionArray);
        }
    };
    
    //Updates new data to back end
    factory.insertCollectionData = function (data) {
        console.log('factory.insertCollectionData: ' + resoursePath);
        var resource = $resource(resoursePath, {}, {'post': {method: 'POST'}});
        return resource.post(data).$promise;
    };
    
    //Updates the data to back end
    factory.updateData = function (data) {
        console.log('factory.updateData: ' + resoursePath);
        var resource = $resource(resoursePath, {}, {'put': {method: 'PUT'}});
        return resource.put(data).$promise;
    };
    
    //Delete the data from back end
   /* factory.deleteData = function(data){
        $http.defaults.headers.common['content-type'] = 'application/json'; 
        var resource = $resource(resoursePath,{},{'delete':{method:'DELETE'}});
        return resource.delete(data).$promise;
    }*/
    
    /**
      *This function searches a document from array containing an id
      *that was stored when user cliked the row in the partial_dataView
      *page. When it finds the correct one from the array, it returns
      *that object.
      */
    factory.getSelectedDocument = function () {
        
        for (i = 0; i < factory.collectionArray.length; i++) {
            
            if (factory.collectionArray[i]._id === factory.selected_id) {
                
                return factory.collectionArray[i];
            }
        }
        
    };
    
    //Factory must always return an object!!!!
    return factory;
    
});