import { GET_USERS, GET_USER, CHANGE_PAGE, OPEN_PROFILE, CLOSE_PROFILE } from '../constants/index';

export const getUsers = payload => ({
    type: GET_USERS,
    payload
});

export const getUser = payload => ({
    type: GET_USER,
    payload
});

export const changePage = payload => ({
    type: CHANGE_PAGE,
    payload
});

export const openProfile = () => ({
    type: OPEN_PROFILE
});

export const closeProfile = () => ({
    type: CLOSE_PROFILE
});