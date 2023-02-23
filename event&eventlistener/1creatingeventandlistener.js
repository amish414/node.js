function Emitter(){
    this.event = {};
}
Emitter.prototype.on = function(input,listner){
    this.event[input] = this.event[input] || [];
    this.event[input].push(listner);
}
Emitter.prototype.emit = function(input){
    if(this.event[input]){
        this.event[input].forEach(function(listner){
            listner();
        });
    }
}
module.exports = Emitter;