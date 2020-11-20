import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'material-ui-search-bar';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';

const NavBarWrapper = styled(Grid)`
        && {
            background-color: #232a34;        
        }
        height: 100%;
        width: 100%;
    `;

const SearchBarWrapper = styled(Grid)`
        height: 70px;
        width: 500px;
        margin: 0px 0 0 60px;
        padding-top: 10px;
    `;

const StyledIcon = styled(PinterestIcon)`
       padding: 10px;
       height: 50px;
       width: 50px;
`;

const StyledText = styled(Grid)`
        &&.MuiGrid-item{
            font-size: 20px;
            padding: 20px 0 0 20px;
            color: white;
        }
`;

const StyledLink = styled(Link)`
        text-decoration: none;
        cursor: pointer;
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
        <NavBarWrapper container direction="row">
            <StyledLink
                to={{
                    pathname: '/',
                }}
            >
                <Grid item>
                    <StyledIcon fontSize="large" color="error" />
                </Grid>
            </StyledLink>
            <StyledLink
                to={{
                    pathname: '/',
                }}
            >
                <StyledText item>
                    Pexels
                </StyledText>
            </StyledLink>

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
