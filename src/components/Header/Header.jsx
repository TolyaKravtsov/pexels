import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import headerCSS from './Header.module.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggested:
                ['sun', 'house', 'tiger', 'notebook', 'sunrise',
                    'USA', 'book', 'mother', 'concept', 'cat', 'black', 'road'],
            value: '',
        };
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
            <Grid item style={styles.headerPhoto} className={headerCSS.headerPhoto}>
                <Grid className={headerCSS.headerInfo}>
                    <h1 className={headerCSS.headerTitle}>
                        The best free stock photos & videos shared by talented creators.
                    </h1>
                    <Grid item className={headerCSS.inputWrapper}>
                        <SearchBar
                            value={value}
                            onChange={newValue => this.setState({ value: newValue })}
                            className={headerCSS.searchInput}
                            onRequestSearch={() => {
                                searchPhoto(value);
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Grid item className={headerCSS.suggestedInfo}>
                            Suggested:
                            {suggested.map(data => (
                                <span>
                                    <Link
                                        to={{
                                            pathname: '/search',
                                            search: `${data}`,
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
                        to={photographerUrl}
                        className={headerCSS.photographer}
                    >
                        {photographer}
                    </Link>
                </Grid>
            </Grid>
        );

    }
}

export default Header;
