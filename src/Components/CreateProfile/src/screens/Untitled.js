import React, { Component,useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Button, Alert, KeyboardAvoidingView} from "react-native";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

import {useNavigation, CommonActions} from '@react-navigation/native';

// import * as firebase from 'firebase';

import firebase from '../../../../../FireBase';
const db = firebase.firestore();

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
              // ,address: address
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

        //   navigation.dispatch(
        //     StackActions.replace('Home')
        // )
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
      <Text style={styles.personalInfo}>Personal info</Text>
      <View style={styles.firstNameStack}>
        <Text style={styles.firstName}>First name</Text>
        <MaterialDisabledTextbox
          style={styles.materialDisabledTextbox}
          firstName={firstName}
          placeholder="Enter Your First Name"
          onFristNameChange={setFirstName}
        ></MaterialDisabledTextbox>
      </View>
      <Text style={styles.lastName}>Last name</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox2}
        lastName={lastName}
        placeholder="Enter Your Last Name"
        onLastNameChange={setLastName}
      ></MaterialDisabledTextbox>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <MaterialDisabledTextbox
        style={[styles.materialDisabledTextbox3]}
        phoneNumber={phoneNumber}
        placeholder="Enter Your Phone Number"
        onPhoneNumberChange={setPhoneNumber}
      ></MaterialDisabledTextbox>
    {/* ignore the address field*/}
      {/* <Text style={styles.phoneNumber}>Address</Text>
      <MaterialDisabledTextbox
        style={[styles.materialDisabledTextbox3]}
        address={address}
        placeholder="Enter Your Address"
        onAddressChange={setAddress}
      ></MaterialDisabledTextbox> */}
      <Text style={styles.security}>Security</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox4}
        email={email}
        onEmailChange={setEmail}
      ></MaterialDisabledTextbox>
      <Text style={styles.email}>Email</Text>
      <View style={styles.materialDisabledTextbox5Stack}>
        <MaterialDisabledTextbox
          style={styles.materialDisabledTextbox5}
          password={password}
          onPasswordChange={setPassword}
        ></MaterialDisabledTextbox>
        <Text style={styles.password}>Password</Text>
      </View>
      <View style={styles.materialDisabledTextbox5Stack}>
        <MaterialDisabledTextbox
          style={styles.materialDisabledTextbox5}
          passwordConfirm={passwordConfirm}
          onPasswordConfirmChange={setPasswordConfirm}
        ></MaterialDisabledTextbox>
        <Text style={styles.password}>Confirm Password</Text>
      </View>
      <Text style={styles.loremIpsum}>Allergies and Restrictions</Text>
      <View style={styles.rect2}></View>
      <Text style={styles.preferencesTerms}>Preferences &amp; Terms</Text>
      <View style={styles.materialCheckbox1Row}>
        <MaterialCheckbox1 style={styles.materialCheckbox1}></MaterialCheckbox1>
        <Text style={styles.loremIpsum2}>
          I would like to receive email and text notifications
        </Text>
      </View>
      <View style={styles.materialCheckbox12Stack}>
        <MaterialCheckbox1
          style={styles.materialCheckbox12}
        ></MaterialCheckbox1>
        <Text style={styles.loremIpsum3}>I accept the terms of agreement</Text>
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
    flex: 1
  },
  createProfile: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "roboto-700",
    textAlign: "right",
    marginTop: 79,
    alignSelf: "center"
  },
  rect: {
    height: 60,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -105
  },
  icon: {
    color: "rgba(122,179,52,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 29
  },
  personalInfo: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 54,
    marginLeft: 30
  },
  firstName: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialDisabledTextbox: {
    top: 17,
    left: 0,
    width: 295,
    height: 43,
    position: "absolute"
  },
  firstNameStack: {
    width: 295,
    height: 60,
    marginTop: 12,
    marginLeft: 29
  },
  lastName: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 29
  },
  materialDisabledTextbox2: {
    width: 295,
    height: 43,
    marginLeft: 29
  },
  phoneNumber: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 29
  },
  materialDisabledTextbox3: {
    width: 295,
    height: 43,
    marginLeft: 29
  },
  security: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 21,
    marginLeft: 29
  },
  materialDisabledTextbox4: {
    width: 295,
    height: 43,
    marginTop: 29,
    marginLeft: 29
  },
  email: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -61,
    marginLeft: 29
  },
  materialDisabledTextbox5: {
    top: 17,
    left: 0,
    width: 295,
    height: 43,
    position: "absolute"
  },
  password: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialDisabledTextbox5Stack: {
    width: 295,
    height: 60,
    marginTop: 54,
    marginLeft: 29
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 19,
    marginLeft: 30
  },
  rect2: {
    width: 295,
    height: 30,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 12,
    marginLeft: 29
  },
  preferencesTerms: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 28
  },
  materialCheckbox1: {
    width: 40,
    height: 40
  },
  loremIpsum2: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  materialCheckbox1Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 11
  },
  materialCheckbox12: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum3: {
    top: 11,
    left: 38,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialCheckbox12Stack: {
    width: 294,
    height: 40,
    marginLeft: 11
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginLeft: 224,
    marginBottom: 50
  }
});

export default CreateProfile;
