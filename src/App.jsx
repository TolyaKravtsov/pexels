import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import store from './redux/ReduxStore';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import PhotoGalleryContainer from './components/PhotoGallery/PhotoGalleryContainer';

class App extends React.Component {

    componentDidMount() {
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    catchAllUnhandledErrors = promiseRejectionEvent => {
        alert(promiseRejectionEvent);
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                className="app-wrapper"
            >
                <HeaderContainer />
                <PhotoGalleryContainer />
            </Grid>
        );
    }
}

const mapStateToProps = () => ({});

const Connect = compose(
    withRouter,
    connect(mapStateToProps)
)(App);

const AppContainer = () => {
    return (
        <Router>
            <Provider store={store}>
                <Connect />
            </Provider>
        </Router>
    );
};

export default AppContainer;
