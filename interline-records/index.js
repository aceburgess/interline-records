const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response){
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port);
console.log('server started on port' + port);