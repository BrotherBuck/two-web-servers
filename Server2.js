
// Create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something
// good about themselves.
// The one listening on 7500 will always tell the user something bad
//  about themselves.
// Make sure you create a Github repo and commit this code!
// ** Bonus **

// Generate the good / bad phrase randomly from a list of predefined
//  phrases
// Use the twitter package inside the response to also return a 
// random tweet!





//require/import the http module

var http = require('http');

//listen for a port
var port = 7000;
var port = 7500;

//need a fu ction which handles request and send response

function handleRequest(request, response){
	response.end('It Works! Path Hit:' + request.url);
}

//create a server

var server = http.createServer(handleRequest);

//lets us start our server

server.listen(port, function(){
	//callback is triggered when server is successfully listening
	console.log('Server listening on; http://localhost', port);


});