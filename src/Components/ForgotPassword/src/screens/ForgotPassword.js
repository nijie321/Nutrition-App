import React from "react";
import { StyleSheet, View, TextInput, Alert, Text} from "react-native";
import CupertinoHeaderWithLargeTitle1 from "../components/CupertinoHeaderWithLargeTitle1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
  
  return (
    <View style={styles.container}>
      <View style={styles.group}>

        <View style={{alignItems:"center", marginTop:hp("10%")}}>
          <Text style={styles.heading}>Forget your password?</Text>
        </View>

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

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    width: wp("90%"),
    height: hp("6.5%"),
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "roboto-700",
    marginTop: hp("8%"),
    marginLeft: wp("5%")
  },
  cupertinoButtonWarning: {
    width: wp("40%"),
    height: hp("6%"),
    marginTop: hp("10%"),
    marginLeft: wp("31%")
  },
  heading: {
    width: wp("60%"),
    height: hp("20%"),
    color: "rgba(106,164,27,1)",
    fontSize: wp("10%"),
    fontFamily: "courier-regular",
    textAlign: "center",
    marginTop: hp("5%")

  }
});

export default ForgotPassword;
