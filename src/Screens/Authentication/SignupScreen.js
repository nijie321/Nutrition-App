import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import * as firebase from 'firebase';

export default function SignupScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    
    function onSignupPress(){
        if(password !== passwordConfirm){
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function() {
                
                // Alert.alert("Created the account successfully.");
            })        
            .catch(function(error){
                // var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    }

    // function onBackTo
    
    return (
        <View style={{paddingTop:50, alignItems:"center"}}>
            <Text>Signup</Text>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={email}
                onChangeText={(text) => {setEmail(text)}}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View style={{paddingTop:10}} />

            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={password}
                onChangeText={(text)=>setPassword(text)}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View style={{paddingTop:10}} />
            
            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={passwordConfirm}
                onChangeText={(text)=> setPasswordConfirm(text)}
                placeholder="Confirm Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button title="Signup" onPress={onSignupPress} />
            {/* <Button title="Back to Login" onPress={onBack} /> */}
            
        </View>
    )
}
