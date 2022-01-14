import { StyleSheet, View, Text } from "react-native";
import store from "./src/REDUX/store/store";
import { Provider } from "react-redux";
import HomeStack from "./src/routes/HomeStack";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/components/BottomTab";

export default function App() {
  let [fontsLoaded] = Font.useFonts({
    spin: require("./assets/fonts/LuckiestGuy-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomTab></BottomTab>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
