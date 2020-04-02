import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, TextInput,Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import * as Font from 'expo-font';

function MaterialDisabledTextbox(props) {

  function action(text){
    if("lastName" in props){
      props.onLastNameChange(text);
    }else if("firstName" in props){
      props.onFirstNameChange(text);
    }else if("phoneNumber" in props){
      props.onPhoneNumberChange(text);
    }else if("address" in props){
      props.onAddressChange(text);
    }else if("workAddress" in props){
      props.onWorkAddressChange(text)
    }else if("weight" in props){
      props.onWeightChange(text)
    }else if("email" in props){
      props.onEmailChange(text)
    }else if("password" in props){
      props.onPasswordChange(text)
    }else if("passwordConfirm" in props){
      props.onPasswordConfirmChange(text)
    }
  }

  function rendering(){
    if("email" in props){
      return(
        <TextInput
          style={[styles.inputStyle]}
          onChangeText={action}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      )
    }else if("password" in props){
      return (<TextInput
          style={[styles.inputStyle]}
          onChangeText={action}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />)
    }else if("passwordConfirm" in props){
      return(<TextInput
          style={[styles.inputStyle]}
          onChangeText={action}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />)
    }else{
      return(<TextInput
        placeholder={props.placeholder}
        style={[styles.inputStyle]}
        onChangeText={action}
      />)
    }
  }

  return (
    <View style={[styles.container, props.style]}>
      {rendering()}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(122,179,52,1)",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialDisabledTextbox;
