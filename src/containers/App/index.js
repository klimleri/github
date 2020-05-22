import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import Container from '@material-ui/core/Container';
import Header from "../../components/Header";
import { getUsers } from '../../actions/index';
import Body from "../../components/Body";
import Profile from "../../components/Profile";
import { BASE_URL } from '../../constants/api';
import ErrorBoundary from "../ErrorBoundary";
import './styles.css';

class App extends Component {
    state = {
        isLoaded: false,
        isError: false,
        perPage: 5
    };

    componentDidMount() {
        const { dispatch } = this.props;

        fetch(`${BASE_URL}/users`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(getUsers(data));
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

    render() {
        const { count, backButton } = this.props;
        const { perPage, isLoaded, isError } = this.state;

        return (
            <div className="App">
                <Container maxWidth="md" disableGutters>
                    <Header backButton={backButton} />
                    {
                        !isError ?
                            <Router>
                                <Body path={process.env.PUBLIC_URL + '/'} isLoaded={isLoaded} count={count} perPage={perPage} />
                                <Profile path={process.env.PUBLIC_URL + '/:username'} />
                            </Router>
                            :
                            <ErrorBoundary/>
                    }
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.data.users.length,
    backButton: state.data.profile,
});

export default connect(mapStateToProps)(App);