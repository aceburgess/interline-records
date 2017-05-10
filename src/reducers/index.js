import {combineReducers} from 'redux';
import ArtistsReducer from './artists';
import GeneralReducer from './general';


const rootReducer = combineReducers({
	artists: ArtistsReducer,
	general: GeneralReducer
});

export default rootReducer