import React, { Component,useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ScrollView, Alert, KeyboardAvoidingView} from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';

import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

import {useNavigation, CommonActions} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import firebase from '../../../../../FireBase';
// import * as firebase from 'firebase';
const db = firebase.firestore();

// import { TextInput } from "react-native-paper";



function CreateProfile(props) {
  const navigation = useNavigation();
  // const [fontLoaded, setFontLoaded] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [address, setAddress] = useState("");

  function onSignupPress(){
    if(password !== passwordConfirm){
        Alert.alert("Passwords do not match");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(credential) {
          const uid = credential.user.uid;
            Alert.alert("Created the account successfully.");
            var docData = {
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber,
              email: email
              };
            db.collection("users").doc(uid).set(docData).then(function() {
                console.log("Document successfully written!");
            });

        })
        .then(() => {
          navigation.dispatch(
          CommonActions.reset({
            index:0,
            routes:[
              {name: "Home"}
            ]
          })
          )
      })
        .catch(function(error){
            // var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage);
        });
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView  showsVerticalScrollIndicator={false}>

      <Text style={styles.heading}>Personal info</Text>

      <Text style={styles.text}>First name</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        firstName={firstName}
        placeholder="Enter Your First Name"
        onFirstNameChange={setFirstName}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Last name</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        lastName={lastName}
        placeholder="Enter Your Last Name"
        onLastNameChange={setLastName}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Phone number</Text>
      <MaterialDisabledTextbox
        style={[styles.materialDisabledTextbox]}
        phoneNumber={phoneNumber}
        placeholder="Enter Your Phone Number"
        onPhoneNumberChange={setPhoneNumber}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Allergies and Restrictions</Text>


      <Text style={styles.heading}>Security</Text>

      <Text style={styles.text}>Email</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        email={email}
        placeholder="Enter Your Email"
        onEmailChange={setEmail}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Password</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        password={password}
        placeholder="Enter Your Password"
        onPasswordChange={setPassword}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Confirm Password</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        passwordConfirm={passwordConfirm}
        placeholder="Enter Your Last Name"
        onPasswordConfirmChange={setPasswordConfirm}
      ></MaterialDisabledTextbox>

      <Text style={styles.heading}>Preferences &amp; Terms</Text>
      <View style={styles.materialCheckboxStack}>
        <MaterialCheckbox1
          style={styles.materialCheckbox}
        ></MaterialCheckbox1>
        <Text style={styles.loremIpsum}>I accept the terms of agreement</Text>
      </View>

      <View style={styles.materialCheckboxStack}>
        <MaterialCheckbox1
          style={styles.materialCheckbox}
        ></MaterialCheckbox1>
        <Text style={styles.loremIpsum}>I would like to receive email and text notifications</Text>
      </View>

      <MaterialButtonViolet
        style={styles.materialButtonViolet}
        onButtonPress={onSignupPress}
      ></MaterialButtonViolet>

      <View>
      <Text>{firstName}</Text>
      </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:"red",
    borderWidth:1,
    paddingTop:hp('2%'),
  },
  heading: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: hp("2.5%"),
    marginLeft: wp("6%")
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: hp("1.5%"),
    marginLeft: wp("8%")
  },
  materialDisabledTextbox: {
    width: wp("80%"),
    height: hp("6.8%"),
    marginLeft: wp("8%"),
  },
  materialCheckbox: {
    top: 5,
    left: 0,
    width: wp("10%"),
    height: hp("5%"),
    position: "absolute"
  },
  loremIpsum: {
    top: hp("1.35%"),
    left: wp("10.13%"),
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialCheckboxStack: {
    width: wp("90%"),
    height: hp("4.93%"),
    marginLeft: wp("2.93%")
  },
  materialButtonViolet: {
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: wp("60%"),
    marginBottom: hp("2%"),
    marginTop: hp("3%")
  }
});

export default CreateProfile;
