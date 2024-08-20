// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 2. Create server
http.createServer(function (req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 4. Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080);

// Log message
console.log('Server running at http://