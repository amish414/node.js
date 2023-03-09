// Yes, when an asynchronous function is called with the await keyword, it waits for the promise to resolve and returns the resolved value.
// But when a synchronous function is called with the await keyword, it doesn't make the function asynchronous, instead, it wraps the returned 
//value in a resolved promise

//  ------------------- important concept ------------------------//
// await wait for the promises to resolve and if function is synchronous then also it will convert the that fucntion into promise implicitely and 
//In JavaScript, the await keyword is used to pause the execution of a function until a Promise is resolved or rejected. When you use await in a function, 
// the function is implicitly wrapped in a Promise and its result is resolved or rejected based on the result of the awaited Promise.
// This means that if you use await in a function that doesn't return a Promise, the function will be implicitly converted into a Promise that resolves to the return value of the function.


// explnaition
// 1-> first all the code with console.log will print and code will implement line by line 
//2-> then code will enter the asynch code and it will implement line by line the it will call the sum function untill it take time it will
// print the console.log('8') line and then after the sum value is calculated then it will return to the main function
//3-> then the rest of the code of that asynch block is implemented 
//4-> main point is to remenver that when ever await is used code below is blocked with in the block scope rest of the code will run as it was running
//5-> to make this concept clear then go through notes

console.log('1'); // this console is synchronous file 
console.log('2'); // this console is synchronous file 
function sum(a,b){ // this sum is also a synchronous 
    // setTimeout
    console.log('5');
    return function(a,b){
        // console.log(a+b);
        return a+b;
    };
}
// console.log(sum1(8,1));
(async function abc (){          // here we are making a asynchronous function 
    console.log( await sum1(8,1))
})();  // this () will invoke the abc function when ever we write function and to call it imediately then we will add () at the end
async function sum1(a,b){      // this is async function 
        console.log('3');
        console.log(await sum(a,b)(a,b));     // here we are adding wait for the funciton to return the value  
       var a1 = await sum(a,b)(a,b);  //// here we are adding wait for the funciton to return the value  
       console.log(a1);
       console.log('4');         
    return a1;
}
console.log('8')       



// console.log(sum(1,3));
// console.log(num);
// console.log(value);++

