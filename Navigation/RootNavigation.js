import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabNavigation from "./TabsNavigation"

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
