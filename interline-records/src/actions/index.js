import request from 'superagent';

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const SELECT_SECTION = 'SELECT_SECTION';

// const API_URL = 'http://local-dev-application.com:8000/artists/?format=json';
const API_URL = 'http://local-dev-application.com:8000';
const API_KEY = 'Token 4ff75d8aba75195cd2c7a8629f075b87daf292de';

// DEV SERVER seenonvhs.com
// const API_URL = 'https://seenonvhs.com';
// const API_KEY = 'Token 926cf0642180d86cc918bdba92cd46d980a47ccb';

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

export function selectSection(selectedSection) {
	return {
		type: SELECT_SECTION,
		payload: selectedSection
	}
}