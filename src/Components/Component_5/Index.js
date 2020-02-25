import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import MaterialButtonSuccess1 from "./components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "./components/MaterialButtonSuccess";

import * as Font from 'expo-font';

function Index(props) {

  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    const loadFont = async () =>{
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
      <View style={styles.group3}>
        <Text style={styles.dontHaveAnAcc}>Don&#39;t have an account?</Text>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess2}
        ></MaterialButtonSuccess>
      </View>
      <Text style={styles.welcomeText}>Welcome to{"\n"}Nutrition App</Text>
      <View style={styles.group4}>
        <Text style={styles.email}>Email:</Text>
        <TextInput
          placeholder="  enter your email"
          style={styles.textInput2}
        ></TextInput>
      </View>
      <View style={styles.group5}>
        <Text style={styles.password}>Password:</Text>
        <TextInput
          placeholder="  enter your password"
          style={styles.textInput3}
        ></TextInput>
      </View>
    </View>
  );
  }else{
    return(
      <View>
        <Text>Font not loaded yet.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 283,
    height: 620
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
    marginTop: 320
  },
  group3: {
    width: 158,
    height: 73,
    marginTop: 187,
    marginLeft: 63
  },
  dontHaveAnAcc: {
    width: 158,
    height: 25,
    color: "rgba(127,202,23,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 40
  },
  materialButtonSuccess2: {
    width: 100,
    height: 36,
    marginTop: 12,
    marginLeft: 27
  },
  welcomeText: {
    width: 277,
    height: 81,
    color: "rgba(106,164,27,1)",
    fontSize: 30,
    fontFamily: "impact-regular",
    lineHeight: 40,
    textAlign: "center",
    marginTop: -620,
    marginLeft: 3
  },
  group4: {
    width: 283,
    height: 65,
    marginTop: 60,
    alignItems: "center" // modified
  },
  email: {
    width: 111,
    height: 19,
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
  },
  textInput2: {
    width: 283,
    height: 39,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,255)",
    elevation: 9,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: 7,
  },
  group5: {
    width: 283,
    height: 65,
    marginTop: 25
  },
  password: {
    width: 111,
    height: 19,
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput3: {
    width: 283,
    height: 41,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,255)",
    elevation: 9,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    fontSize: 17,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 5
  }
});

export default Index;
