import request from 'superagent';

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';

// const API_URL = 'http://local-dev-application.com:8000/artists/?format=json';
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

var headersObject = {mode: 'cors', Authentication: API_KEY};

export function requestArtists(term = null) {
	const artistURL = `${API_URL}/artists/?format=json`
	const data = request.get(artistURL, headersObject);
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