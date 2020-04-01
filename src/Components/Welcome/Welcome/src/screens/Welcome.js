import React, { useState } from "react";
import {StyleSheet, View, TouchableOpacity, Text, TextInput, Alert} from "react-native";
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
          <Text style={styles.welcomeText}>Welcome to Nutrition App</Text>
        </View>

        <View style={{ alignSelf:"center"}}>
          <Text style={styles.email}>Email:</Text>
          <TextInput
            placeholderTextColor="rgba(230,230,230,1)"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {setEmail(text)}}
            style={styles.textInput6}
          />

          <Text style={[styles.email, {marginTop:hp("3%")}]}>Password:</Text>
          <TextInput
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
          >
          <Text style={styles.forgotThePassword}>Forget Password?</Text>
          </TouchableOpacity>
          <MaterialButtonSuccess1 style={{marginRight:5}}
            onButtonClick={onLoginPress}
          />
        </View>


        <View style={{marginTop:hp("10%"), flexDirection:"column", alignItems:"center" }}>
          <Text style={styles.forgotThePassword}>Don't have an account?</Text>
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
  forgotThePassword: {
    width: wp("49%"),
    height: hp("5%"),
    color: "rgba(127,202,23,1)",
    fontSize: 16,
    fontFamily: "courier-regular",
    lineHeight: 40
  },
  materialButtonSuccess2: {
    width: wp("25%"),
    height: hp("5%"),
    marginTop: hp("1.5%"),
  },
  welcomeText: {
    width: wp("60%"),
    height: hp("20%"),
    color: "rgba(106,164,27,1)",
    fontSize: wp("10%"),
    fontFamily: "courier-regular",
    textAlign: "center",
  },
  email: {
    width: wp("25%"),
    height: hp("3%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "courier-regular"
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
  }
});

export default Welcome;
