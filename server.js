var express = require('express'),
	socket = require('socket.io');

////////// Express //////////
var app = express(),
	server = app.listen(3000);

app.use(express.static('public'));

////////// Socket.io /////////
var io = socket(server);

io.sockets.on('connection', function(socket) {
	socket.on('mouse', function(data) {
		socket.broadcast.emit('mouse', data);
		console.log(data);
	});
});



console.log("Socket server running");