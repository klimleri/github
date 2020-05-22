import { GET_USERS, GET_USER, OPEN_PROFILE, CLOSE_PROFILE } from '../constants/index';
const initialState = {
    users: [],
    user: [],
    profile: false
};

const data = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            };
        case GET_USER:
            return {
                ...state,
                user: payload,
            };
        case OPEN_PROFILE:
            return {
                ...state,
                profile: true,
            };
        case CLOSE_PROFILE:
            return {
                ...state,
                profile: false,
            };
        default:
            return state
    }
}

export default data;