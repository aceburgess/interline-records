import { REQUEST_GENERAL, CHANGE_MODAL, SELECT_SECTION, ADD_TO_MAILING_LIST } from '../actions';

const initialState = {
  data: {
    sitesetting: [{}],
    company: [{}],
    staff:[{}]
  },
  modalState: {
    title: 'About Us',
    content: 'Started in 2011 in Harlem, NYC. Now based in Brooklyn NY. Working with great artists accross the globe in various genres.'
  },
  selectedSection: 'no-artists',
  addToMailingList: {}
};


export default function general(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GENERAL:
      return Object.assign({}, state, {
        data: action.payload.body
      })
    case CHANGE_MODAL:
      return Object.assign({}, state, {
        modalState: action.payload
      })
    case SELECT_SECTION:
      return Object.assign({}, state, {
        selectedSection: action.payload
      })
    case ADD_TO_MAILING_LIST:
      return Object.assign({}, state, {
        addToMailingList: action.payload
      })
    default:
      return state;
  };
}