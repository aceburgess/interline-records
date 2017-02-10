import { REQUEST_ARTISTS, SELECT_ARTIST } from '../actions';

const initialState = {
	data: [],
	selectedArtist: {id: 1, name: 'none', photo:'none', biogprahy:'none', website:'none'}
};


export default function artists(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return Object.assign({}, state, {
        data: action.payload.body
      })
    case SELECT_ARTIST:
    	return Object.assign({}, state, {
    		selectedArtist: action.payload
    	})
    default:
      return state;
  };
}