import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from '../../constants/api';
import { getUser, openProfile } from '../../actions/index';
import { Box, Avatar, Typography  } from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';
import Loader from "../Loader";
import ErrorBoundary from "../../containers/ErrorBoundary";

const styles = theme =>({
    root: {
        background: "#fff",
    },
    avatar: {
        width: 120,
        height: 120,
        marginRight: 40,
        [theme.breakpoints.down('xs')]: {
            width: 60,
            height: 60,
            marginRight: 20,
        },
    },
    title: {
        fontSize: 32,
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
            marginBottom: 5,
        },
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            marginBottom: 5,
        },
    },
    text: {
        fontSize: 15,
        opacity: 0.4,
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
    },
});

class Profile extends Component {
    state = {
        isLoaded: false,
        isError: false
    };

    componentDidMount() {
        const { dispatch, username } = this.props;

        fetch(`${BASE_URL}/users/${username}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(openProfile());
                dispatch(getUser(data));
                this.setState({
                    isLoaded: true
                });
            })
            .catch(() => {
                this.setState({
                    isError: true
                });
            });
    }

    getDate = (date) => {
        const isoDate = date;
        const res = new Date(isoDate);
        return res.toLocaleDateString('en-GB');
    };

    render() {
        const { user, classes } = this.props;
        const { isLoaded, isError } = this.state;
        const { avatar_url, name, company, location, created_at } = user;
        const date = this.getDate(created_at);

        return (
            !isError ?
                !isLoaded ?
                    <Loader length="1" />
                    :
                    <Box className={classes.root}>
                        <div className="User">
                            <Avatar src={avatar_url} className={classes.avatar} />
                            <Box>
                                <Typography variant="h6" component="h6" className={classes.title}>
                                    {name}
                                </Typography>
                                <Typography variant="subtitle2" component="div" className={classes.subtitle}>
                                    {company && `${company}, ${location}`}
                                </Typography>
                                <Typography variant="subtitle2" component="div" className={classes.text}>
                                    From {date}
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                :
                <ErrorBoundary/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.data.user,
});

export default withStyles(styles)(connect(mapStateToProps)(Profile));