var socket;

function setup() {
	createCanvas(500, 500);
	background(51);
	socket = io.connect("http://localhost:3000");
	socket.on('mouse', function(data) {
		noStroke();
		fill(0, 0, 255);
		ellipse(data.x, data.y, 6, 6);
	});
}

function mouseDragged() {
	console.log(mouseX + ', ' + mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);
	
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 6, 6);
}

function draw() {
}