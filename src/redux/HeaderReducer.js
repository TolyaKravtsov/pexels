import { API } from '../api/API';

const SET_PHOTO = ' SET_PHOTO';
const SEARCH_PHOTO = ' SEARCH_PHOTO';

const HeaderReducer = (state = {}, action) => {
    // eslint-disable-next-line no-debugger
    debugger;
    switch (action.type) {
        case SET_PHOTO:
            return {
                ...state,
                photo: action.photo.src.landscape,
                photographer: action.photo.photographer,
                photographerUrl: action.photo.photographer_url,

            };
        case SEARCH_PHOTO:
            return {
                ...state,
                searchResult: action.searchQuery.data.photos,

            };
        default:
            return state;
    }

};

export const setHeaderPhotoAC = photo => ({ type: SET_PHOTO, photo });
export const searchPhotoAC = searchQuery => ({ type: SEARCH_PHOTO, searchQuery });

export const setHeaderPhoto = () => async dispatch => {
    const response = await API.getHeaderPhoto();
    dispatch(setHeaderPhotoAC(response.data.photos[Math.floor(Math.random() * 15) + 1]));
};

export const searchPhoto = searchQuery => async dispatch => {
    const response = await API.searchRequest(searchQuery);
    dispatch(searchPhotoAC(response));
};

export default HeaderReducer;
