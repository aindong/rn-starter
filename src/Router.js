import { StackNavigator } from 'react-navigation';

import LoginRoutes from './routes/login';

const BaseNavigation = StackNavigator({
    ...LoginRoutes
});

export default BaseNavigation;