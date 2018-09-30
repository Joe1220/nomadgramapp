import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const HomeRoutes = createStackNavigator(
    {
        Home: {
            screen: FeedScreen
        },
        ...sharedRoutes
    },
    {
        ...sharedOptions
    }
)

export default HomeRoutes