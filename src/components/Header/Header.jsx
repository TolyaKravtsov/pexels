import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'material-ui-search-bar';
import { Link, withRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import headerCSS from './Header.module.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggested:
                [
                    'sun', 'house', 'tiger', 'notebook', 'sunrise',
                    'USA', 'book', 'mother', 'concept', 'cat', 'black',
                ],
            value: '',
        };
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(searchString) {
        const { history, searchPhoto } = this.props;
        history.push(`search/${searchString}`);
        searchPhoto(searchString);
    }

    render() {
        const { headerPhoto, photographerUrl, photographer, searchPhoto } = this.props;
        const { value, suggested } = this.state;

        const styles = {
            headerPhoto: {
                backgroundImage: `url(${headerPhoto})`,
                position: 'relative',
            },
        };

        return (
            headerPhoto ? (
                <Grid item style={styles.headerPhoto} className={headerCSS.headerPhoto}>
                    <Grid className={headerCSS.headerInfo}>
                        <h1 className={headerCSS.headerTitle}>
                                The best free stock photos & videos shared by talented creators.
                        </h1>
                        <Grid item className={headerCSS.inputWrapper}>
                            <SearchBar
                                value={value}
                                onChange={newValue => this.setState({ value: newValue })}
                                onRequestSearch={() => {
                                    this.routeChange(value);
                                }}
                            />
                        </Grid>
                        <Grid>
                            <Grid item className={headerCSS.suggestedInfo}>
                                    Suggested:
                                {suggested.map(data => (
                                    <span key={data}>
                                        <Link
                                            onClick={() => {
                                                searchPhoto(data);
                                            }}
                                            to={{
                                                pathname: `/search/${data}`,
                                            }}
                                        >
                                            {data}
                                        </Link>
                                    </span>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={headerCSS.photographerWrapper}>
                            Photo by:
                        {' '}
                        <Link
                            to={{
                                pathname: `${photographerUrl}`,
                                hash: '#the-hash',
                            }}
                            target="_blank"
                            className={headerCSS.photographer}
                            replace
                        >
                            {photographer}
                        </Link>
                    </Grid>
                </Grid>
            ) : <LinearProgress color="secondary" />

        );

    }
}

export default withRouter(Header);
