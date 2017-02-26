import { StackNavigator } from 'react-navigation';

import LoginRoutes from './login';

const RootNavigation = StackNavigator({
    ...LoginRoutes
});

export default RootNavigation;