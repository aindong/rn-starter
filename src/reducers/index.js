import { combineReducers } from 'redux';
import RootNavigation from '../routes';

// reducers
import session from './session';

export default combineReducers({
    navigation: (state, action) => RootNavigation.router.getStateForAction(action, state),
    session
});