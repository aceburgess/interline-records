import request from 'superagent';

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';
export const CHANGE_MODAL = 'CHANGE_MODAL';

// const API_URL = 'http://local-dev-application.com:8000/artists/?format=json';
// const API_URL = 'http://local-dev-application.com:8000';
// const API_KEY = 'c2582285e11cc92a937dc85bf94b4964a909f40c';

// DEV SERVER seenonvhs.com
const API_URL = 'https://seenonvhs.com';
const API_KEY = '24d30374d0a32eb548953959ebe5a64dd3bbedd8';

var headersObject = {mode: 'cors', Authentication: API_KEY};

export function requestArtists(term = null) {
	const artistURL = API_URL + '/artists/?format=json'
	const data = request.get(artistURL);
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

export function changeModal(modalState) {
	return {
		type: CHANGE_MODAL,
		payload: modalState
	}
}