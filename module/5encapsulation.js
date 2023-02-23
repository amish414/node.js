// declaring a variable
var gree = 'helloworld';
function greet(){
    console.log(gree);
}

module.exports = {
    greet123 : greet   // here we are just sending the function not the variable and it is not exposed to the other file
}