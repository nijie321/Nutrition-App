import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="av-timer"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(106,164,27,1)"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.btn1Caption,
            {
              color: props.active ? "#007AFF" : "rgba(106,164,27,1)"
            }
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="cart-outline"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn4Caption}>Shopping Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name="clock"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Caption}>Payment History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon name="ios-heart" style={styles.icon4}></IoniconsIcon>
        <Text style={styles.btn5Caption}>Favorite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  btn1Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(106,164,27,1)"
  },
  btn4Caption: {
    backgroundColor: "transparent",
    color: "rgba(106,164,27,1)",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(106,164,27,1)"
  },
  btn2Caption: {
    backgroundColor: "transparent",
    color: "rgba(106,164,27,1)",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(106,164,27,1)"
  },
  btn5Caption: {
    backgroundColor: "transparent",
    color: "rgba(106,164,27,1)",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoFooter2;
