const request = require('superagent');
const express = require('express');
const path = require('path');
const config = require('./config.json');
const port = config.PORT || 3000;
const API_URL = config.API_URL;
const API_KEY = config.API_KEY;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/interline-api/artists', function(req, res){
	var headersObject = {'Authorization': API_KEY};
	const artistURL = API_URL + '/artists/?format=json'
	const data = request.get(artistURL).set(headersObject).end(function(error, response){
		res.json(response.body);
	});
});

app.get('/interline-api/general', function(req, res){
	var headersObject = {'Authorization': API_KEY};
	const generalURL = API_URL + '/general/?format=json'
	const data = request.get(generalURL).set(headersObject).end(function(error, response){
		res.json(response.body);
	});;
});

app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(port);
console.log('server started on port' + port);