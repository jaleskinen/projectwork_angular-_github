//This is the main controller for all apges
main_module.controller('mainController', function ($scope, mainFactory, $location, Flash, $http, $resource, $filter) {
    
    var path, addPath, modifyPath, backPath, resoursePath, nameCollectionPath, date, day, month, year, today, temp;
    console.log('mainController loaded');
    
    path = location.href.split("#/")[1];
    console.log('path: ' + path);
    if (path === "horse" || path === "modifyHorse" || path === "addHorse") {
        addPath = "/addHorse";
        modifyPath = "/modifyHorse";
        backPath = "/horse";
        resoursePath = "/horses";
        nameCollectionPath = "/horses";
    } else if (path === "feedHorse" || path === "modifyFeedHorse" || path === "addFeedHorse") {
        addPath = "/addFeedHorse";
        modifyPath = "/modifyFeedHorse";
        backPath = "/feedHorse";
        resoursePath = "/feeds";
        nameCollectionPath = "/horses";
    } else if (path === "healthHorse" || path === "modifyHealthHorse" || path === "addHealthHorse") {
        addPath = "/addHealthHorse";
        modifyPath = "/modifyHealthHorse";
        backPath = "/healthHorse";
        resoursePath = "/healths";
        nameCollectionPath = "/horses";
    } else if (path === "person" || path === "modifyPerson" || path === "addPerson") {
        addPath = "/addPerson";
        modifyPath = "/modifyPerson";
        backPath = "/person";
        resoursePath = "/persons";
        nameCollectionPath = "/persons";
    } else if (path === "todo" || path === "modifyTodo" || path === "addTodo") {
        addPath = "/addTodo";
        modifyPath = "/modifyTodo";
        backPath = "/todo";
        resoursePath = "/todos";
        nameCollectionPath = "/persons";
    } else if (path === "stableCalendar" || path === "modifyStableCalendar" || path === "addStableCalendar") {
        addPath = "/addStableCalendar";
        modifyPath = "/modifyStableCalendar";
        backPath = "/stableCalendar";
        resoursePath = "/stablecalendars";
        nameCollectionPath = "/horses";
    } else if (path === "paddoc" || path === "modifyPaddoc" || path === "addPaddoc") {
        addPath = "/addPaddoc";
        modifyPath = "/modifyPaddoc";
        backPath = "/paddoc";
        resoursePath = "/paddocs";
        nameCollectionPath = "/horses";
    } else if (path === "horseHour" || path === "modifyHorseHour" || path === "addHorseHour") {
        addPath = "/addHorseHour";
        modifyPath = "/modifyHorseHour";
        backPath = "/horseHour";
        resoursePath = "/horsehours";
        nameCollectionPath = "/horses";
    } else if (path === "personHour" || path === "modifyPersonHour" || path === "addPersonHour") {
        addPath = "/addPersonHour";
        modifyPath = "/modifyPersonHour";
        backPath = "/personHour";
        resoursePath = "/personhours";
        nameCollectionPath = "/persons";
    } else if (path === "test" || path === "modifyTest" || path === "addTest") {
        addPath = "/addTest";
        modifyPath = "/modifyTest";
        backPath = "/test";
        resoursePath = "/tests";
        nameCollectionPath = "/persons";
    } else {
        console.log("HTML FILE MISSING!");
    }
    
    console.log('Controller path: ' + path);
    
    //Fetch login username
    $scope.loginPerson = localStorage.username;
    
    mainFactory.getCollectionData(dataCallback);
    
    function dataCallback(collectionArray) {
        
        $scope.collectionData = collectionArray;
    }

    //HTML Column order selection, default value is alphabetical order
    $scope.reverse = false;
    $scope.order = function (predicate) {
        console.log('scope.predicate: ' + predicate);
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    
    //Set default date to today to $scope.Aika and $scope.Paiva>
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    today = year + "." + month + "." + day;
    $scope.Aika = today;
    $scope.Paiva = today;
    
    //This is called when add button clicked from any on html's using this controller
    $scope.add = function () {
        console.log('Add Clicked');
        $location.path(addPath);

    };
    
    //This is called when changed to new html
    $scope.menuPath = function () {
        window.location.reload();

    };
    
    //This is called when add button clicked from any on html's using this controller
    $scope.addNew = function () {
        console.log('Add New Clicked');
        //Disable save until previous request handled, not needed if only one addition at once
        //$('#add').attr("disabled", true);
    
        if (path === "addHorse") {
            temp = {
                Nimi: $scope.Nimi,
                Kutsumanimi: $scope.Kutsumanimi,
                Syntymaaika: $filter('date')($scope.Syntymaaika, "dd.MM.yyyy"),
                Sukuposti: $scope.Sukuposti
            };
        } else if (path === "addFeedHorse") {
            temp = {
                Hevonen: $scope.Hevonen,
                Aamuruoka: $scope.Aamuruoka,
                Paivaruoka: $scope.Paivaruoka,
                Iltaruoka: $scope.Iltaruoka,
                Huomio: $scope.Huomio
            };
        } else if (path === "addHealthHorse") {
            temp = {
                Hevonen: $scope.Hevonen,
                Rokotukset: $filter('date')($scope.Rokotukset, "dd.MM.yyyy"),
                Madotukset: $filter('date')($scope.Madotukset, "dd.MM.yyyy"),
                Hieronnat: $filter('date')($scope.Hieronnat, "dd.MM.yyyy"),
                Yleista: $scope.Yleista
            };
        } else if (path === "addPerson") {
            temp = {
                Nimi: $scope.Nimi,
                Osoite: $scope.Osoite,
                Kategoria: $scope.Kategoria,
                Puhelin: $scope.Puhelin,
                Sahkoposti: $scope.Sahkoposti,
                Internet: $scope.Internet
            };
        } else if (path === "addTodo") {
            temp = {
                Aika: $filter('date')($scope.Aika, "dd.MM.yyyy"),
                Ilmoittaja: $scope.Ilmoittaja,
                Ilmoitus: $scope.Ilmoitus
            };
        } else if (path === "addStableCalendar") {
            temp = {
                Kellonaika: $scope.Kellonaika,
                Maanantai: $scope.Maanantai,
                Tiistai: $scope.Tiistai,
                Keskiviikko: $scope.Keskiviikko,
                Torstai: $scope.Torstai,
                Perjantai: $scope.Perjantai,
                Lauantai: $scope.Lauantai,
                Sunnuntai: $scope.Sunnuntai
            };
        } else if (path === "addPaddoc") {
            temp = {
                Hevonen: $scope.Hevonen,
                Aamutarha: $scope.Aamutarha,
                Paivatarha: $scope.Paivatarha,
                Iltatarha: $scope.Iltatarha,
                Huomio: $scope.Huomio
            };
        } else if (path === "addHorseHour") {
            temp = {
                Aika: $scope.Aika,
                Hevonen: $scope.Hevonen,
                Laji: $scope.Laji,
                Tunnit: $scope.Tunnit
            };
        } else if (path === "addPersonHour") {
            temp = {
                Paiva: $scope.Paiva,
                Ilmoittaja: $scope.Ilmoittaja,
                Tehtava: $scope.Tehtava,
                Tunnit: $scope.Tunnit
            };
        } else if (path === "addTest") {
            temp = {
                Test1: $scope.Test1,
                Test2: $scope.Test2,
                Test3: $scope.Test3
            };
        } else {
            console.log(" DATA MISSING!");
        }
        
        console.log('temp 0: ' + temp[Object.keys(temp)[0]]);
        
        mainFactory.insertCollectionData(temp).then(function (data) {
            
            mainFactory.collectionArray.push(data.data);
            console.log('Add OK');
            mainFactory.collectionArray = [];
            $location.path(backPath);
            Flash.create('success', 'Tiedot lisätty tietokantaan!', 'custom-class');
            //$('#add').attr("disabled", false);
        }, function (error) {
            console.log('Add FAIL');
            mainFactory.collectionArray = [];
            $location.path(backPath);
            //$('#add').attr("disabled", false);
            Flash.create('warning', 'Virhe tietokantaan lisäämisessä!', 'custom-class');
        });
        
    };
    
    $scope.modify = function (id) {
        mainFactory.selected_id = id;
        $location.path(modifyPath).replace();
    };
     
    //This is called when "Palaa" clicked
    $scope.backClicked = function () {
        console.log('Back Clicked');
        mainFactory.collectionArray = [];
        $location.path(backPath);
    };
    
    //Email button clicked
    $scope.emailClicked = function (email) {
        console.log("username: " + localStorage.username);
        console.log("click_data value: " + email);
        $('#email_form').attr('action', 'mailto:' + $scope.email + '?subject=' + "Pehtoori " + localStorage.username + " lähetti sinulle viestin");
        $('#email_form').submit();
    };
    
    $scope.wwwClicked = function (wwwPage) {
        console.log("www button pressed");
        console.log("click_data value: " + wwwPage);
        //Check if www address is available
        if ($scope.www === "") {
            Flash.create('warning', 'WWW Sivua ei ole määritelty!', 'custom-class');
        } else {
            window.open("http://" + wwwPage);
        }
    };
    
    //Modify functions Start
    var selectedDocument = mainFactory.getSelectedDocument();
    
    if (path === "modifyHorse") {
        $scope.id = selectedDocument._id;
        $scope.Nimi = selectedDocument.Nimi;
        $scope.Kutsumanimi = selectedDocument.Kutsumanimi;
        $scope.Syntymaaika = selectedDocument.Syntymaaika;
        $scope.Sukuposti = selectedDocument.Sukuposti;
    } else if (path === "modifyFeedHorse") {
        $scope.id = selectedDocument._id;
        $scope.Hevonen = selectedDocument.Hevonen;
        $scope.Aamuruoka = selectedDocument.Aamuruoka;
        $scope.Paivaruoka = selectedDocument.Paivaruoka;
        $scope.Iltaruoka = selectedDocument.Iltaruoka;
        $scope.Huomio = selectedDocument.Huomio;
    } else if (path === "modifyHealthHorse") {
        $scope.id = selectedDocument._id;
        $scope.Hevonen = selectedDocument.Hevonen;
        $scope.Rokotukset = selectedDocument.Rokotukset;
        $scope.Madotukset = selectedDocument.Madotukset;
        $scope.Hieronnat = selectedDocument.Hieronnat;
        $scope.Yleista = selectedDocument.Yleista;
    } else if (path === "modifyPerson") {
        $scope.id = selectedDocument._id;
        $scope.Nimi = selectedDocument.Nimi;
        $scope.Osoite = selectedDocument.Osoite;
        $scope.Puhelin = selectedDocument.Puhelin;
        $scope.Kategoria = selectedDocument.Kategoria;
        $scope.Sahkoposti = selectedDocument.Sahkoposti;
        $scope.Internet = selectedDocument.Internet;
    } else if (path === "modifyTodo") {
        $scope.id = selectedDocument._id;
        $scope.Aika = selectedDocument.Aika;
        $scope.Ilmoittaja = selectedDocument.Ilmoittaja;
        $scope.Ilmoitus = selectedDocument.Ilmoitus;
    } else if (path === "modifyStableCalendar") {
        $scope.id = selectedDocument._id;
        $scope.Kellonaika = selectedDocument.Kellonaika;
        $scope.Maanantai = selectedDocument.Maanantai;
        $scope.Tiistai = selectedDocument.Tiistai;
        $scope.Keskiviikko = selectedDocument.Keskiviikko;
        $scope.Torstai = selectedDocument.Torstai;
        $scope.Perjantai = selectedDocument.Perjantai;
        $scope.Lauantai = selectedDocument.Lauantai;
        $scope.Sunnuntai = selectedDocument.Sunnuntai;
    } else if (path === "modifyPaddoc") {
        $scope.id = selectedDocument._id;
        $scope.Hevonen = selectedDocument.Hevonen;
        $scope.Aamutarha = selectedDocument.Aamutarha;
        $scope.Paivatarha = selectedDocument.Paivatarha;
        $scope.Iltatarha = selectedDocument.Iltatarha;
        $scope.Huomio = selectedDocument.Huomio;
    } else if (path === "modifyHorseHour") {
        $scope.id = selectedDocument._id;
        $scope.Aika = selectedDocument.Aika;
        $scope.Hevonen = selectedDocument.Hevonen;
        $scope.Laji = selectedDocument.Laji;
        $scope.Tunnit = selectedDocument.Tunnit;
    } else if (path === "modifyPersonHour") {
        $scope.id = selectedDocument._id;
        $scope.Paiva = selectedDocument.Paiva;
        $scope.Ilmoittaja = selectedDocument.Ilmoittaja;
        $scope.Tehtava = selectedDocument.Tehtava;
        $scope.Tunnit = selectedDocument.Tunnit;
    } else if (path === "modifyTest") {
        $scope.id = selectedDocument._id;
        $scope.Test1 = selectedDocument.Test1;
        $scope.Test2 = selectedDocument.Test2;
        $scope.Test3 = selectedDocument.Test3;
    }
    
    $scope.update = function () {
        //console.log('Update Nimi: ' + $scope.Nimi);
        if (path === "modifyHorse") {
            temp = {
                id: $scope.id,
                Nimi: $scope.Nimi,
                Kutsumanimi: $scope.Kutsumanimi,
                Syntymaaika: $scope.Syntymaaika,
                Sukuposti: $scope.Sukuposti
            };
        } else if (path === "modifyFeedHorse") {
            temp = {
                id: $scope.id,
                Hevonen: $scope.Hevonen,
                Aamuruoka: $scope.Aamuruoka,
                Paivaruoka: $scope.Paivaruoka,
                Iltaruoka: $scope.Iltaruoka,
                Huomio: $scope.Huomio
            };
        } else if (path === "modifyHealthHorse") {
            temp = {
                id: $scope.id,
                Hevonen: $scope.Hevonen,
                Hieronnat: $scope.Hieronnat,
                Madotukset: $scope.Madotukset,
                Rokotukset: $scope.Rokotukset,
                Yleista: $scope.Yleista
            };
        } else if (path === "modifyPerson") {
            temp = {
                id: $scope.id,
                Nimi: $scope.Nimi,
                Osoite: $scope.Osoite,
                Puhelin: $scope.Puhelin,
                Kategoria: $scope.Kategoria,
                Sahkoposti: $scope.Sahkoposti,
                Internet: $scope.Internet
            };
        } else if (path === "modifyTodo") {
            temp = {
                id: $scope.id,
                Aika: $scope.Aika,
                Ilmoittaja: $scope.Ilmoittaja,
                Ilmoitus: $scope.Ilmoitus
            };
        } else if (path === "modifyStableCalendar") {
            temp = {
                id: $scope.id,
                Kellonaika: $scope.Kellonaika,
                Maanantai: $scope.Maanantai,
                Tiistai: $scope.Tiistai,
                Keskiviikko: $scope.Keskiviikko,
                Torstai: $scope.Torstai,
                Perjantai: $scope.Perjantai,
                Lauantai: $scope.Lauantai,
                Sunnuntai: $scope.Sunnuntai
            };
        } else if (path === "modifyPaddoc") {
            temp = {
                id: $scope.id,
                Hevonen: $scope.Hevonen,
                Aamutarha: $scope.Aamutarha,
                Paivatarha: $scope.Paivatarha,
                Iltatarha: $scope.Iltatarha,
                Huomio: $scope.Huomio
            };
        } else if (path === "modifyHorseHour") {
            temp = {
                id: $scope.id,
                Aika: $scope.Aika,
                Hevonen: $scope.Hevonen,
                Laji: $scope.Laji,
                Tunnit: $scope.Tunnit
            };
        } else if (path === "modifyPersonHour") {
            temp = {
                id: $scope.id,
                Paiva: $scope.Paiva,
                Ilmoittaja: $scope.Ilmoittaja,
                Tehtava: $scope.Tehtava,
                Tunnit: $scope.Tunnit
            };
        } else if (path === "modifyTest") {
            temp = {
                id: $scope.id,
                Test1: $scope.Test1,
                Test2: $scope.Test2,
                Test3: $scope.Test3
            };
        }
        
        mainFactory.updateData(temp).then(success, error);
    };
    
    function success() {
        console.log('Function success');
        mainFactory.collectionArray = [];
        $location.path(backPath).replace();
    }
    
    function error(data) {
        Flash.create('danger', data.message, 'custom-class');
    }
    
    //This is called when Delete Clicked
    $scope.delete = function () {
        //console.log('Delete Nimi: ' + $scope.Nimi);
        $http.delete('http://localhost:3000' + resoursePath + '/id=' + $scope.id)
            .success(function (data) {
                console.log('path: ' + path);
                console.log("Delete response received");
                Flash.create('success', "Data deleted from the database", 'custom-class');
                mainFactory.collectionArray = [];
                $location.path(backPath).replace();
            });
    };
    
    
    //Get collection data, to be used on addHealth, addPaddoc, addTodo.... name dropdown lists
    collectionArray = [];
    var resource = $resource(nameCollectionPath, {}, {'get': {method: 'GET'}});
    resource.query().$promise.then(function (data) {
        for (i = 0; i < data.length; i++) {
            collectionArray[i] = data[i].Nimi;
        }
        $scope.document = collectionArray;
    });

    //Modify Funtions End
    

    
   

    //Test functions START  
    $('table').on('click', 'td', function() {
       $(this).addClass('active');
    });

    //Test functions END
    
});