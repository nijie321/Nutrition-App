import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert
} from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import {useNavigation, StackActions} from '@react-navigation/native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';

function Welcome2(props) {

    
  
    return (
        <View style={styles.text}>
        <Text>Welcome to</Text>

        </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      fontFamily: "roboto-500",
      fontSize: 30,
      color: "green",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    
  });
  
  export default Welcome2;