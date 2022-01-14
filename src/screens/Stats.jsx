import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Stats = () => {
  const [userStats, setuserStats] = useState([]);
  const [dataFetched, setdataFetched] = useState(false);
  const [userName, setuserName] = useState();
  const [error, seterror] = useState("");
  const fetchStats = async (username) => {
    try {
      seterror("");

      const res = await axios.get(
        `https://fortnite-api.com/v2/stats/br/v2/?name=${username}`,
        {
          headers: {
            Authorization: "c50e13a9-cea5-4814-847b-5fb7652abca8",
          },
        }
      );

      setuserStats(res.data.data);
      setdataFetched(true);
      setuserName("");
    } catch (error) {
      if (error.response.status === 404) {
        return seterror("Account not found");
      }
      if (error.response.status === 400) {
        return seterror("username is required");
      } else {
        return seterror("Error while getting stats. Please try again later");
      }
    }
  };
  return !dataFetched ? (
    <View style={styles.container}>
      <TextInput
        onChangeText={setuserName}
        placeholder="Your Epic Username"
        style={styles.input}
      />
      <Text style={styles.error}>{error}</Text>
      <TouchableOpacity
        onPress={() => fetchStats(userName)}
        style={{ ...styles.buttonContainer }}
      >
        <Text style={styles.buttonText}>Get Your Stats</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setdataFetched(false)}
        style={{ ...styles.buttonContainer }}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Account Name : </Text>
        <Text style={styles.textData}>{userStats.account.name}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Account LEVEL : </Text>
        <Text style={styles.textData}>{userStats.battlePass.level}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Total matches : </Text>
        <Text style={styles.textData}>
          {userStats.stats.all.overall.matches}
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Kills : </Text>
        <Text style={styles.textData}>{userStats.stats.all.overall.kills}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>total wins : </Text>
        <Text style={styles.textData}>{userStats.stats.all.overall.wins}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>top 3 : </Text>
        <Text style={styles.textData}>{userStats.stats.all.overall.top3}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>top 10 : </Text>
        <Text style={styles.textData}>{userStats.stats.all.overall.top10}</Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 18,
    fontFamily: "spin",
    color: "#9B0000",
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#3A90F6",
    margin: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "spin",
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  textData: {
    fontSize: 25,
    fontFamily: "spin",
    marginLeft: 10,
    color: "#4E6CEB",
  },
  textTitle: {
    fontSize: 20,
    fontFamily: "spin",
    color: "grey",
  },

  input: {
    borderWidth: 1,
    fontFamily: "spin",

    width: "80%",
    borderRadius: 20,
    height: 50,
    fontSize: 20,
    paddingHorizontal: 15,
    textDecorationLine: "none",
  },
});
