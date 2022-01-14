import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export const color = (rarity) => {
  switch (rarity) {
    case "common":
      return "grey";
    case "uncommon":
      return "#96CEB4";
    case "rare":
      return "#F9D371";
    case "epic":
      return "#CE7BB0";
    case "legendary":
      return "#FF6363";

    default:
      return "#072227";
  }
};
const ItemShopList = ({ list, navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("ItemDetails", {
      item: item,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.index}
        data={list}
        renderItem={(item) => {
          // console.log(item.index);
          return (
            <TouchableOpacity onPress={() => handlePress(item.item.items[0])}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  borderRadius: 35,
                  backgroundColor: "#D9D7F1",
                  padding: 10,
                  marginVertical: 5,
                }}
              >
                <Image
                  source={{
                    uri: item.item.items[0].images.icon,
                  }}
                  style={styles.logo}
                />
                <View style={{ width: "30%" }}>
                  <Text
                    style={{ fontSize: 20, color: "black", fontFamily: "spin" }}
                  >
                    {item.item.items[0].name}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    width: "40%",

                    borderRadius: 25,
                    backgroundColor: color(item.item.items[0].rarity.value),
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontFamily: "spin",
                      textAlign: "center",
                    }}
                  >
                    {item.item.items[0].rarity.value}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ItemShopList;

const styles = StyleSheet.create({
  container: { width: "90%", marginTop: 0 },
  logo: { width: 80, height: 100, borderRadius: 20 },
});
