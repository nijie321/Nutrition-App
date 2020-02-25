import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialFixedLabelTextbox1 from "./components/MaterialFixedLabelTextbox1"
// import MaterialFixedLabelTextbox1 from "./components/MaterialFixedLabelTextbox1";
import MaterialButtonSuccess from "./components/MaterialButtonSuccess";
import MaterialButtonSuccess1 from "./components/MaterialButtonSuccess1";
import MaterialFixedLabelTextbox2 from "./components/MaterialFixedLabelTextbox2";

import * as Font from 'expo-font';

function Index1(props) {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        
        "impact-regular":require("./assets/fonts/impact-regular.ttf"),
        "roboto-regular":require("./assets/fonts/roboto-regular.ttf"),
        "roboto-700":require("./assets/fonts/roboto-700.ttf")  
      });
      setFontLoaded(true);
    }
    
    loadFont();
  })


  if(fontLoaded){
    return (
      <View style={styles.container}>
        <Text style={styles.email}>Email:</Text>
        <Text style={styles.loremIpsum}>Welcome to{"\n"}Nutrition App</Text>
        <View style={styles.passwordStack}>
          <Text style={styles.password}>Password:</Text>
          <MaterialFixedLabelTextbox1
            style={styles.materialFixedLabelTextbox12}
          ></MaterialFixedLabelTextbox1>
        </View>
        <Text style={styles.loremIpsum2}>Don&#39;t have an account?</Text>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
        <View style={styles.textInputRow}>
          <TextInput
            placeholder="Forgot the password?"
            style={styles.textInput}
          ></TextInput>
          <View style={styles.textInputFiller}></View>
          <MaterialButtonSuccess1
            style={styles.materialButtonSuccess1}
          ></MaterialButtonSuccess1>
        </View>
        <MaterialFixedLabelTextbox2
          style={styles.materialFixedLabelTextbox2}
        ></MaterialFixedLabelTextbox2>
      </View>
    );
  }else{
    return(
      <View>
        <Text>The font is not loaded yet.</Text>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    width: 291,
    height: 620,
  },
  email: {
    color: "rgba(127,202,23,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginTop: 124
  },
  loremIpsum: {
    width: 277,
    height: 81,
    color: "rgba(106,164,27,1)",
    fontSize: 30,
    fontFamily: "impact-regular",
    lineHeight: 40,
    textAlign: "center",
    marginTop: -164,
    marginLeft: 7
  },
  password: {
    top: 0,
    left: 0,
    color: "rgba(127,202,23,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 40
  },
  materialFixedLabelTextbox12: {
    top: 39,
    left: 0,
    width: 291,
    height: 43,
    position: "absolute"
  },
  passwordStack: {
    width: 291,
    height: 82,
    marginTop: 144
  },
  loremIpsum2: {
    width: 158,
    height: 25,
    color: "rgba(127,202,23,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginTop: 240,
    marginLeft: 66
  },
  materialButtonSuccess: {
    width: 100,
    height: 36,
    marginTop: 12,
    marginLeft: 94
  },
  textInput: {
    width: 146,
    height: 40,
    color: "rgba(127,202,23,1)",
    fontSize: 15,
    fontFamily: "roboto-700",
    lineHeight: 40
  },
  textInputFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonSuccess1: {
    width: 100,
    height: 36,
    marginTop: 2
  },
  textInputRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -300,
    marginRight: 1
  },
  materialFixedLabelTextbox2: {
    width: 290,
    height: 43,
    marginTop: -196
  }
});

export default Index1;
