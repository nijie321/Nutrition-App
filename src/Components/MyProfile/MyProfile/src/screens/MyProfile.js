import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";

function MyProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.saraSmithRow}>
            <Text style={styles.saraSmith}>Sara Smith</Text>
            <TextInput
              placeholder="Edit Profile"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={styles.group}>
            <Text style={styles.email}>Email:</Text>
            <Text style={styles.ssmith123GmailCom}>ssmith123@gmail.com</Text>
            <View style={styles.rect}></View>
          </View>
          <View style={styles.group2}>
            <Text style={styles.phoneNumber2}>Phone number:</Text>
            <Text style={styles.ssmith123GmailCom2}>901 845 5445</Text>
            <View style={styles.rect3}></View>
          </View>
          <Text style={styles.address2}>Address:</Text>
          <Text style={styles.text}>3720 Alumni Ave, Memphis, TN 38152</Text>
          <View style={styles.rect5}></View>
          <Text style={styles.allergies}>Allergies and Restrictions:</Text>
          <Text style={styles.text2}>
            Shellfish-Free, Fish-Free, Gluten-Free
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea: {
    width: 318,
    height: 377,
    marginTop: 201,
    marginLeft: 48
  },
  scrollArea_contentContainerStyle: {
    width: 318,
    height: 377,
    flexDirection: "column"
  },
  saraSmith: {
    width: 130,
    height: 27,
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "roboto-300",
    alignSelf: "flex-end"
  },
  textInput: {
    width: 75,
    height: 14,
    color: "rgba(111,111,111,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginLeft: 110,
    marginTop: 6
  },
  saraSmithRow: {
    height: 27,
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 1
  },
  group: {
    width: 318,
    height: 66,
    alignSelf: "flex-end",
    marginTop: 16
  },
  email: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 2
  },
  ssmith123GmailCom: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 2
  },
  rect: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 6
  },
  group2: {
    width: 318,
    height: 66,
    marginTop: 24
  },
  phoneNumber2: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 2
  },
  ssmith123GmailCom2: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 2
  },
  rect3: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 6
  },
  address2: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 2
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 2
  },
  rect5: {
    width: 318,
    height: 3,
    backgroundColor: "rgba(161,197,89,1)",
    marginTop: 6
  },
  allergies: {
    color: "rgba(161,197,89,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 40,
    marginLeft: 2
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 11,
    marginLeft: 2
  }
});

export default MyProfile;
