import { REQUEST_ARTISTS, SELECT_ARTIST } from '../actions';

const initialState = {
	data: [],
	selectedArtist: {
    id: 1,
    name: 'Satelite Saturno',
    photo:'https://www.seenonvhs.com/media/artist-photos/Argentina-April-2016-1190481.jpg',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet ipsum dictum nunc ornare eleifend et non dolor. Duis ac dapibus enim, tincidunt vehicula eros. Mauris rutrum tellus vitae enim tristique, id sagittis nisi interdum. Proin pretium porttitor arcu in sodales. Donec vehicula dictum convallis. Pellentesque eu congue sem. Mauris pharetra sollicitudin rhoncus. Donec risus massa, fermentum sollicitudin elit id, euismod imperdiet sem. Morbi interdum augue.',
    website:'https://aceelijah.com'
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
    default:
      return state;
  };
}