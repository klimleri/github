import { CHANGE_PAGE } from '../constants/index';

const pages = (state = 1, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_PAGE:
            return payload
        default:
            return state
    }
}

export default pages;