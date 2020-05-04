import React, {useState} from "react";
import {View,StyleSheet,TouchableOpacity, Text} from "react-native";

import {useNavigation} from "@react-navigation/native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function AccountManagementFields(){
    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate("Forget Password")}}
                >
                    <Text style={styles.forgotPassword}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.noAccountContainer}>
                <Text style={styles.dontHaveAcc}>Don't have an account yet?</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    forgotPasswordContainer:{
        marginTop: hp("6%"),
        marginLeft: wp("15%"),
        flexDirection:"row"
    },
    forgotPassword:{
        width: wp("50%"),
        height: hp("7%"),
        color: "rgba(248,186,28,1)",
        fontSize: 16,
        fontFamily: "roboto-regular",
        lineHeight: 40
    },
    noAccountContainer:{
        marginTop:hp("5%"),
        flexDirection:"column",
        alignItems:"center"
    },
    dontHaveAcc:{
        width: wp("100%"),
        height: hp("6%"),
        color: "rgba(127,202,23,1)",
        fontSize: 17,
        fontFamily: "roboto-regular",
        lineHeight: 40,
        textAlign:"center"
    }
});