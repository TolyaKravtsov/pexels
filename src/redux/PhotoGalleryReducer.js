import { API } from '../api/API';

const GET_GALLERY_PHOTO = ' GET_GALLERY_PHOTO';

const PhotoGalleryReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_GALLERY_PHOTO:
            return {
                ...state,
                galleryPhotos: action.photo.photos,
            };
        default:
            return state;
    }

};

export const getGalleryPhotoAC = photo => ({ type: GET_GALLERY_PHOTO, photo });

export const getGalleryPhoto = page => async dispatch => {
    const response = await API.getGalleryPhoto(page);
    dispatch(getGalleryPhotoAC(response.data));
};

export default PhotoGalleryReducer;
