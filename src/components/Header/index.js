import React from 'react';
import { navigate } from "@reach/router";
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { closeProfile } from "../../actions";

function Header(props) {
    const { backButton, dispatch } = props;

    const handleClick = function () {
        navigate(`${process.env.PUBLIC_URL}/`);
        dispatch(closeProfile());
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                {backButton &&
                    <IconButton
                        style={{marginLeft: '-12px'}}
                        color="inherit"
                        aria-label="Back"
                        onClick={handleClick}>
                        <ArrowBackIcon />
                    </IconButton>
                }
                <Typography variant="h6" color="inherit">
                    Github Users
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default connect()(Header);