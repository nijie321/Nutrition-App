import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function OrderContainer(){
    return(
        <View style={styles.order_container}>
            <Text>Hummus and Pearl Barely Bowls</Text>
            
            <Button rounded success style={styles.detail_btn}><Text style={{paddingLeft:wp("3%")}}>View Detail</Text></Button>
        </View>
    )
}

function PaymentHistory(){

    return(
        <View>
            <OrderContainer />
            <OrderContainer />
            <OrderContainer />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column"
    },
    detail_btn:{
        width:wp("15%"),
        textAlign:"center"
    },
    order_container:{
        flexDirection:"row",
        marginVertical:hp("1%"),
    }
})

export default PaymentHistory