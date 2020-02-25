import React, { Component,useState,useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import * as Font from 'expo-font';

function CupertinoButtonWarning(props) {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    const loadFont = async () =>{
      await Font.loadAsync({
        "roboto-500":require("../assets/fonts/roboto-500.ttf") 
      });
      setFontLoaded(true);
    }

    loadFont();
  })
  
  if(fontLoaded){
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      onPress={props.onButtonClick}
    >
      <Text style={styles.caption}>Send</Text>
    </TouchableOpacity>
  );
  }else{return null;}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-500"
  }
});

export default CupertinoButtonWarning;
