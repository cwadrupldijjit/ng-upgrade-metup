/// <reference path="../typings/main.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

let app = express();
let pathToNgPublic = __dirname + '/../ng-public';
let pathToNg2Public = __dirname + '/../ng2-public';

app.use(bodyParser.json());
app.use(cors());

app.use('/node_modules', express.static(__dirname + '../node_modules'));
app.use('/ng-app', express.static(pathToNgPublic + '/app'));
app.use('/ng2-app', express.static(pathToNg2Public + '/app'));

app.all('/ng-public/*', (req, res) => {
	res.sendFile('index.html', {root: pathToNgPublic});
});
app.all('/ng2-public/*', (req, res) => {
	res.sendFile('index.html', {root: pathToNg2Public});
});

app.listen('8787', function listener() {
	console.log('Express app listening at "http://localhost:8787/');
});