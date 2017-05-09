import request from 'superagent';

export const REQUEST_GENERAL = 'REQUEST_GENERAL';
export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const SELECT_ARTIST = 'SELECT_ARTIST';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const SELECT_SECTION = 'SELECT_SECTION';
export const ADD_TO_MAILING_LIST = 'ADD_TO_MAILING_LIST';

export function requestArtists(term = null) {
	const data = request.get('/interline-api/artists')

	return {
		type: REQUEST_ARTISTS,
		payload: data
	}
}

export function requestGeneral() {
	const data = request.get('/interline-api/general')

	return {
		type: REQUEST_GENERAL,
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

export function addToMailingList(email) {
	const response = request.post('/mailing-list/add?email=' + email)

	return {
		type: ADD_TO_MAILING_LIST,
		payload: response
	}
}