import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { searchPhoto, setHeaderPhoto } from '../../redux/HeaderReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        const { setHeaderPhoto } = this.props;
        setHeaderPhoto();
    }

    render() {
        const { photographer, searchPhoto, photo, photographerUrl } = this.props;
        return (
            <Header
                headerPhoto={photo}
                searchPhoto={searchPhoto}
                photographer={photographer}
                photographerUrl={photographerUrl}
            />
        );
    }
}

let mapStateToProps = state => {
    return {
        photo: state.headerPhoto.photo,
        photographer: state.headerPhoto.photographer,
        photographerUrl: state.headerPhoto.photographerUrl,
    };
};

export default compose(
    connect(
        mapStateToProps,
        { setHeaderPhoto, searchPhoto }
    )
)(HeaderContainer);
