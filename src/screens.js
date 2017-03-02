import { Navigation } from 'react-native-navigation';

import Login from './modules/login/Login';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('Login', () => Login, store, Provider);
}