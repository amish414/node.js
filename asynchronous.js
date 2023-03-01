function abc(a,b){
setTimeout(()=>{
    return a+b;
},5000)
}
console.log(abc(1,2));      // console is a synchronous function and it will not wait the returning of the output 
                            // instead it will print undefined and execute the next line without waiting 


