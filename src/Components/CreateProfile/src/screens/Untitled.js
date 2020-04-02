import React, { Component,useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ScrollView, Alert, KeyboardAvoidingView} from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';

import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialDisabledTextbox1 from "../components/MaterialDisabledTextbox1";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

import { render } from 'react-dom';
import Select from 'react-select';

import {useNavigation, CommonActions} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import firebase from '../../../../../FireBase';
// import * as firebase from 'firebase';
const db = firebase.firestore();

// import { TextInput } from "react-native-paper";

const options = [
    { value: 'a', label: 'a' },
    { value: 'b', label: 'b' },
];

function CreateProfile(props) {
  const navigation = useNavigation();
  // const [fontLoaded, setFontLoaded] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [workAddress, setWorkAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  state = {
    selectedOptions: [],
  }
  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
  }
  const { selectedOption } = this.state;


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
              email: email,
              address: address,
              workAddress: workAddress,
              weight: weight
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
    <View style={styles.container} behavior="padding">
      <ScrollView  showsVerticalScrollIndicator={false}>

      <Text style={styles.heading}>Personal info</Text>

      <Text style={styles.text}>First Name</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        firstName={firstName}
        onFirstNameChange={setFirstName}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Last Name</Text>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        lastName={lastName}
        onLastNameChange={setLastName}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Phone Number</Text>
      <MaterialDisabledTextbox
        style={[styles.materialDisabledTextbox]}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={setPhoneNumber}
      ></MaterialDisabledTextbox>

      <Text style={styles.text}>Address</Text>
      <MaterialDisabledTextbox1
        style={[styles.materialDisabledTextbox]}
        address={address}
        onAddressChange={setAddress}
      ></MaterialDisabledTextbox1>

      <Text style={styles.text}>Work Address</Text>
      <MaterialDisabledTextbox1
        style={[styles.materialDisabledTextbox]}
        workAddress={workAddress}
        onWorkAddressChange={setWorkAddress}
      ></MaterialDisabledTextbox1>

      <Text style={styles.text}>Weight (lbs)</Text>
      <MaterialDisabledTextbox1
        style={[styles.materialDisabledTextbox]}
        weight={weight}
        onWeightChange={setWeight}
      ></MaterialDisabledTextbox1>

      <Text style={styles.text}>Allergies and Restrictions</Text>

      <React.Fragment>
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      {this.state.selectedOptions.map(o => <p>{o.value}</p>)}
      </React.Fragment>


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

      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
