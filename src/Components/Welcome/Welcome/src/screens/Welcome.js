import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert
} from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import {useNavigation, StackActions} from '@react-navigation/native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
      <View style={{flex:1, borderColor:"red"}}>
        <View style={{alignItems:"center", marginTop:hp("10%")}}>
          <Text style={styles.welcomeText}>Welcome to Memphis EATS</Text>
        </View>

        {/* <View style={{height:145, width:130, marginLeft:10}}>

        <Image source={require("../../assets/meals/MemphisEATS_logo.jpg")} />
        </View> */}
        

        <View style={{ alignSelf:"center"}}>
          <Text style={styles.email}>Email:</Text>
          <TextInput 
            placeholder="Enter Your Email"
            placeholderTextColor="rgba(230,230,230,1)"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {setEmail(text)}}
            style={styles.textInput6}
          />

          <Text style={[styles.password, {marginTop:hp("3%")}]}>Password:</Text>
          <TextInput 
            placeholder="enter Your Password"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text)=>{setPassword(text)}}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput6}
          />
        </View>


        <View style={{marginTop:hp("6%"), marginLeft:wp("15%"), flexDirection:"row"}}>
          <TouchableOpacity
            onPress={() => {navigation.navigate("Forget Password")}}
            // style={styles.forgotThePassword}
          >
          <Text style={styles.forgotThePassword}>Forget Passwod?</Text>
          </TouchableOpacity>
          <MaterialButtonSuccess1 style={[styles.MaterialButtonSuccess1, {marginRight:5}]}
            onButtonClick={onLoginPress}
          />
        </View>


        <View style={{marginTop:hp("10%"), flexDirection:"column", alignItems:"center" }}>
          <Text style={styles.dontHaveAnAcc}>Don't have an account?</Text>
          <MaterialButtonSuccess 
            style={styles.materialButtonSuccess2}
            onButtonClick={onJoinNowPress}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    // alignContent:"center"
  },
  button: {
    
    // width: 211,
    // height: 40
  },
  forgotThePassword: {
    // width: 211,
    // height: 40,
    width: wp("49%"),
    height: hp("5%"),
    color: "rgba(127,202,23,1)",
    fontSize: 16,
    fontFamily: "roboto-500",
    lineHeight: 40//hp("3%")//40
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
    // height: 46,
    height: hp("50"),
    flexDirection: "row",
    // marginTop: 435,
    // marginLeft: 39,
    // marginRight: 44
    // alignContent:"center"
  },
  group5: {
    width: 228,
    height: 91,
    marginTop: 183,
    marginLeft: 93
  },
  dontHaveAnAcc: {
    // width: 228,
    // height: 37,
    width: wp("100%"),
    height: hp("5%"),
    color: "rgba(127,202,23,1)",
    fontSize: 17,
    fontFamily: "courier-regular",
    lineHeight: 40,
    textAlign:"center"
  },
  materialButtonSuccess2: {
    // width: 120,
    // height: 43,

    width: wp("25%"),
    height: hp("5%"),
    marginTop: 11,
    // alignSelf:"center"
    // marginLeft: 54
  },
  welcomeText: {
    // borderWidth:5,
    width: wp("60%"),
    height: hp("20%"),
    // width: 277,
    // height: 81,
    color: "rgba(106,164,27,1)",
    fontSize: wp("7%"),
    fontFamily: "impact-regular",
    // lineHeight: 40,
    textAlign: "center",
    // marginTop: -638,
    // marginLeft: 69
  },
  group7: {
    width: 331,
    height: 65,
    marginTop: 57,
    marginLeft: 40
  },
  email: {

    // width: 111,
    // height: 19,
    width: wp("20%"),
    height: hp("3%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-500"
  },
  textInput6: {
    width:wp("70%"),
    height:hp("5%"),
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
    // width: 111,
    // height: 23,
    width: wp("20%"),
    height: hp("3%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-500"
  },
  textInput7: {
    width: 331,
    height: 41,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 17,
    fontFamily: "roboto-500",
    alignSelf: "flex-end"
  }
}); 

export default Welcome;
