let a = 10;
let b = 20;
let c = a+b;
console.log(c);

function greet(){
    console.log("hello");
}
function repeat(fn){
    fn();
}
repeat(greet);
repeat(function() {
    console.log("hello tony");
});

