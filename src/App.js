import React from 'react';
import { Provider } from 'react-redux';

import Store from './store';
import RootNavigation from './routes';

const App = () => (
    <Provider store={Store}>
        <RootNavigation />
    </Provider>
);

export default App;