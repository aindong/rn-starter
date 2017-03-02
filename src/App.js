import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

import Store from './store';
import RootNavigation from './routes';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login',
        navigatorStyle
    }
});

const App = () => (
    <Provider store={Store}>
        <RootNavigation />
    </Provider>
);

export default App;