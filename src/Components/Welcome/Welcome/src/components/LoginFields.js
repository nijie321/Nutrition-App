import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LoginFields(){
    return(
        <View style={styles.container}>
            <Text style={styles.emailText}>
                Email
            </Text>
            <TextInput 
                placeholder="Enter Your Email"
                placeholderTextColor="rgba(230,230,230,1)"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setEmail(text)}
                style={styles.emailInput}
            />
            
            <Text style={styles.passwordText}>
                Password
            </Text>
            <TextInput 
                placeholder="Enter Your Password"
                placeholderTextColor="rgba(230, 230, 230,1)"
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.passwordInput}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        alignSelf:"center"
    },
    emailText:{
        width: wp("20%"),
        height: hp("4%"),
        color: "rgba(122,179,52,1)",
        fontSize: 17,
        fontFamily: "roboto-regular"
    },
    passwordText:{
        width: wp("30%"),
        height: hp("4%"),
        color: "rgba(122,179,52,1)",
        fontSize: 17,
        fontFamily: "roboto-regular",
        marginTop:hp("3%")
    },
    emailInput:{
        width:wp("70%"),
        height:hp("5%"),
        backgroundColor: "rgba(122,179,52,1)",
        color: "rgba(255,255,255,1)",
        elevation: 9,
        fontSize: 15,
        fontFamily: "roboto-regular",
        marginTop: 7
    },
    passwordInput:{
        width:wp("70%"),
        height:hp("5%"),
        backgroundColor: "rgba(122,179,52,1)",
        color: "rgba(255,255,255,1)",
        elevation: 9,
        fontSize: 15,
        fontFamily: "roboto-regular",
        marginTop: 7
    }
})