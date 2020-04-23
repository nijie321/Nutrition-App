import React from "react";
import { StyleSheet, View, TextInput, Alert, Image} from "react-native";
import CupertinoHeaderWithLargeTitle1 from "../components/CupertinoHeaderWithLargeTitle1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";

import firebase from '../../../../../FireBase';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from "react-native-gesture-handler";


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
        <Image
          source={require('../../../../../assets/MemphisEATS_logo.png')}
          style={{ width: wp("50%"), height: hp("20%"), alignSelf: "center", }} />

        <CupertinoHeaderWithLargeTitle1
          style={styles.cupertinoHeaderWithLargeTitle1}
        ></CupertinoHeaderWithLargeTitle1>
        <TextInput
          placeholder="Enter your email to reset password."
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
    flex: 1,
    backgroundColor: "rgba(106,164,27,1)",
   
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  // group: {
  //   width: 375,
  //   height: 439,
  //   marginTop: 43
  // },
  cupertinoHeaderWithLargeTitle1: {
    //width: 375,
    
    width: wp("85%"),
    height: hp("10%"),
    marginTop: 50,
    //alignItems: "flex-start",
    justifyContent: "center"
  },
  textInput: {
    width: wp("85%"),
    height: hp("5%"),
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-500",
    textAlign:"center",
    //marginTop: 179,
    //marginLeft: 44
    marginTop: 40,
    borderRadius: 5
  },
  cupertinoButtonWarning: {
    width: wp("85%"),
    height: hp("5%"),
    marginTop: 72,
    alignSelf:"center",
  }
});

export default ForgotPassword;
