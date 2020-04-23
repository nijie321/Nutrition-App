import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, TextInput,Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import * as Font from 'expo-font';

function MaterialDisabledTextbox(props) {

  function action(text){
    if("lastName" in props){
      props.onLastNameChange(text);
    }else if("firstName" in props){
      props.onFristNameChange(text);
    }else if("phoneNumber" in props){
      props.onPhoneNumberChange(text);
    }else if("address" in props){
      props.onAddressChange(text);
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
          placeholder="email"
          style={[styles.inputStyle]}
          onChangeText={action}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      )
    }else if("password" in props){
      return (<TextInput 
          placeholder="password"
          style={[styles.inputStyle]}
          onChangeText={action}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />)
    }else if("passwordConfirm" in props){
      return(<TextInput 
          placeholder="Confirm Password"
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
      <Icon name="information-outline" style={styles.iconStyle}></Icon>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(106,164,27,1)",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#fda856",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "rgba(106,164,27,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8,
    opacity: 0.7
  }
});

export default MaterialDisabledTextbox;
