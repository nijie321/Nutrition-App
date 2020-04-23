import React, { Component,useState,useEffect } from "react";
import { StyleSheet, TouchableOpacity,Text,View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import * as Font from 'expo-font';

function MaterialCheckbox1(props) {

  // const [fontLoaded, setFontLoaded] = useState(false);
  const [checked, setCheck] = useState(false);


  // useEffect(() => {
  //   const loadFont = async () =>{
  //     await Font.loadAsync({
  //       "roboto-regular":require("../assets/fonts/roboto-regular.ttf"),
  //       "roboto-700":require("../assets/fonts/roboto-700.ttf") 
  //     });
  //     setFontLoaded(true);
  //   }

  //   loadFont();
  // })

  // if(fontLoaded){
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      onPress={()=> setCheck(prevState => {
        return (!prevState)
      })}
    >
      <Icon
        name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
    </TouchableOpacity>
  )

  // }else{
  //   return(
  //     <View>
  //       <Text>Hello</Text>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "#fda856",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  }
});

export default MaterialCheckbox1;
