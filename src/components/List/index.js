import React from 'react';
import { connect } from 'react-redux';
import User from '../User/index';

function List(props) {
    const { users, pages, perPage } = props;
    const from = pages * perPage - perPage;
    const to = from + perPage;

    const renderList = users.filter((item, index) => {
        return index >= from && index < to;
    });

    return (
        <div style={{backgroundColor: 'white'}}>
            {renderList.map(user => {
                const { id, avatar_url, login, html_url } = user;
                return (<User key={id} avatar={avatar_url} login={login} url={html_url} />)
            })}
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.data.users,
    pages: state.pages,
});

export default connect(mapStateToProps)(List);