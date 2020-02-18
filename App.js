import * as React from 'react';
// import { Text, View, Button, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {createStackNavigator} from '@react-navigation/stack';

import Detail from './Screens/Detail';
import Week from './Screens/Week';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeTabNavigator = ({navigation, route}) => {
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
      <Stack.Navigator>
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


