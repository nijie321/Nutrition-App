import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import firebase from "../../../../../../FireBase";
const db = firebase.firestore();

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function EditProfile() {
  var user = firebase.auth().currentUser;
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  

  function onUpdate(){
    db.collection("users").doc(user.uid).update({
      firstName,
      lastName,
      phoneNumber,
      address
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.group6}>
          <Text style={styles.firstName}>First name:</Text>
          <TextInput
            placeholder="Lorem Ipsum"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput}
            onChangeText={(text) => {setFirstName(text)}}
          ></TextInput>
          <Text style={styles.lastName}>Last name:</Text>
          <TextInput
            placeholder="Lorem Ipsum"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput2}
            onChangeText={(text) => {setLastName(text)}}
          ></TextInput>
          <Text style={styles.phoneNumber}>Phone number:</Text>
          <TextInput
            placeholder="Lorem Ipsum"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput3}
            onChangeText={(text) => {setPhoneNumber(text)}}
          ></TextInput>
          <Text style={styles.address}>Address:</Text>
          <TextInput
            placeholder="Lorem Ipsum"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput4}
            onChangeText={(text) => {setAddress(text)}}
          ></TextInput>
        </View>
        <View style={styles.group2}>
          <View style={styles.allergiesRow}>
            <Text style={styles.allergies}>Allergies and Restrictions:</Text>
            <TouchableOpacity style={styles.button4}>
              <IoniconsIcon name="md-add" style={styles.icon4}></IoniconsIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group3Row}>
              <View style={styles.group3}>
                <View style={styles.shellfishFreeRow}>
                  <Text style={styles.shellfishFree}>Shellfish-Free</Text>
                  <TouchableOpacity style={styles.button53}>
                    <EntypoIcon name="cross" style={styles.icon5}></EntypoIcon>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.group4}>
                <View style={styles.fishFree3Row}>
                  <Text style={styles.fishFree3}>Fish-Free</Text>
                  <TouchableOpacity style={styles.button2}>
                    <EntypoIcon name="cross" style={styles.icon2}></EntypoIcon>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.group5}>
                <View style={styles.glutenFreeRow}>
                  <Text style={styles.glutenFree}>Gluten-Free</Text>
                  <TouchableOpacity style={styles.button3}>
                    <EntypoIcon name="cross" style={styles.icon3}></EntypoIcon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity
        style={[ {backgroundColor: "rgba(248,217,28,1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 5, marginTop:30, width:wp("20%"), height:hp("5%")}]}
        onPress={onUpdate}
      >
        <Text style={{color: "rgba(118,118,118,1)",
    fontSize: 17,
    fontFamily: "roboto-500"}}>SAVE</Text>
      </TouchableOpacity>
      {/* <CupertinoButtonPurple
        style={styles.cupertinoButtonPurple}
      ></CupertinoButtonPurple> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group7: {
    // width: 318,
    // height: 471,
    width: wp("100%"),//318,
    height: hp("60%"),//471,
    // marginTop: 70,
    marginTop: hp("5%"),
    // marginLeft: 48,
    alignItems:"center",
    // alignSelf:"center"
  },
  group6: {
    // width: 318,
    // height: 383
    // width: wp("50%"),
    // height: hp("50%"),
    // alignItems:"center"
    // alignContent:"center"
    // alignSelf:"center"
    // alignItems:"center"
  },
  firstName: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-300",
    marginLeft: 2
  },
  textInput: {
    width: 318,
    height: 45,
    backgroundColor: "rgba(161,197,89,1)",
    color: "rgba(111,111,111,1)",
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  lastName: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-300",
    marginTop: 10,
    marginLeft: 2
  },
  textInput2: {
    width: 318,
    height: 45,
    backgroundColor: "rgba(161,197,89,1)",
    color: "rgba(111,111,111,1)",
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  phoneNumber: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-300",
    marginTop: 10,
    marginLeft: 2
  },
  textInput3: {
    width: 318,
    height: 45,
    backgroundColor: "rgba(161,197,89,1)",
    color: "rgba(111,111,111,1)",
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  address: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-300",
    marginTop: 10,
    marginLeft: 2
  },
  textInput4: {
    width: 318,
    height: 45,
    backgroundColor: "rgba(161,197,89,1)",
    color: "rgba(111,111,111,1)",
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  group2: {
    width: 238,
    height: 20,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 1
  },
  allergies: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 1
  },
  button4: {
    width: 13,
    height: 20,
    marginLeft: 12
  },
  icon4: {
    color: "rgba(133,133,133,1)",
    fontSize: 20
  },
  allergiesRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  scrollArea: {
    width: 313,
    height: 20,
    marginTop: 12,
    marginLeft: 1
  },
  scrollArea_contentContainerStyle: {
    width: 313,
    height: 20,
    flexDirection: "row"
  },
  group3: {
    width: 115,
    height: 20,
    flexDirection: "row"
  },
  shellfishFree: {
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  button53: {
    width: 20,
    height: 20,
    marginLeft: 5
  },
  icon5: {
    color: "rgba(161,197,89,1)",
    fontSize: 20
  },
  shellfishFreeRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  group4: {
    width: 90,
    height: 20,
    flexDirection: "row",
    marginLeft: 5
  },
  fishFree3: {
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  button2: {
    width: 20,
    height: 20,
    marginLeft: 9
  },
  icon2: {
    color: "rgba(161,197,89,1)",
    fontSize: 20
  },
  fishFree3Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    width: 96,
    height: 20,
    flexDirection: "row",
    marginLeft: 7
  },
  glutenFree: {
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  button3: {
    width: 20,
    height: 20
  },
  icon3: {
    color: "rgba(161,197,89,1)",
    fontSize: 20
  },
  glutenFreeRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  group3Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  cupertinoButtonPurple: {
    width: 100,
    height: 44,
    width: wp("50%"),
    height: hp("10%"),
    elevation: 45,
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.27,
    shadowRadius: 15,
    // marginTop: 70,
    // marginLeft: 157
    // marginTop:10,
    alignSelf:"center"
  }
});

export default EditProfile;
