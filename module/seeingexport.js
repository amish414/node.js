// we can call require multiple time any whew we want 


var checking = require('./1directexport');
checking();




 
// changing the property of object 

var greet = require('./2changingproperty');
greet.greet();
// if we want to change the properties of the object we can change it form here also we dont need to make it change from the main file 
// we can change it from the importe file
greet.greeting = "new msg from the impored file";  //  i have changed the file from the imported file
var newgreet =  require('./2changingproperty');
newgreet.greet();  
newgreet.somethingelse();






// this code is to- check the inheritance if the export object 

var check = require('./3makinginstance');
check();           // this statment will run the main funciton
check.abc();    //  this statment will run the new method added to the export object.




// importing constructor function
var importconstructor = require('./4importconstructorfucntion');
var gt = new importconstructor();
gt.greet();

// encapsulation 
var ga = require('./5encapsulation');
ga.greet123();
