import React, {useState} from 'react';
import { Text, View,Image,TouchableOpacity, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Buffer} from 'buffer';  
global.Buffer = Buffer;
// import { Font } from "expo";

// async componentDidMount(){
//   await Font.loadAsync({
//     <font-name>:require(<relative-path-to-font-file>)
//   })
// }


// import * as ImagePicker from 'expo-image-picker';

import {createStackNavigator} from '@react-navigation/stack';

// import * as firebase from 'firebase';
// import "firebase/firebase-firestore";
// import {firebaseConfig} from './config';

import {Welcome} from './src/Components/Welcome/index';
import Index from './src/Components/Component_5/Index';

import {CreateProfile} from './src/Components/CreateProfile/index';
import {ForgotPassword} from './src/Components/ForgotPassword/index';

import {MainScreen} from './src/Components/MainScreen';
// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig);
// }else{
//   firebase.app();
// }

import firebase from './FireBase';

// firebase.initializeApp(firebaseConfig);


import Detail from './src/Screens/Detail';
import Week from './src/Screens/Week';
import WelcomeScreen from './src/Screens/WelcomeScreen';

import SignupScreen from './src/Screens/Authentication/SignupScreen';
import LoginScreen from './src/Screens/Authentication/LoginScreen';
import ResetPasswordScreen from "./src/Screens/Authentication/ResetPasswordScreen";

import CreateProfileScreen from './src/Screens/CreateProfileScreen';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// const Week2 = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   let openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

//     if(permissionResult.granted === false){
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
//     if(pickerResult.cancelled === true){
//       return;
//     }

//     setSelectedImage({localUri: pickerResult.uri});
//   };

//   return(
//     <View
//       style={{flex:1}}>
      
//       <Button
//         onPress={openImagePickerAsync}
//         title="pick picture">
//       </Button>
//       {selectedImage &&
//         <Image 
//         source={{ uri: selectedImage.localUri }}
//         style={{ width: 200, height: 200 }}
//       />
//       }

//     </View>
//   )  
// }

const db = firebase.firestore();

function firebaseExample(){
  return(
    <View style={{paddingTop: 50, alignItems:"center"}}>
      <Button 
        title="add user"
        onPress={() => {
          db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
          })
          .then(function(docRef){
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error){
            console.error("Error adding document: ", error);
          });
        }}
      />

      <Button
        title="view users"
        onPress={() => {
          db.collection("users").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`)
            });
          });
        }}
      />

    </View>
  )  
}

const HomeTabNavigator = () => {
  console.log(firebase.auth().currentUser.uid);
  return(
    <Tab.Navigator>
        <Tab.Screen name="Week 1" component={Week} options={{ title: 'Week 1'}} />
        <Tab.Screen name="Week 2" component={Week} options={{title: 'Week 2'}} />
      </Tab.Navigator>
  )
}


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen
          name="Untitled"
          component={Untitled}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          name="Create Profile"
          component={CreateProfile}
        />
        <Stack.Screen
          name="BTN"
          component={firebaseExample}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignupScreen}
        />

        <Stack.Screen
          name="Forget Password"
          component={ForgotPassword}
        />

        <Stack.Screen
          name="Log in"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
        />
        
        <Stack.Screen
          name="Detail"
          component={Detail}
          title="Detail"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


