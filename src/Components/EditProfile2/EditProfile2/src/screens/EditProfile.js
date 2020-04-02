import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import firebase from "../../../../../../FireBase";
const db = firebase.firestore();

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function EditProfile() {
  var user = firebase.auth().currentUser;
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [workAddress, setWorkAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  

  function onUpdate(){
    db.collection("users").doc(user.uid).update({
      firstName,
      lastName,
      phoneNumber,
      address,
      workAddress
    })
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
        <MaterialDisabledTextbox
          style={[styles.materialDisabledTextbox]}
          address={address}
          onAddressChange={setAddress}
        ></MaterialDisabledTextbox>

        <Text style={styles.text}>Work Address</Text>
        <MaterialDisabledTextbox
          style={[styles.materialDisabledTextbox]}
          workAddress={workAddress}
          onWorkAddressChange={setWorkAddress}
        ></MaterialDisabledTextbox>

        <Text style={styles.text}>Weight (lbs)</Text>
        <MaterialDisabledTextbox
          style={[styles.materialDisabledTextbox]}
          weight={weight}
          onWeightChange={setWeight}
        ></MaterialDisabledTextbox>

        <Text style={styles.text}>Allergies and Restrictions</Text>


        <Text style={styles.heading}>Security</Text>

        <Text style={styles.text}>Password</Text>
        <MaterialDisabledTextbox
          style={styles.materialDisabledTextbox}
          password={password}
          onPasswordChange={setPassword}
        ></MaterialDisabledTextbox>

        <Text style={styles.text}>Confirm Password</Text>
        <MaterialDisabledTextbox
          style={styles.materialDisabledTextbox}
          passwordConfirm={passwordConfirm}
          onPasswordConfirmChange={setPasswordConfirm}
        ></MaterialDisabledTextbox>

        <TouchableOpacity
            style={[ {backgroundColor: "rgba(248,217,28,1)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignSelf:"center",
            paddingRight: 16,
            paddingLeft: 16,
            borderRadius: 5, marginTop:hp("3%"), marginBottom:hp("3%"),
            width:wp("30%"), height:hp("5%")}]}
            onPress={onUpdate}
        ><Text style={{color: "rgba(118,118,118,1)", fontSize: 17, fontFamily: "roboto-500"}}>SAVE</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
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

export default EditProfile;
