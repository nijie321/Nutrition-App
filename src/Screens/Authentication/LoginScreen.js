import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import * as firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';


export default function LoginScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigation = useNavigation();

    function onLoginPress(){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function() {
                Alert.alert("Signed in successfully");
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorCode, errorMessage);
            });
    }
    

    return(
        <View style={{paddingTop: 50, alignItems:"center"}}>
            <Text>Login</Text>
            
            <TextInput style={{width: 200, height: 40, borderWidth:1}}
                value={email}
                onChangeText={(text) => {setEmail(text)}}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View style={{paddingTop: 10}} />

            <TextInput style={{width: 200, height:40, borderWidth: 1}}
                value={password}
                onChangeText={(text) => {setPassword(text)}}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button title="Login" onPress={onLoginPress} />
            <Button title="Sign Up" onPress={() => {navigation.navigate("Sign Up")}} />
            <Button title="Forget Password" onPress={() => {navigation.navigate("Forget Password")}} />
            
        </View>
    )

}


const styles = StyleSheet.create({

})