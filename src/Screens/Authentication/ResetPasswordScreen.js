import React, {useState} from 'react';
import {View,Text, TextInput, Button, Alert} from 'react-native';

import * as firebase from 'firebase';

import {useNavigation} from '@react-navigation/native';

export default function ResetPasswordScreen(){
    const [email, setEmail] = useState();
    const navigation = useNavigation();

    function onResetPasswordPress(){
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Password reset email has been sent");
            })
            .catch((error) => {
                Alert.alert(error.message)
            });
    }

    return(
        <View style={{paddingTop:50, alignItems:"center"}}>
            <Text>Forgot Password</Text>

            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={email}
                onChangeText={(text) => {setEmail(text)}}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button title="Reset Password" onPress={onResetPasswordPress} />
            <Button title="Back to Login" onPress={() => navigation.navigate('Log in')} />
        </View>
    )
}


// import React from 'react';
// import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
// import { NavigationActions } from 'react-navigation';
// import * as firebase from 'firebase';

// export default class ForgotPasswordScreen extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { 
//             email: "",
//         };
//     }

//     onResetPasswordPress = () => {
//         firebase.auth().sendPasswordResetEmail(this.state.email)
//             .then(() => {
//                 Alert.alert("Password reset email has been sent.");
//             }, (error) => {
//                 Alert.alert(error.message);
//             });
//     }

//     onBackToLoginPress = () => {
//         var navActions = NavigationActions.reset({
//             index: 0,
//             actions: [NavigationActions.navigate({routeName: "Login"})]
//         });
//         this.props.navigation.dispatch(navActions);
//     }

//     render() {
//         return (
//             <View style={{paddingTop:50, alignItems:"center"}}>

//                 <Text>Forgot Password</Text>

//                 <TextInput style={{width: 200, height: 40, borderWidth: 1}}
//                     value={this.state.email}
//                     onChangeText={(text) => { this.setState({email: text}) }}
//                     placeholder="Email"
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                 />

//                 <Button title="Reset Password" onPress={this.onResetPasswordPress} />
//                 <Button title="Back to Login..." onPress={this.onBackToLoginPress} />
//             </View>
//         );
//     }
// }