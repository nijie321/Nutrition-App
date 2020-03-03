import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonWhiteTextColor1 from "../components/CupertinoButtonWhiteTextColor1";

function MyProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <CupertinoButtonWhiteTextColor1
          style={styles.cupertinoButtonWhiteTextColor1}
        ></CupertinoButtonWhiteTextColor1>
        <View style={styles.group}>
          <Text style={styles.email}>Email:</Text>
          <View style={styles.rect2}></View>
        </View>
        <View style={styles.group2}>
          <Text style={styles.phoneNumber2}>Phone number:</Text>
          <View style={styles.rect3}></View>
        </View>
        <Text style={styles.address2}>Address:</Text>
        <View style={styles.rect5}></View>
        <Text style={styles.allergies}>Allergies and Restrictions:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 318,
    height: 362,
    marginTop: 186,
    marginLeft: 48
  },
  cupertinoButtonWhiteTextColor1: {
    width: 100,
    height: 44,
    marginLeft: 218
  },
  group: {
    width: 318,
    height: 66,
    alignSelf: "flex-end",
    marginTop: 14
  },
  email: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 2
  },
  rect2: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 46
  },
  group2: {
    width: 318,
    height: 66,
    marginTop: 24
  },
  phoneNumber2: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 2
  },
  rect3: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 46
  },
  address2: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 2
  },
  rect5: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 46
  },
  allergies: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 39,
    marginLeft: 2
  }
});

export default MyProfile;
