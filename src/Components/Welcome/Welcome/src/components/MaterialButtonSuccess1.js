import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonSuccess1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      onPress={props.onButtonClick}
    >
      <Text style={styles.caption}>Sign in</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(122,179,52,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingRight: 16,
    // paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
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

export default MaterialButtonSuccess1;
