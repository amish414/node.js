// you can directly export the object and manuplating the property of object
 
function abc(){
    this.greeting = "hello world";
    this.greet = function(){
        console.log(this.greeting);
    }
}
module.exports = new abc();

module.exports.somethingelse = function(){
    console.log("something exception");
}