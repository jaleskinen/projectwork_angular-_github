var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/pehtoori_Leskinen', connectionStatus);

//mongoose.connect('mongodb://localhost:27017/pehtoori', connectionStatus);

/*var db = mongoose.connect('mongodb://localhost:27017/pehtoori', connectionStatus);
var db2 = mongoose.connect('mongodb://localhost:27017/pehtoori_2', connectionStatus);
*/
/*var dbStatus = mongoose.connection;
dbStatus.on('error', console.error.bind(console, 'connection error:'));
dbStatus.once('open', function (callback) {
  console.log("We are conneted again:");
});
console.log(dbStatus.host); // localhost
console.log(dbStatus.port); // 27017
console.log(dbStatus.name); // myDatabase*/

/*
    Connetion callback for fail and ok cases
*/
function connectionStatus(err, ok) {
    
    if (err) {
        
        console.log("We are NOT conneted:");
        console.log(err.message);
    } else {
        
        console.log("We are conneted:");
    }
}

var Person = mongoose.model('Person', {
    Nimi: String,
    Osoite: String,
    Kategoria: String,
    Puhelin: String,
    Sahkoposti: String,
    Internet: String
}, 'person');

//Using exports object you expose the data to other modules
exports.Person = Person;

var User = mongoose.model('User', {
    username: {type: String, unique: true},
    password: String
    //users:[{type:mongoose.Schema.Types.ObjectId,ref:'Person'}]  //Is this needed or not?? One username/database
});
//Using exports object you expose the data to other modules
exports.Users = User;

var Horse = mongoose.model('Horse', {
    Nimi: String,
    Kutsumanimi: String,
    Syntymaaika: String,
    Sukuposti: String
}, 'horse');

//Using exports object you expose the data to other modules
exports.Horse = Horse;

var Todo = mongoose.model('Todo', {
    Aika: String,
    Ilmoittaja: String,
    Ilmoitus: String
}, 'todo');

//Using exports object you expose the data to other modules
exports.Todo = Todo;

var Personhour = mongoose.model('Personhour', {
    Paiva: String,
    Ilmoittaja: String,
    Tehtava: String,
    Tunnit: Number
}, 'personhour');

//Using exports object you expose the data to other modules
exports.Personhour = Personhour;

var Stablecalendar = mongoose.model('Stablecalendar', {
    Kellonaika: String,
    Maanantai: String,
    Tiistai: String,
    Keskiviikko: String,
    Torstai: String,
    Perjantai: String,
    Lauantai: String,
    Sunnuntai: String
}, 'stablecalendar');

//Using exports object you expose the data to other modules
exports.Stablecalendar = Stablecalendar;

var Paddoc = mongoose.model('Paddoc', {
    Hevonen: String,
    Aamutarha: String,
    Paivatarha: String,
    Iltatarha: String,
    Huomio: String
}, 'paddoc');

//Using exports object you expose the data to other modules
exports.Paddoc = Paddoc;

var Feed = mongoose.model('Feed', {
    Hevonen: String,
    Aamuruoka: String,
    Paivaruoka: String,
    Iltaruoka: String,
    Huomio: String
}, 'feed');

//Using exports object you expose the data to other modules
exports.Feed = Feed;

var Health = mongoose.model('Health', {
    Hevonen: String,
    Rokotukset: String,
    Madotukset: String,
    Hieronnat: String,
    Yleista: String
}, 'health');

//Using exports object you expose the data to other modules
exports.Health = Health;

var Horsehour = mongoose.model('Horsehour', {
    Aika: String,
    Hevonen: String,
    Laji: String,
    Tunnit: Number
}, 'horsehour');

//Using exports object you expose the data to other modules
exports.Horsehour = Horsehour;

var Test = mongoose.model('Test', {
    Test1: String,
    Test2: String,
    Test3: String
}, 'test');

//Using exports object you expose the data to other modules
exports.Test = Test;

exports.myFunction = function () {
    
    console.log("This ");

};


 


