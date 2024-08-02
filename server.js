const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('node:path');
app.use(express.static(__dirname + '/www'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let server = http.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log('first NodeJs server running');
	console.log(`server listening on host${host} port: ${port}`);
});

// modulizing routes
require('./routes/homeroute').route(app, path);
require('./routes/login').routeFunc(app);
