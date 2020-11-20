import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled(Grid)`
    
        && {
        background-color: #232a34;        
        }
        height: 100%;
        width: 100%;
    `;

const SearchBarWrapper = styled(Grid)`
        height: 70px;
        max-width: 400px;
        margin: 0px 0 0 300px;
        padding-top: 10px;
    `;

const NavBar = props => {
    const history = useHistory();
    const { searchPhoto } = props;

    const routeChange = searchString => {
        history.push(searchString);
        searchPhoto(searchString);
    };

    const [state, changeState] = useState('');

    return (
        <NavBarWrapper item>
            <SearchBarWrapper item>
                <SearchBar
                    value={state}
                    onChange={newValue => changeState(newValue)}
                    onRequestSearch={() => {
                        routeChange(state);
                    }}
                />
            </SearchBarWrapper>
        </NavBarWrapper>
    );

};

export default NavBar;
