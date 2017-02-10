import {combineReducers} from 'redux';
import ArtistsReducer from './artists';


const rootReducer = combineReducers({
	artists: ArtistsReducer
});

export default rootReducer