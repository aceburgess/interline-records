import { CHANGE_MODAL, SELECT_SECTION } from '../actions';

const initialState = {
  modalState: {
    title: 'About Us',
    content: 'Started in 2011 in Harlem, NYC. Now based in Brooklyn NY. Working with great artists accross the globe in various genres.'
  },
  selectedSection: 'no-artists'
};


export default function general(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return Object.assign({}, state, {
        modalState: action.payload
      })
    case SELECT_SECTION:
      return Object.assign({}, state, {
        selectedSection: action.payload
      })
    default:
      return state;
  };
}