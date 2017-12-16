var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request, response) {
	response.end("You are the best!");
}

function handleRequestTwo(request, response) {
	response.end("You are the worst...");
}

var server1 = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
	console.log();
});

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
	console.log();
});

// ---- NON-Working Code Using One Server ----

// PORT = [7000, 7500];

// function handleRequest(request, response) {
// 	// if (true) {"You are the best!"} else if (true) {"You are the worst!"}
// 	response.end("heyo");
// }

// server = http.createServer(handleRequest);

// server.listen(PORT[0], function(){
// 	console.log("Server listening on: http://localhost:%s", PORT1);	
// })

// server.listen(PORT[1], function(){
// 	console.log("Server listening on: http://localhost:%s", PORT2);	
// })