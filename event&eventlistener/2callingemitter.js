var emit123 = require('./1creatingeventandlistener');
var newemit = new emit123();
newemit.on('greet',function(){
    console.log("how are you");
});
newemit.on('greet',function(){
    console.log('have a great day .');
});
console.log('hello');
newemit.emit('greet');