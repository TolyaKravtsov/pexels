import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import PhotoGallery from './PhotoGallery';

const RequestResultContainer = props => {

    const { photos } = props;

    return (
        <Grid item>
            {
                photos ? (
                    <PhotoGallery
                        photos={photos}
                    />
                ) :
                    <LinearProgress color="secondary" />

            }
        </Grid>

    );
};

let mapStateToProps = state => {
    return {
        photos: state.headerPhoto.searchResult,
    };
};

export default compose(
    connect(
        mapStateToProps
    )
)(RequestResultContainer);
