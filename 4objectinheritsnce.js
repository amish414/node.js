// This code defines an object person with properties firstname, lastname, and a method greet that logs a greeting using the first and last name.
// Two objects, john and sunny, are then created using Object.create(person), which means they inherit the properties and methods of the person object. 
//The firstname and lastname properties of both objects are then set to specific values.
// Finally, the greet method is called on both john and sunny objects, which logs "hello john do" and "hello sunny do" respectively to the console.

person= {          // basic object 
    firstname : "",
    lastname :"",
    greet : function(){
        console.log('hello ' + this.firstname +' '+ this.lastname);
    }
}
var john = Object.create(person);   // here we are creating the person obejct with the given value and using greet property of person object
john.firstname = 'john';            // john inheri the property of person object and can change the value of person object
john.lastname = 'do';

var sunny = Object.create(person);
sunny.firstname = 'sunny';
sunny.lastname = 'do';

john.greet();
sunny.greet()
