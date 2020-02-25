import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput,Text, Alert } from "react-native";
import CupertinoHeaderWithLargeTitle1 from "../components/CupertinoHeaderWithLargeTitle1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";

import * as Font from 'expo-font';

import firebase from '../../../../../FireBase';






function ForgotPassword(props) {
  var auth = firebase.auth();
  var emailAddress = "nijie321@outlook.com";

  function sendEmail(){
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      Alert.alert("Email sent");
    }).catch(function(error) {
      console.log(error.message)
    });
  }
  


  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    const loadFont = async () =>{
      await Font.loadAsync({
        "roboto-700":require("../assets/fonts/roboto-700.ttf")
      });
      setFontLoaded(true);
    }

    loadFont();
  })

  if(fontLoaded){
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <CupertinoHeaderWithLargeTitle1
          style={styles.cupertinoHeaderWithLargeTitle1}
        ></CupertinoHeaderWithLargeTitle1>
        <TextInput
          placeholder="Type your email"
          style={styles.textInput}
        ></TextInput>
        <CupertinoButtonWarning
          style={styles.cupertinoButtonWarning}
          onButtonClick={sendEmail}
        ></CupertinoButtonWarning>
      </View>
    </View>
  );
  }else{
    return(
      null
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(106,164,27,1)"
  },
  group: {
    width: 375,
    height: 439,
    marginTop: 43
  },
  cupertinoHeaderWithLargeTitle1: {
    width: 375,
    height: 96
  },
  textInput: {
    width: 288,
    height: 48,
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "roboto-700",
    marginTop: 179,
    marginLeft: 44
  },
  cupertinoButtonWarning: {
    width: 100,
    height: 44,
    marginTop: 72,
    marginLeft: 138
  }
});

export default ForgotPassword;
