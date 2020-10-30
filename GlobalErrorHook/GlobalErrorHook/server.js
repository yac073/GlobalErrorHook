'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello World\n');

		req.on('data', chunk => {
				console.log(`${chunk}`);				
		})
		req.on('end', () => {
				//end of data
		})
}).listen(port);
