const express = require('express');
const app = express();
const http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log('first NodeJs server running');
	console.log(`server listening on host${host} port: ${port}`);
});

app.get('/test', function (req, res) {
	res.sendFile(__dirname + '/www/test.html');
});
