import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';

const StyledGridListTile = styled(GridListTile)`
    width: 100% !important;
    height: 100% !important;
    `;

const StyledGridList = styled(GridList)`
    margin: 15px !important;
    `;

const Root = styled(Grid)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    `;

const PhotoGallery = React.memo(props => {
    const { photos } = props;
    return (
        <Root item>
            {photos.map(photo => (
                <StyledGridList cellHeight={180} key={photo.id}>
                    <StyledGridListTile key={photo.id}>
                        <img
                            src={photo.src.large}
                            alt={photo.photographer}
                        />
                        <GridListTileBar
                            title={photo.photographer}
                        />
                    </StyledGridListTile>
                </StyledGridList>
            ))}
        </Root>

    );
});

export default PhotoGallery;
