import { REQUEST_ARTISTS } from '../actions';

const initialState = {
  body: []
};


export default function artists(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return Object.assign({}, state, {
        artists: action.payload.body
      })
    default:
      return state;
  };
}