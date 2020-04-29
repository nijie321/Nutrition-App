import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  ScrollView
} from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

import {useNavigation, StackActions} from '@react-navigation/native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';


function Welcome(props) {

  const [email, setEmail] = useState("nijie321@outlook.com");
  const [password, setPassword] = useState("abc123");
  
  const navigation = useNavigation();

  function onLoginPress(){
    firebase.auth().signInWithEmailAndPassword(email,password)
        // .then(function() {
        //     Alert.alert("Signed in successfully");
        // })
        .then(() => {
          navigation.dispatch(
            StackActions.replace("Home")
          )
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
  }

  function onJoinNowPress(){
    navigation.navigate("Create Profile");
  }

  return (
    <ScrollView>
      <View style={{flex:1, borderColor:"red"}}>
       
        <View style={{alignItems:"center", marginTop:hp("10%"),}}>
          <Text style={styles.welcomeText}>Welcome to</Text>
        </View>

        <View style={{alignItems:"center", justifyContent: 'center', width: wp("100%"), height: hp("15%"),}}>
        <Image
          source={require('../../../../../../assets/MemphisEATS_logo.png')}
          // style={StyleSheet.logo}   
          style={{width: wp("50%"), height: hp("20%"), }}   
          
        ></Image>
        </View>


        <View style={{ alignSelf:"center"}}>
          <Text style={styles.email}>Email:</Text>
          <TextInput 
            placeholder="Enter Your Email"
            placeholderTextColor="rgba(230,230,230,1)"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {setEmail(text)}}
            style={styles.textInput6}
          />

          <Text style={[styles.password, {marginTop:hp("3%")}]}>Password:</Text>
          <TextInput 
            placeholder="Enter Your Password"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text)=>{setPassword(text)}}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput6}
          />
        </View>

       
        <View style={{ marginTop: hp("6%"), marginLeft: wp("15%"), flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate("Forget Password") }}
          // style={styles.forgotThePassword}
          >
            <Text style={styles.forgotThePassword}>Forget Password?</Text>
          </TouchableOpacity>

          <MaterialButtonSuccess1 style={[styles.MaterialButtonSuccess1, { marginRight: 10 }]}
            onButtonClick={onLoginPress}
          />
        </View> 

       

        <View style={{marginTop:hp("5%"), flexDirection:"column", alignItems:"center" }}>
          <Text style={styles.dontHaveAnAcc}>Don't have an account?</Text>
          
          <View>
          <MaterialButtonSuccess 
            style={styles.materialButtonSuccess2}
            onButtonClick={onJoinNowPress}
          />

          </View>
          
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    // alignContent:"center"
  },
 
  forgotThePassword: {
   
    width: wp("50%"),
    height: hp("7%"),
    color: "rgba(248,186,28,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 40
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonSuccess1: {
    width: 100,
    height: 42,
    marginTop: 7
  },
  buttonRow: {
    
    height: hp("50"),
    flexDirection: "row",
   
  },
  
  dontHaveAnAcc: {
    // width: 228,
    // height: 37,
    //marginBottom: 1,
    width: wp("100%"),
    height: hp("6%"),
    color: "rgba(127,202,23,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    textAlign:"center"
  },
  materialButtonSuccess2: {
    // width: 120,
    // height: 43,

    width: wp("25%"),
    height: hp("5%"),
    marginTop: 15,
    // alignSelf:"center"
   // marginLeft: 54
  },
  welcomeText: {
    // borderWidth:5,
    width: wp("70%"),
    height: hp("10%"),
    // width: 277,
    // height: 81,
    color: "rgba(106,164,27,1)",
    fontSize: wp("8%"),
    fontFamily: "roboto-regular",
    // lineHeight: 40,
    textAlign: "center",
    // marginTop: -638,
    // marginLeft: 69
  },
  
  email: {

    // width: 111,
    // height: 19,
    width: wp("20%"),
    height: hp("4%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput6: {
    width:wp("70%"),
    height:hp("5%"),
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 7
  },
 
  password: {
    // width: 111,
    // height: 23,
    width: wp("30%"),
    height: hp("4%"),
    color: "rgba(122,179,52,1)",
    fontSize: 17,
    fontFamily: "roboto-regular"
  },
  textInput7: {
    width: 331,
    height: 41,
    backgroundColor: "rgba(122,179,52,1)",
    color: "rgba(255,255,255,1)",
    elevation: 9,
    fontSize: 17,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end"
  },
  btnContainer: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  },
  userBtn: {

    backgroundColor: "rgba(122,179,52,1)",
    padding: 10,
    width: "45%"
  },
  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
  
});

export default Welcome;