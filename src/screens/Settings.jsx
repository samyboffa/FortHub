import React from "react";
import { StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page "Settings" Under Construction</Text>
      <Text style={styles.text}>Stay Tuned !!!</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "spin",
    textAlign: "center",
    color: "#30475E",
  },
});
