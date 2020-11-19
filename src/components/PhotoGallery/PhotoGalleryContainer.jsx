import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import PhotoGallery from './PhotoGallery';
import { getGalleryPhoto } from '../../redux/PhotoGalleryReducer';

const PhotoGalleryContainer = props => {

    const { getGalleryPhoto } = props;

    useEffect(() => {
        getGalleryPhoto();
    }, []);

    const { photos } = props;

    return (
        <Grid item>
            {
                photos ? (
                    <PhotoGallery
                        photos={photos}
                        getGalleryPhoto={getGalleryPhoto}
                    />
                ) :
                    <LinearProgress color="secondary" />

            }
        </Grid>

    );
};

let mapStateToProps = state => {
    return {
        photos: state.galleryPhoto.galleryPhotos,
    };
};

export default compose(
    connect(
        mapStateToProps,
        { getGalleryPhoto }
    )
)(PhotoGalleryContainer);
