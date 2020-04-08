import React, { useState } from "react";
import { StyleSheet, View, TextInput, ScrollView, Alert, KeyboardAvoidingView} from "react-native";
import { Container, CheckBox, Content, Body, Text, Button ,ListItem, Form,Item , Input,Label} from 'native-base';

import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
// import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

import {useNavigation, CommonActions} from '@react-navigation/native';

import cloneDeep from 'lodash/cloneDeep';
// import * as firebase from 'firebase';
import firebase from '../../../../../FireBase';
const db = firebase.firestore();
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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


  function onUpdateAllergen(key){
    setAllergensSelected(prev => {return {...prev, [key]: !prev[key]}})
  }

  return (
    <ScrollView style={styles.container}>
      <Container>
        <Content>
          <View>
          <Form>
            <View style={{flexDirection:"row"}}>
              <Item stackedLabel style={{width:wp("30%")}}>
                <Label>First Name</Label>
                <Input onChangeText={text => {setFirstName(text)}}/>
              </Item>
              <Item stackedLabel style={{width:wp("30%")}}>
                <Label>Last Name</Label>
                <Input onChangeText={text => {setLastName(text)}}/>
              </Item>
            </View>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={text => {setEmail(text)}}/>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input onChangeText={text => {setPassword(text)}} secureTextEntry={true}/>
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input onChangeText={text => {setPasswordConfirm(text)}} secureTextEntry={true}/>
            </Item>
            <Item stackedLabel last>
              <Label>Address</Label>
              <Input onChangeText={text => {setAddress(text)}}/>
            </Item>
          </Form>
            
          </View>
          
          <View style={{marginTop:wp("2%")}}>
          <Text style={{fontSize:hp("2%"), fontWeight:"bold"}}>Allergens</Text>
          
            <ListItem style={styles.list_view}>
              <CheckBox checked={allergensSelected["wheat"]} onPress={() => {
                  onUpdateAllergen("wheat")
                }}
              />
              <Body>
                <Text>wheat</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox checked={allergensSelected["milk"]} onPress={() => {
                  onUpdateAllergen("milk")
                }}
              />
              <Body>
                <Text>milk</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox checked={allergensSelected["soy"]} onPress={() => {
                  onUpdateAllergen("soy")
                }}
              />
              <Body>
                <Text>soy</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox checked={allergensSelected["seasame"]} onPress={() => {
                  onUpdateAllergen("seasame")
                }}
              />
              <Body>
                <Text>seasame</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox checked={ allergensSelected["shelfish"] } onPress={() => {
                  onUpdateAllergen("shelfish")
                  // setAllergensSelected(prev => {onUpdateAllergen("shelfish")})
                }}
              />
              <Body>
                <Text>shelfish</Text>
              </Body>
            </ListItem>
          </View>

          <View style={{width:wp("50%"), alignSelf:"center", marginTop:hp("2%")}}>
            <Button block onPress={onSignupPress}>
              <Text>Sign Up</Text>
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
    width:wp("15%")
  }

})

export default CreateProfile;