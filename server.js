//loading modules
var express = require('express');
var app = express();


//To load the static files like .html, .css, .js and images, etc,..
app.use(express.static(__dirname + '/'));
app.get('/', function(request, response){

	response.sendfile('home.html');
});

app.listen(3001);

console.log("Server is running...!!!");
