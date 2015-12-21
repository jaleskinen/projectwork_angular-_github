/*jslint nomen: true */
"use strict";
var db = require('./database');

/* This function gets all ducuments from person collection */
exports.getAllPersons = function (req, res) {
    
    db.Person.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new person information to person collection */

exports.saveNewPerson = function (req, res) {
    
    var personTemp = new db.Person(req.body);
    console.log('personTemp.Nimi: ' + personTemp.Nimi);
    
    //Save it to database
    personTemp.save(function (err, ok) {
        
        if (err) {
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Person OK!!");
        }
    });
};

/* This function deletes one person from person collection */
exports.deletePerson = function (req, res) {
    
    //what happens here is that req.params.id
    //return string "id=34844646bbsksjdks"
    //split function splits the string form "="
    //and creates an array where [0] contains "id"
    //and [1] contains "34844646bbsksjdks"
    console.log('req.params.id: ' + req.params.id);
    console.log(req.params);
    var id = req.params.id.split("=")[1];
    /*var userName = req.params.username.split("=")[1];*/
    db.Person.remove({_id: id}, function (err) {
        
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates person information to person collection */
exports.updatePerson = function (req, res) {
    
    var updateData = {
        Nimi: req.body.Nimi,
        Osoite: req.body.Osoite,
        Kategoria: req.body.Kategoria,
        Puhelin: req.body.Puhelin,
        Sahkoposti: req.body.Sahkoposti,
        Internet: req.body.Internet
    };
    db.Person.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.status(200).json({message: "Data updated"});
        }
    });
};

/* This function gets all ducuments from horse collection */
exports.getAllHorses = function (req, res) {
    
    db.Horse.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new Horse information to Horse collection */
exports.saveNewHorse = function (req, res) {
    
    var horseTemp = new db.Horse(req.body);
    console.log('horseTemp.Nimi: ' + horseTemp.Kutsumanimi);
    //Save it to database
    horseTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Horse OK!!");
        }
    });
};

/* This function deletes one horse from pershorseon collection */
exports.deleteHorse = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    db.Horse.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates horse information to horse collection */
exports.updateHorse = function (req, res) {
    console.log('exports.updateHorse: ' + req.body.Kutsumanimi);
    var updateData = {
        Nimi: req.body.Nimi,
        Kutsumanimi: req.body.Kutsumanimi,
        Syntymaaika: req.body.Syntymaaika,
        Sukuposti: req.body.Sukuposti
    };
    
    db.Horse.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            console.log('exports.updateHorse err');
            res.status(500).send(err.message);
        } else {
            console.log('exports.updateHorse success');
            res.status(200).send("Updated");
        }
    });
};

/* This function gets all ducuments from Todo collection */
exports.getAllTodos = function (req, res) {
    
    db.Todo.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new todo information to Todo collection */
exports.saveNewTodo = function (req, res) {
    
    var saveTemp = new db.Todo(req.body);
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Task OK!!");
        }
    });
};

/* This function deletes one todo from Todo collection */
exports.deleteTodo = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    db.Todo.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates Todo information to Todo collection */
exports.updateTodo = function (req, res) {
    var updateData = {
        Aika: req.body.Aika,
        Ilmoittaja: req.body.Ilmoittaja,
        Ilmoitus: req.body.Ilmoitus
    };
    
    db.Todo.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};
 
/* This function gets all ducuments from Stablecalendar collection */
exports.getAllStablecalendars = function (req, res) {
    
    db.Stablecalendar.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new document information to Stablecalendar collection */
exports.saveNewStablecalendar = function (req, res) {
    
    var saveTemp = new db.Stablecalendar(req.body);
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Task OK!!");
        }
    });
};

/* This function deletes one document from Stablecalendar collection */
exports.deleteStablecalendar = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    db.Stablecalendar.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates information to Stablecalendar collection */
exports.updateStablecalendar = function (req, res) {
    var updateData = {
        Kellonaika: req.body.Kellonaika,
        Maanantai: req.body.Maanantai,
        Tiistai: req.body.Tiistai,
        Keskiviikko: req.body.Keskiviikko,
        Torstai: req.body.Torstai,
        Perjantai: req.body.Perjantai,
        Lauantai: req.body.Lauantai,
        Sunnuntai: req.body.Sunnuntai
    };
    
    db.Stablecalendar.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
}; 

/* This function gets all ducuments from Paddoc collection */
exports.getAllPaddocs = function (req, res) {
    
    db.Paddoc.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new document information to Paddoc collection */
exports.saveNewPaddoc = function (req, res) {
    
    var saveTemp = new db.Paddoc(req.body);
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Task OK!!");
        }
    });
};

/* This function deletes one document from Paddoc collection */
exports.deletePaddoc = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    db.Paddoc.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates information to Paddoc collection */
exports.updatePaddoc = function (req, res) {
    var updateData = {
        Hevonen: req.body.Hevonen,
        Aamutarha: req.body.Aamutarha,
        Paivatarha: req.body.Paivatarha,
        Iltatarha: req.body.Iltatarha,
        Huomio: req.body.Huomio
    };
    
    db.Paddoc.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
}; 

/* This function gets all documents from Horsehour collection */
exports.getAllHorsehours = function (req, res) {
    
    db.Horsehour.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new document to Horsehour collection */
exports.saveNewHorsehour = function (req, res) {
    
    var saveTemp = new db.Horsehour(req.body);
    
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Item OK!!");
        }
    });
};

/* This function deletes one field from Horsehour collection */
exports.deleteHorsehour = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Horsehour.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates document information to Horsehour collection */
exports.updateHorsehour = function (req, res) {
    
    var updateData = {
        Aika: req.body.Aika,
        Hevonen: req.body.Hevonen,
        Laji: req.body.Laji,
        Tunnit: req.body.Tunnit
    };
    
    db.Horsehour.update({_id: req.body.id}, updateData, function (err) {
        
        if (err) {   
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};

/* This function gets all documents from Personhour collection */
exports.getAllPersonhours = function (req, res) {
    
    db.Personhour.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new document to Personhour collection */
exports.saveNewPersonhour = function (req, res) {
    
    var saveTemp = new db.Personhour(req.body);
    
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Item OK!!");
        }
    });
};

/* This function deletes one field from Personhour collection */
exports.deletePersonhour = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Personhour.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates document information to Personhour collection */
exports.updatePersonhour = function (req, res) {
    
    var updateData = {
        Paiva: req.body.Paiva,
        Ilmoittaja: req.body.Ilmoittaja,
        Tehtava: req.body.Tehtava,
        Tunnit: req.body.Tunnit
    };
    console.log("Personhour Paiva: " +  updateData.Paiva);
    console.log("Personhour Ilmoittaja: " + updateData.Ilmoittaja);
    console.log("Personhour Tehtava: " + updateData.Tehtava);
    console.log("Personhour Tunnit: " + updateData.Tunnit);
    
    db.Personhour.update({_id: req.body.id}, updateData, function (err) {
        
        if (err) {
            console.log("Personhour error: " + err.message);
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};

/* This function gets all documents from Health collection */
exports.getAllHealths = function (req, res) {
    
    db.Health.find(function (err, data) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new Health information to Health collection */
exports.saveNewHealth = function (req, res) {
    
    var saveTemp = new db.Health(req.body);
    
    //Save it to database
    saveTemp.save(function (err, ok) {
        
        if (err) {
            console.log(err.message);
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Item OK!!");
        }
    });
};

/* This function deletes one field from Health collection */
exports.deleteHealth = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Health.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates Health information to Health collection */
exports.updateHealth = function (req, res) {
    
    var updateData = {
        Hevonen: req.body.Hevonen,
        Rokotukset: req.body.Rokotukset,
        Madotukset: req.body.Madotukset,
        Hieronnat: req.body.Hieronnat,
        Yleista: req.body.Yleista
    };
    
    db.Health.update({_id: req.body.id}, updateData, function (err) {
        
        if (err) {   
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};

/* This function gets all documents from Feed collection */
exports.getAllFeeds = function (req, res) {

    db.Feed.find(function (err, data) {
        
        if (err) {
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new Feed information to Feed collection */
exports.saveNewFeed = function (req, res) {
    
    var feedTemp = new db.Feed(req.body);
    
    //Save it to database
    feedTemp.save(function (err, ok) {
        if (err) {
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send("Save New Item OK!!");
        }
    });
};

/*
This function deletes one field from Feed collection
*/
exports.deleteFeed = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Feed.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates Health information to Feed collection */
exports.updateFeed = function (req, res) {
    
    var updateData = {
        Hevonen: req.body.Hevonen,
        Aamuruoka: req.body.Aamuruoka,
        Paivaruoka: req.body.Paivaruoka,
        Iltaruoka: req.body.Iltaruoka,
        Huomio: req.body.Huomio
    };
    
    db.Feed.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};

/* This method add new user information to Users collection */
exports.registerUser = function (req, res) {
    var user = new db.Users(req.body);
    user.save(function (err) {
        
        if (err) {
            res.status(500).send({status: err.message});
        } else {
            res.status(200).send({status: "Ok"});
        }
    });
};

/* This method check user information from Users collection */
exports.loginUser = function (req, res) {
    
    var searchObject = {
        username: req.body.username,
        password: req.body.password
    };
    
    var mongoose = require('mongoose');
    var logUser = searchObject.username;
    mongoose.disconnect(connectToDB)
    
    function connectToDB() {
        mongoose.connect('mongodb://localhost:27017/pehtoori_' + logUser, function() {
        console.log('Connected to: pehtoori_' + logUser);
        })
    }; 
    
    db.Users.findOne(searchObject, function (err, data) {
        
        if (err) {
            console.log('err: ' + err.message);
            res.send(502, {status: err.message});
        } else {
            //=< 0 means wrong username or password
            if (data) {
                console.log('req.session.kayttaja: ' + data.username);
                req.session.kayttaja = data.username;
                res.send(200, {status: "Ok"});
            } else {
                console.log('Wrong username or password');
                res.send(401, {status: "Wrong username or password"});
            }  
        }
    });
};

/* This method get user information from the Users collection */
exports.getUsersByUsername = function (req, res) {
    
    var usern = req.params.username.split("=")[1];
    db.Users.find({username: usern}).
        populate('users').exec(function (err, data) {

            res.send(data[0].users);
        });
};



/* This function gets all documents from Test collection */
exports.getAllTests = function (req, res) {

    db.Test.find(function (err, data) {
        
        if (err) {
            res.status(500).send("Error in database!!");
        } else {
            res.status(200).send(data);
        }
    });
};

/* This function saves new Feed information to Test collection */
exports.saveNewTest = function (req, res) {
    
    var saveTemp = new db.Test(req.body);
        console.log('exports.saveNewTest: ' + req.body.Test1);
    //Save it to database
    saveTemp.save(function (err, ok) {
        if (err) {
             console.log('exports.saveNewTest: err');
            res.status(500).send("Error in database!!");
        } else {
             console.log('exports.saveNewTest: OK');
            res.status(200).send("Save New Item OK!!");
        }
    });
};

/*
This function deletes one field from Test collection
*/
exports.deleteTest = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Test.remove({_id: id}, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Delete done");
        }
    });
};

/* This method updates Health information to Feed collection */
exports.updateTest = function (req, res) {
    
    var updateData = {
        Test1: req.body.Test1,
        Test2: req.body.Test2,
        Test3: req.body.Test3
    };
    
    db.Test.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Updated");
        }
    });
};



