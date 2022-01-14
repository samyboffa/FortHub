import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "../components/BottomTab";
import Home from "../screens/Home";
import ItemDetails from "../screens/ItemDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={({ route }) => ({
          title: route.params.item.name,
          headerStyle: {
            height: 100,
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        })}
      />
    </Stack.Navigator>
  );
}
