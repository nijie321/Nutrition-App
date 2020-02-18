import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, useState} from 'react-native';

import Meal from '../Meals/Meal';


const width = Dimensions.get('window').width;
export default function Day({day}){
    return(
        <View style={styles.OutterContainer}>
            <Text style={styles.text}>
                {day}
            </Text>
            <View style={styles.innerContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Meal day={day}/>
                    <Meal day={day}/>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    outterContainer:{
        flex:1,
        borderColor: 'blue',
        borderWidth: 0, 
        marginVertical: 10,
        width: width,
        height: 200
    },
    text:{
        paddingHorizontal: 20,
        fontSize: 24,
        fontWeight: '700'
    },
    innerContainer:{
        height:130,
        marginTop:10
    }
})