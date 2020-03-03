import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
  Alert,
  ScrollView
} from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import {useNavigation, StackActions} from '@react-navigation/native';

import * as firebase from 'firebase';

function Welcome(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation();

  function onLoginPress(){
    firebase.auth().signInWithEmailAndPassword(email,password)
        // .then(function() {
        //     Alert.alert("Signed in successfully");
        // })
        .then(() => {
          navigation.dispatch(
            StackActions.replace("Home")
          )
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
  }

  function onJoinNowPress(){
    navigation.navigate("Create Profile");
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}
          onPress={()=>{navigation.navigate("Forget Password")}}
        >
          <Text style={styles.forgotThePassword}>Forgot the password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonFiller}></View>
        <MaterialButtonSuccess1
          style={styles.materialButtonSuccess1}
          onButtonClick={onLoginPress}
        ></MaterialButtonSuccess1>
      </View>
      <View style={styles.group5}>
        <Text style={styles.dontHaveAnAcc}>Don&#39;t have an account?</Text>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess2}
          onButtonClick={onJoinNowPress}
        ></MaterialButtonSuccess>
      </View>
      <Text style={styles.welcomeText}>Welcome to{"\n"}Nutrition App</Text>
      <View style={styles.group7}>
        <Text style={styles.email}>Email:</Text>
        <TextInput
          placeholder="enter your email"
          placeholderTextColor="rgba(230, 230, 230,1)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text)=>{setEmail(text)}}
          style={styles.textInput6}
        ></TextInput>
      </View>
      <View style={styles.group6}>
        <Text style={styles.password}>Password:</Text>
        <TextInput
          placeholder="enter your password"
          placeholderTextColor="rgba(230, 230, 230,1)"
          onChangeText={(text)=>{setPassword(text)}}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput7}
        ></TextInput>
      </View>
      <StatusBar animated={false} barStyle="dark-content"></StatusBar>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 211,
    height: 40
  },
  forgotThePassword: {
    width: 211,
    height: 40,
    color: "rgba(127,202,23,1)",
    fontSize: 16,
    fontFamily: "courier-regular",
    lineHeight: 40
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonSuccess1: {
    width: 117,
    height: 42,
    marginTop: 4
  },
  buttonRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 435,
    marginLeft: 39,
    marginRight: 44
  },
  group5: {
    width: 228,
    height: 91,
    marginTop: 183,
    marginLeft: 93
  },
  dontHaveAnAcc: {
    width: 228,
    height: 37,
    color: "rgba(127,202,23,1)",
    fontSize: 17,
    fontFamily: "courier-regular",
    lineHeight: 40
  },
  materialButtonSuccess2: {
    width: 120,
    height: 43,
    marginTop: 11,
    marginLeft: 54
  },
  welcomeText: {
    width: 277,
    height: 81,
    color: "rgba(106,164,27,1)",
    fontSize: 30,
    fontFamily: "courier-regular",
    lineHeight: 40,
    textAlign: "center",
    marginTop: -638,
    marginLeft: 69
  },
  group7: {
    width: 331,
    height: 65,
    marginTop: 57,
    marginLeft: 40
  },
  email: {
    width: 111,
    height: 19,
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "courier-regular"
  },
  textInput6: {
    width: 331,
    height: 39,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 17,
    fontFamily: "arial-regular",
    marginTop: 7
  },
  group6: {
    width: 332,
    height: 64,
    marginTop: 26,
    marginLeft: 39
  },
  password: {
    width: 111,
    height: 23,
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "courier-regular"
  },
  textInput7: {
    width: 331,
    height: 41,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 17,
    fontFamily: "arial-regular",
    alignSelf: "flex-end"
  }
});

export default Welcome;
