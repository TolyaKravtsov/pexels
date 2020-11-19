import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from './HeaderReducer';
import PhotoGalleryReducer from './PhotoGalleryReducer';

let AllReducers = combineReducers({

    headerPhoto: HeaderReducer,
    galleryPhoto: PhotoGalleryReducer,

});

const store = createStore(AllReducers, applyMiddleware(thunkMiddleware));

export default store;
