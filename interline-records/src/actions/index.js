import request from 'superagent';

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';

var headersObject = {mode: 'cors'};
const API_URL = 'http://local-dev-application.com:8000/artists/?format=json';
// const API_KEY = '';

export function requestArtists(term = null) {
	const data = request.get(API_URL);
	// const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);


	// console.log(term);
	return {
		type: REQUEST_ARTISTS,
		payload: data
	}
}

export function selectArtist(artist) {
	return {
		type: SELECT_ARTIST,
		payload: artist
	}
}