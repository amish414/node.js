 var person = {
   firstname : 'aman',
   lastname : 'singh',
    greet :  function(){ console.log("hello " + this.firstname + ' ' + this.lastname);},
    greet2 : function(){ console.log( `hello ${this.firstname} ${this.lastname}`);},
}
let anotherperson = {
    firstname : 'a',
    lastname: 'b',
}

person.greet();
person.greet2();
person.greet2.call({firstname : 'a' , lastname : 'b'} ,{ firstname : 'f' , lastname : 'g'});
let args = ['abc' , 'deg'];
let args1 = []
person.greet.apply({firstname : 'amish' , lastname : 'mangla'} , { firstname : 'f' , lastname : 'g'});

