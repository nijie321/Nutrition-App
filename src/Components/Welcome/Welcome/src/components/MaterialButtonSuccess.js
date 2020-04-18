import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonSuccess(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      onPress={props.onButtonClick}
    >
      <Text style={styles.caption}>Join now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(248,186,28,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
    paddingLeft: 5,
    elevation: 2,
    minWidth: 100,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonSuccess;
