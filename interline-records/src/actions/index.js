import request from 'superagent';

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';
export const CHANGE_MODAL = 'CHANGE_MODAL';

// const API_URL = 'http://local-dev-application.com:8000/artists/?format=json';
// const API_URL = 'http://local-dev-application.com:8000';
// const API_KEY = 'c2582285e11cc92a937dc85bf94b4964a909f40c';

// DEV SERVER seenonvhs.com
const API_URL = 'https://seenonvhs.com';
const API_KEY = 'Token 926cf0642180d86cc918bdba92cd46d980a47ccb';

var headersObject = {'Authorization': API_KEY};

export function requestArtists(term = null) {
	const artistURL = API_URL + '/artists/?format=json'
	const data = request.get(artistURL).set(headersObject);
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