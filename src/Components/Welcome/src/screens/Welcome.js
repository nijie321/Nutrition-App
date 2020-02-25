import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import {useNavigation} from '@react-navigation/native';

import * as Font from 'expo-font';
import * as firebase from 'firebase';

function Welcome(props) {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigation = useNavigation();

  const [fontLoaded,setFontLoaded] = useState(false);
  
  function onLoginPress(){
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function() {
            Alert.alert("Signed in successfully");
        })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
}

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        
        "impact-regular":require("../assets/fonts/impact-regular.ttf"),
        "roboto-regular":require("../assets/fonts/roboto-regular.ttf"),
        "roboto-700":require("../assets/fonts/roboto-700.ttf")  
      });
      setFontLoaded(true);
    }
    
    loadFont();
  })

  if(fontLoaded){
  
  return (
    <View style={styles.container}>
      <View style={styles.group6}>
        <TextInput
          placeholder="Forgot the password?"
          style={styles.textInput}
        ></TextInput>
        <View style={styles.textInputFiller}></View>
        <MaterialButtonSuccess1
          style={styles.materialButtonSuccess1}
          onButtonPress={onLoginPress}
        ></MaterialButtonSuccess1>
      </View>
      <View style={styles.group3}>
        <Text style={styles.dontHaveAnAcc}>Don&#39;t have an account?</Text>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
      </View>
      <Text style={styles.welcomeText}>Welcome to{"\n"}Nutrition App</Text>
      <View style={styles.group4}>
        <Text style={styles.email}>Email:</Text>
        <TextInput
          placeholder="  enter your email"
          onChangeText={(text)=>{setEmail(text)}}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput2}
        ></TextInput>
      </View>
      <View style={styles.group5}>
        <Text style={styles.password}>Password:</Text>
        <TextInput
          placeholder="  enter your password"
          onChangeText={(text)=>{setPassword(text)}}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput3}
        ></TextInput>
      </View>
    </View>
  );
  }else{
    return(null)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group6: {
    width: 283,
    height: 40,
    flexDirection: "row",
    marginTop: 437,
    marginLeft: 46
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
  group3: {
    width: 158,
    height: 73,
    marginTop: 187,
    marginLeft: 109
  },
  dontHaveAnAcc: {
    width: 158,
    height: 25,
    color: "rgba(127,202,23,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 40
  },
  materialButtonSuccess: {
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
    marginLeft: 49
  },
  group4: {
    width: 283,
    height: 65,
    marginTop: 60,
    alignSelf: "center"
  },
  email: {
    width: 111,
    height: 19,
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput2: {
    width: 283,
    height: 39,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,255)",
    elevation: 9,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: 7
  },
  group5: {
    width: 283,
    height: 65,
    marginTop: 25,
    marginLeft: 46
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
      width: 2,
      height: 2
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

export default Welcome;
