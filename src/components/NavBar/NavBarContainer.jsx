import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { searchPhoto } from '../../redux/HeaderReducer';
import NavBar from './NavBar';

const NavBarContainer = props => {
    const { searchPhoto } = props;
    return (
        <NavBar
            searchPhoto={searchPhoto}
        />
    );
};

let mapStateToProps = () => {
    return {};
};

export default compose(
    connect(
        mapStateToProps,
        { searchPhoto }
    )
)(NavBarContainer);
