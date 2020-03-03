import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import { NavigationContainer, useNavigation, StackActions} from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import {Buffer} from 'buffer';  
global.Buffer = Buffer;


import {createStackNavigator} from '@react-navigation/stack';


import {Welcome} from './src/Components/Welcome/Welcome/index';

import {CreateProfile} from './src/Components/CreateProfile/index';
import {ForgotPassword} from './src/Components/ForgotPassword/index';

// import {MainScreen} from './src/Components/Main/Main/index';
import MainScreen1 from './src/Screens/MainScreen';
import {MainScreen} from './src/Components/MainScreen2/MainScreen2/index';
import {DetailMeal} from './src/Components/DetailedMeal/DetailedMeal/index';

// import {EditProfile} from './src/Components/EditProfile/EditProfile/index';
import {EditProfile} from './src/Components/EditProfile2/EditProfile2/index';
// import {MyProfile} from './src/Components/MyProfile2/MyProfile2/index';


// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import firebase from './FireBase';



// import Detail from './src/Screens/Detail';
// import Week from './src/Screens/Week';


import * as Font from 'expo-font';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const db = firebase.firestore();

// Week
const HomeTabNavigator = () => {
  const navigation = useNavigation();
  var user = firebase.auth().currentUser;
  useEffect(() => {
      if(user){
        navigation.setOptions({headerRight: () => (
            <Button
              onPress={() => {
                navigation.dispatch(
                  StackActions.replace("Welcome")
                )
              }}
              title="Log Out"
              color="#00cc00"//"#00cc00" 
            />
          )
        })
      }
      // console.log("use effect");
  },[])

  return(
    <Tab.Navigator
      barStyle={{backgroundColor: '#a1c559', height:60}} //marginBottom:20,
    >
        <Tab.Screen name="Week 1" component={MainScreen1} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={20} />
          ),
        }}
        />
        <Tab.Screen name="Edit Profile" component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color,size}) => (  
              <AntDesign name="profile" color={color} size={20} />
          )  
        }} />

        <Tab.Screen name="Shopping Cart" component={MainScreen}
        options={{
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({color,size}) => (
            <AntDesign name="shoppingcart" color={color} size={20} />
          )  
        }} />

        <Tab.Screen name="History" component={MainScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color,size}) => (
            <FontAwesome5 name="history" color={color} size={20} />
          )  
        }} />
        
      </Tab.Navigator>
  )
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "roboto-300":require("./assets/fonts/roboto-300.ttf"),
        "roboto-500":require("./assets/fonts/roboto-500.ttf"),
        "roboto-700":require("./assets/fonts/roboto-700.ttf"),
        "roboto-900":require("./assets/fonts/roboto-900.ttf"),
        "roboto-regular":require("./assets/fonts/roboto-regular.ttf"),
        "impact-regular":require("./assets/fonts/impact-regular.ttf"),
        "courier-regular":require("./assets/fonts/courier-regular.ttf"), 
        "arial-regular":require("./assets/fonts/arial-regular.ttf"),
        "Roboto":require("./assets/fonts/roboto-regular.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  })
  
  if(fontLoaded){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen
          name="Untitled"
          component={Untitled}
        /> */}

        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
        />
        
        {/* <Stack.Screen
          name="My Profile"
          component={MyProfile}
        /> */}

        <Stack.Screen
          name="Detail Meal"
          component={DetailMeal}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen1}
          // options={{headerLeft: null}}
        />
        <Stack.Screen
          name="Create Profile"
          component={CreateProfile}
        />
        {/* <Stack.Screen
          name="BTN"
          component={firebaseExample}
        /> */}
        {/* <Stack.Screen
          name="Sign Up"
          component={SignupScreen}
        /> */}

        <Stack.Screen
          name="Forget Password"
          component={ForgotPassword}
        />

        {/* <Stack.Screen
          name="Log in"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
        />
{/*         
        <Stack.Screen
          name="Detail"
          component={Detail}
          title="Detail"
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  }else{
    return null;
  }
}


