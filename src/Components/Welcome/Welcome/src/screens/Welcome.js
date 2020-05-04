import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  ScrollView
} from "react-native";
// import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
// import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import Title from "../components/Title";
import LoginFields from "../components/LoginFields";
import AccountManagementFields from "../components/AccountManagementFields";

import {useNavigation, StackActions} from '@react-navigation/native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';
function Welcome() {

  const [email, setEmail] = useState("nijie321@outlook.com");
  const [password, setPassword] = useState("abc123");
  
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
    <ScrollView>
      <View style={{flex:1, borderColor:"red"}}>
        <Title />
        <LoginFields />
        <AccountManagementFields />
        {/* <View style={{ marginTop: hp("6%"), marginLeft: wp("15%"), flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate("Forget Password") }}
          // style={styles.forgotThePassword}
          >
            <Text style={styles.forgotThePassword}>Forget Password?</Text>
          </TouchableOpacity>
        </View> 
        <View style={{marginTop:hp("5%"), flexDirection:"column", alignItems:"center" }}>
          <Text style={styles.dontHaveAnAcc}>Don't have an account?</Text>
        </View> */}
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    // alignContent:"center"
  },
 
  forgotThePassword: {
   
    width: wp("50%"),
    height: hp("7%"),
    color: "rgba(248,186,28,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 40
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonSuccess1: {
    width: 100,
    height: 42,
    marginTop: 7
  },
  buttonRow: {
    
    height: hp("50"),
    flexDirection: "row",
   
  },
  
  dontHaveAnAcc: {
    // width: 228,
    // height: 37,
    //marginBottom: 1,
    width: wp("100%"),
    height: hp("6%"),
    color: "rgba(127,202,23,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    textAlign:"center"
  },
  materialButtonSuccess2: {
    // width: 120,
    // height: 43,

    width: wp("25%"),
    height: hp("5%"),
    marginTop: 15,
    // alignSelf:"center"
   // marginLeft: 54
  },
  welcomeText: {
    width: wp("70%"),
    height: hp("10%"),
    marginBottom:-wp("15%"),
    color: "rgba(106,164,27,1)",
    fontSize: wp("8%"),
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  
  email: {
    width: wp("20%"),
    height: hp("4%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput6: {
    width:wp("70%"),
    height:hp("5%"),
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 7
  },
 
  password: {
    // width: 111,
    // height: 23,
    width: wp("30%"),
    height: hp("4%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput7: {
    width: 331,
    height: 41,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 17,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end"
  },
  btnContainer: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  },
  userBtn: {

    backgroundColor: "rgba(122,179,52,1)",
    padding: 10,
    width: "45%"
  },
  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
  
});

export default Welcome;