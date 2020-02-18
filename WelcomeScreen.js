import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function WelcomeScreen(){
    return (
        <View>
            <Text style={styles.text}>
                Welcome ...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',

    }
})



