import React from "react";
import { View, Text, Image,StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Title(){
    return (
        <View style={styles.title}>
            <Text style={styles.welcomeText}>
                Welcome to
            </Text>
            <View style={styles.imageView}>
                <Image
                    source={require('../../../../../../assets/MemphisEATS_logo.png')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        alignItems: "center",
        marginTop:hp("10%")
    },
    imageView:{
        alignItems:"center"
    },
    image:{
        width:wp("65%"),
        height:hp("20%"),
        margin:0,
        resizeMode:"contain"
    },
    welcomeText:{
        width: wp("70%"),
        height: hp("10%"),
        marginBottom:-wp("15%"),
        color: "rgba(106,164,27,1)",
        fontSize: wp("8%"),
        fontFamily: "roboto-regular",
        textAlign: "center",
    }
})