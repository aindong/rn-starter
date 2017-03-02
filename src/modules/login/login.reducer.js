import {
    POST_SESSION,
    POST_SESSION_FAILED,
    POST_SESSION_SUCCESS
} from './login.actions';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case POST_SESSION:
        case POST_SESSION_FAILED:
        case POST_SESSION_SUCCESS:

        default:
            return state;
    }
};

export default session;