import { REQUEST_ARTISTS, SELECT_ARTIST, CHANGE_MODAL } from '../actions';

const initialState = {
	data: [],
	selectedArtist: {
    id: 1,
    name: 'Artists',
    photo:'https://seenonvhs.com/media/artist-photos/artist-default.jpg',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet ipsum dictum nunc ornare eleifend et non dolor. Duis ac dapibus enim, tincidunt vehicula eros. Mauris rutrum tellus vitae enim tristique, id sagittis nisi interdum. Proin pretium porttitor arcu in sodales. Donec vehicula dictum convallis. Pellentesque eu congue sem. Mauris pharetra sollicitudin rhoncus. Donec risus massa, fermentum sollicitudin elit id, euismod imperdiet sem. Morbi interdum augue.',
    website:'https://aceelijah.com'
  },
  modalState: {
    title: 'About Us',
    content: 'Started in 2011 in Harlem, NYC. Now based in Brooklyn NY. Working with great artists accross the globe in various genres.'
  }
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
    case CHANGE_MODAL:
      return Object.assing({}, state, {
        modalState: action.payload
      })
    default:
      return state;
  };
}