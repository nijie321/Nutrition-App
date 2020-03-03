import React, { Component,useState,useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";


import * as Font from 'expo-font';

function MaterialButtonViolet(props) {

  // const [fontLoaded, setFontLoaded] = useState(false);
  
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
      onPress={props.onButtonPress}
    >
      <Text style={styles.caption}>Join now</Text>
    </TouchableOpacity>
  );

// }else{
//     return(
//       <View>
//         <Text>Hello</Text>
//       </View>
//     )
//   }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(122,179,52,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet;
