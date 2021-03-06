const request = require('superagent');
const express = require('express');
const path = require('path');
const config = require('./config.json');
const port = config.PORT || 3000;
const API_URL = config.API_URL;
const API_KEY = config.API_KEY;
const app = express();

app.use(express.static(__dirname + '/public'));

app.post('/mailing-list/add', function(req, res){
	var headersObject = {'content-type': 'application/json'};
	var emailObject = {
		"email_address": req.query.email,
		"status": "subscribed"
	}
	const URL = config.MAILCHIMP_API_URL + '/lists/' + config.MAILCHIMP_LIST_ID + '/members';
	const data = request.post(URL).auth('api_key:' + config.MAILCHIMP_API_KEY).set(headersObject).send(emailObject).end(function(error, response){
		if (error || !response.ok) {
			res.send('Sorry, but we tried subscribing you, and it seems you may already be a subscriber or your email is not valid.');
		} else {
			res.send('Thanks for subscribing!');
		}
	})
})

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


var server = app.listen(port, function(){

	console.log('Server started on port ' + server.address().port);
	
});