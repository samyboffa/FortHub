import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysItems } from "../REDUX/actions/todaysItems";
import ItemShopList from "../components/ItemShopList";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state.todaysItems);
  useEffect(() => {
    dispatch(fetchTodaysItems());
  }, []);
  return !loading ? (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/mail.jpg")}
          style={styles.mainImage}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>TODAY'S ITEM SHOP</Text>
      <ItemShopList list={items} navigation={navigation} />
    </ScrollView>
  ) : (
    <Text>hello</Text>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: 100,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",
    width: "90%",
    height: 250,
  },
  mainImage: {
    width: "100%",
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontFamily: "spin",
    opacity: 0.8,
  },
});
