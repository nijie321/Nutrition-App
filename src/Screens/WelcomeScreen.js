import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

import LoginScreen from './Authentication/LoginScreen';


export default function WelcomeScreen(){


    return(
        <View style={styles.container}>
            <View style={[styles.container, {alignItems:"center"}]}>
                <Text style={styles.text}>
                    Welcome to the Nutrition App
                </Text>    
            </View>
             
            <View style={{flex:2,borderWidth:2, borderColor:"red" , alignItems:"center"}}>
                <LoginScreen />
            </View>
            
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        fontSize: 20,
        fontWeight: "800",
        color: 'green'
    },
    input:{
        width: 200,
        height: 40,
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10
    }
})