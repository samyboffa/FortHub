import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { color } from "../components/ItemShopList";

const ItemDetails = ({ route }) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.imageContainer,
        }}
      >
        <View
          style={{
            width: item.type.value === "emote" ? 350 : 200,
            height: item.type.value === "emote" ? 350 : 200,
            borderRadius: 500,
            backgroundColor: color(item.rarity.value),
            position: "absolute",
          }}
        ></View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: item.images.featured }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>
          {item.type.value} : {item.name}
        </Text>
        <Text style={styles.type}> {item.description}</Text>
        <View
          style={{
            alignSelf: "center",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 25,
            backgroundColor: color(item.rarity.value),
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "spin",
              textAlign: "center",
            }}
          >
            {item.rarity.value}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    padding: 0,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: "70%",
  },
  title: {
    fontFamily: "spin",
    fontSize: 30,
  },
  type: {
    fontFamily: "spin",
    fontSize: 15,
    color: "#89B5AF",
    marginVertical: 10,
  },
});
