import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";

function MaterialButtonDanger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      
    >
      <Text
        style={styles.textInput}
      >ADD TO CART</Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F44336",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  textInput: {
    width: 74,
    height: 36,
    color: "#fff",
    margin: 0,
    padding: 0,
    textAlign:"center",
    fontSize: 11, //12
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonDanger;
