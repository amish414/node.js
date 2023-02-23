// the most important concept of the node js is the inheritacne of the function constructor with out making 
// of the object dirctly inheritaning


function abc(){
    this.greeting = "hello world";  // made the main function constructor
}
abc.prototype.def = function(){
    console.log(this);         // this is the function adding to the main function constructor 
}
var greet = new abc();
greet.def();