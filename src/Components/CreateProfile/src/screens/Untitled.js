import React, { useState } from "react";
import { StyleSheet, View, TextInput, ScrollView, Alert, KeyboardAvoidingView} from "react-native";
import { Container, CheckBox, Content, Body, Text, Button ,ListItem, Form,Item , Input,Label} from 'native-base';
import {useNavigation, CommonActions} from '@react-navigation/native';

import firebase from '../../../../../FireBase';
const db = firebase.firestore();
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



function CreateProfile() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const INITIALALLERGENS = {
    "wheat": false,
    "milk": false,
    "soy": false,
    "seasame": false,
    "shelfish": false
  }
  const [allergensSelected, setAllergensSelected] = useState(INITIALALLERGENS);

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
              allergen_info: allergensSelected,
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
      })
        .catch(function(error){
            // var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage);
        });
}


  function onUpdateAllergen(key){
    setAllergensSelected(prev => {return {...prev, [key]: !prev[key]}})
  }

  return (
    <ScrollView style={styles.container}>
      <Container>
        <Content>
          <View>
            <Form>
              <View style={{ flexDirection: "row" }}>
                <Item stackedLabel style={{ width: wp("50%"), }}>
                  <Label style={{ color: "rgba(106,164,27,1)" }}>First Name</Label>
                  <Input onChangeText={text => { setFirstName(text) }} />
                </Item>
                <Item stackedLabel style={{ width: wp("50%") }}>
                  <Label style={{ color: "rgba(106,164,27,1)" }}>Last Name</Label>
                  <Input onChangeText={text => { setLastName(text) }} />
                </Item>
              </View>
              <Item stackedLabel>
                <Label style={{ color: "rgba(106,164,27,1)" }}>Email</Label>
                <Input onChangeText={text => { setEmail(text) }} />
              </Item>
              <Item stackedLabel last>
                <Label style={{ color: "rgba(106,164,27,1)" }}>Password</Label>
                <Input onChangeText={text => { setPassword(text) }} secureTextEntry={true} />
              </Item>
              <Item stackedLabel last>
                <Label style={{ color: "rgba(106,164,27,1)" }}>Confirm Password</Label>
                <Input onChangeText={text => { setPasswordConfirm(text) }} secureTextEntry={true} />
              </Item>
              <Item stackedLabel last>
                <Label style={{ color: "rgba(106,164,27,1)" }}>Address</Label>
                <Input onChangeText={text => { setAddress(text) }} />
              </Item>
            </Form>

          </View>
          
          <View style={{marginTop:wp("2%")}}>
          <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"rgba(106,164,27,1)" }}>Allergens</Text>
          
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["wheat"]} onPress={() => {
                  onUpdateAllergen("wheat")
                }}
              />
              <Body>
                <Text>wheat</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["milk"]} onPress={() => {
                  onUpdateAllergen("milk")
                }}
              />
              <Body>
                <Text>milk</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["soy"]} onPress={() => {
                  onUpdateAllergen("soy")
                }}
              />
              <Body>
                <Text>soy</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["seasame"]} onPress={() => {
                  onUpdateAllergen("seasame")
                }}
              />
              <Body>
                <Text>seasame</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={ allergensSelected["shelfish"] } onPress={() => {
                  onUpdateAllergen("shelfish")
                  // setAllergensSelected(prev => {onUpdateAllergen("shelfish")})
                }}
              />
              <Body>
                <Text>shelfish</Text>
              </Body>
            </ListItem>
          </View>

          <View style={{width:wp("30%"), alignSelf:"center", marginTop:hp("2%"),}}>
            <Button color="rgba(106,164,27,1)" block onPress={onSignupPress}>
              <Text>Sign up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    </ScrollView>
    
  );

}

const styles = StyleSheet.create({
  container:{
    
  },
  list_view:{
    width:wp("45%")
  }

})

export default CreateProfile;