// making my first module
// require is the keyword which is used to import file which we want to use in the here
//    "./" means that is the same file in which nodejs file are stored
//require('./greet.js');  // made the first module
// tempfun();    // if we try to directly call the function from another file it will not work .

const myExp = require('./greet.js');
myExp.tempfun();
myExp.a();


function peroson (firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.abcde = function(){
        console.log("bye" + firstname);
    }
}

peroson.prototype.abc =function(){
    console.log("hi"+ this.firstname);
}
var peroson1 = new peroson("abcde" , "xyz");
peroson1.abc();
peroson1.abcde();


// immediatly invoked function
(function(fn,ln){
    console.log(fn +' '+ln );
}("jo" , "dan"));