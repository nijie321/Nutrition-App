import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import WeekDays from './WeekDays';

export default function Week(){
    return(
        <View style={styles.container}>
            <WeekDays days={['Monday','Tuesday','Wednesday','Thursday']}></WeekDays>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex: 1,
        borderColor: 'black',
        borderWidth:2
    }
})