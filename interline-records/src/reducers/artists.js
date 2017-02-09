import { REQUEST_ARTISTS } from '../actions';

const initialState = {
	data: []
};


export default function artists(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return Object.assign({}, state, {
        data: action.payload.body
      })
    default:
      return state;
  };
}