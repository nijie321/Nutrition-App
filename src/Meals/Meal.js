import React, {useState} from 'react';

import {StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {  useNavigation, useRoute } from '@react-navigation/native';


export default function Meal({day}){
    const [bClick,setbClick] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();


    const pic1 = (<Image source={require('../../assets/Chickpea-Salad.jpg')} 
    style = {{flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'}}/>)
    const pic2 = (<Image source={require('../../assets/placeholder.png')}
    style={{height:130,width:130}}/>)

    function determinePic(){
        if(bClick){
            return(
                pic1
            )
        } else{
            return(
                pic2
            )
        }
    };
    
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => navigation.navigate('Detail',{week: route.name, day:day, onButtonClick:setbClick })}>
                {determinePic()}
                {/* {bClick? <Image source={require('../assets/Chickpea-Salad.jpg')} 
    style = {{height: 130, width: 130}}/>: <Image source={require('../assets/placeholder.png')} 
    style = {{height: 130, width: 130}}/> }
                 */}

                {/* <Image source={require('../assets/Chickpea-Salad.jpg')} 
                    style = {{height: 130, width: 130}}
                /> */}
            </TouchableHighlight>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: 130,
        marginLeft:20,
        paddingHorizontal: 10
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
})

