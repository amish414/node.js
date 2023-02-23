
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  let anotherPerson = {
    firstName: "Jane",
    lastName: "Doe"
  };
  
  console.log(person.fullName());  // John Doe
  console.log(person.fullName.call(anotherPerson));  // Jane Doe
  
  let args ={
    firstName : 'abcd',
    lastName : 'def'
  }
  console.log(person.fullName.apply(args));  // Jane Doe
  