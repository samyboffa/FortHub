import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
import HomeStack from "../routes/HomeStack";
import News from "../screens/News";
import Stats from "../screens/Stats";
import IonicIcon from "react-native-vector-icons/Ionicons";

const Bottom = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#3A90F6",
        tabBarInactiveTintColor: "grey",
        tabBarVisibilityAnimationConfig: {},
        headerShown: false,
        tabBarIcon: ({ focused, color, size, padding }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "cart-outline";
          } else if (route.name === "Stats") {
            iconName = "stats-chart-outline";
          } else if (route.name === "News") {
            iconName = "newspaper-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          }
          return (
            <IonicIcon
              name={iconName}
              color={color}
              size={focused ? 30 : 25}
            ></IonicIcon>
          );
        },
      })}
      // screenOptions={{
      //   headerShown: false,
      //   tabBarIcon:(({})=>{}),
      // }}
    >
      <Bottom.Screen name="Home" component={HomeStack} />
      <Bottom.Screen name="Stats" component={Stats} />
      <Bottom.Screen name="News" component={News} />
      <Bottom.Screen name="Settings" component={Settings} />
    </Bottom.Navigator>
  );
}
