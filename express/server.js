const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 2000;    // reserving the port for our server process.env.port is environment variable and we if we don't set the environemt variable then by default it will take the port given in or option.


   // here app.use is acting like a middleware whenever if our server require these static file we need to use "app.use" keyword
app.use( '/assets' ,express.static(__dirname ));    // here express.static is used to read all the static file in the our folder such has image and css and javasrcript file in our location
// there are two style sheet in the express folder and we can use any of the style sheet just need to change the path of the sytle sheet and folder.
//app.use(express.static('public'))  // when we have to link both sytle and html from the folder together then we can use this...
app.get('/' , function(req,res) {    // when we make a request for assets/style.css from the browser than that request is handled by app.use and app.use take help of express.static to call static file
    res.send('<html><head><link rel="stylesheet" type="text/css" href="/assets/style.css" /></head><body><h1>Hello need to talk</h1></body></html>');
    //res.sendFile(path.join(__dirname, 'public/index.html'));         //  path join method join the segment of path to one path

});
// why we are writting the assest word basically it is of no use it our matter weather we want to use or not if we remove the assets word then also the code will work fine


app.get('/api',function(req,res){
    res.json({firstname : 'john' , lastname : 'doe'});
});
app.get('/person/:id' ,function(req,res){            // what we put in place id id it will comes in place of id in main code so it kind of input from the url
    res.send('<html><head></head><body><h1>person'+req.params.id+'</h1></body></html>');
});
app.get('/newhtml' , function(req,res) {
    res.send('<html><head></head><body><h1>Hello</h1></body></html>')
});
app.listen(port);