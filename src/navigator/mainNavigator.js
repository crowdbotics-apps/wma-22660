import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile174109Navigator from '../features/UserProfile174109/navigator';
import Tutorial174108Navigator from '../features/Tutorial174108/navigator';
import NotificationList174080Navigator from '../features/NotificationList174080/navigator';
import Settings174079Navigator from '../features/Settings174079/navigator';
import Settings174071Navigator from '../features/Settings174071/navigator';
import UserProfile174069Navigator from '../features/UserProfile174069/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile174109: { screen: UserProfile174109Navigator },
Tutorial174108: { screen: Tutorial174108Navigator },
NotificationList174080: { screen: NotificationList174080Navigator },
Settings174079: { screen: Settings174079Navigator },
Settings174071: { screen: Settings174071Navigator },
UserProfile174069: { screen: UserProfile174069Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
