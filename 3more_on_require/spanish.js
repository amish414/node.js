// importing the data from the json file

var greeting = require('./language.json');
var greet = function(){
    console.log(greeting.sp);
}
module.exports = greet;