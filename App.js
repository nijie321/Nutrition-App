import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Platform, InteractionManager,Text, View} from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// import {Buffer} from 'buffer';  
// global.Buffer = Buffer;


import {createStackNavigator} from '@react-navigation/stack';


import {Welcome} from './src/Components/Welcome/Welcome/index';

import {CreateProfile} from './src/Components/CreateProfile/index';
import {ForgotPassword} from './src/Components/ForgotPassword/index';
import MainScreen1 from './src/Screens/MainScreen';
import {DetailMeal} from './src/Components/DetailedMeal/DetailedMeal/index';
import {EditProfile} from './src/Components/EditProfile2/EditProfile2/index';

//import FavList from './src/Screens/FavList';
import Favorite2 from './src/Screens/Favorite2';
// import Favorite from './src/Screens/Favorite';
import firebase from './FireBase';



// import Detail from './src/Screens/Detail';
// import Week from './src/Screens/Week';


import * as Font from 'expo-font';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Week
function HomeTabNavigator({navigation,route}){
  
  // shopping cart item badge number. use 0 as a placeholder for now.
  const [items, setItems] = useState(1)
  
  // edit profile information. used for setting badge mark on profile icon.
  const [profileCompleted, setProfileCompleted] = useState(false)

  var user = firebase.auth().currentUser;

  function getHeaderTitle(route) {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
      ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
      : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'Feed';
  
    switch (routeName) {
      case 'Feed':
        return 'Main';
      case 'Edit Profile':
        return 'Edit Profile';
      case 'Main':
        return 'Main';
      case 'Shopping Cart':
        return 'Shopping Cart';
      case 'History':
        return 'History';
      case 'Favorite':
          return 'Favorite';
    }
  }
  
  useLayoutEffect(() => {
      if(user){
        navigation.setOptions({headerRight: () => (
            // <TouchableOpacity
            //   onPress={() => {navigation.dispatch(StackActions.replace("Welcome"))}}
            // >
            //   <Text>Log Out</Text>
            // </TouchableOpacity>
            <SimpleLineIcons.Button
              name="logout"
              backgroundColor="#a1c559" //"#3b5998"
              onPress={() => {navigation.dispatch(StackActions.replace("Welcome"))}}
            >
              Log out
            </SimpleLineIcons.Button>
          ),
          headerTitle: getHeaderTitle(route),
          // headerStyle: {height: 80}
          headerTitleAlign:"center",
        },[navigation,route])
 
      };
      // console.log("use effect");
  }
  )

  return(
    <Tab.Navigator
      title="Profile"
      barStyle={{backgroundColor: '#a1c559', height:60}} //marginBottom:20,
    >
        <Tab.Screen name="Main" component={MainScreen1} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={20}/>
          ),
        }}
        />
        <Tab.Screen name="Edit Profile" component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
              <View>
                <AntDesign name="profile" color={color} size={20} />
                {
                  profileCompleted?
                  null : 
                  <View style={{ position: 'absolute', left: 12, bottom: 12, backgroundColor: 'red', borderRadius: 9, width: 15, height: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color:"white"}}>!</Text>
                  </View>
                }
              </View>
          ),
          title:"Edit Profile"
        }}
        // tabPress={() => {}}
        />

        <Tab.Screen name="Shopping Cart" component={MainScreen1}
        options={{
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({color}) => (
            <View>
            <AntDesign name="shoppingcart" color={color} size={20} />
              {
                items === 0 ?
                null : 
                <View style={{ position: 'absolute', left: 12, bottom: 12, backgroundColor: 'red', borderRadius: 9, width: 15, height: 15, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{color: 'white'}}>{items}</Text>
                </View>
              }
            </View>
          )  
        }} />

        <Tab.Screen name="History" component={MainScreen1}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="history" color={color} size={20} />
          )  
        }} />

     
      {/* <Tab.Screen name="Favorite" component={FavList} */}
         <Tab.Screen name="Favorite" component={Favorite2}
        //  {/* <Tab.Screen name="Favorite" component={Favorite} */}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" color={color} size={20} />
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
      <Stack.Navigator initialRouteName="Welcome"
        // screenOptions={{
        //   headerShown: false
        // }}
        // screenOptions={{headerTitleAlign:"center"}}
      >

        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{title:"Profile"}}
        />

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

        <Stack.Screen
          name="Forget Password"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          // options={{title:"home1"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }else{
    return null;
  }
}


