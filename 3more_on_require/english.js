// imporeting the data from the json file
var greeting = require('./language.json');

var greet = function(){
    console.log(greeting.en);         // greeting is an object and we have to specify which property we want to take
}
module.exports = greet;