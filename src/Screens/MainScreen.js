import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';

import {Picker,Icon} from 'native-base';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import firebase from '../../FireBase';
const db = firebase.firestore();

function M({navigation, route}){
    const [meal, setMeal] = useState({});
    const [hasData, setHasData] = useState(false);

    function setData(data){
        setMeal(data);
    }
    useEffect( () => {
        
        async function fetchData(){
            await db.collection("weeks").doc("week1").get().then(
                function(doc){
                setData(doc.data());
                setHasData(true);
            })
        }
        fetchData();
        console.log(meal);
    },[route.params.id]);


    if(hasData){
    return(
    
        <ScrollView>
            <View style={styles.container}>
            <View style={{flexDirection:"row", padding:20,paddingLeft:5, paddingTop:10}}>
                    <Text style={styles.text}>Monday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:10}}
                    >
                        
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 1"})}}
                            >
                                <Image source={require("../../assets/meals/meal1.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal1.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal1.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 2"})}}
                            >
                                <Image source={require("../../assets/meals/meal2.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal2.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal2.price}</Text>
                            </View>
                       </View>
                    </ScrollView>
            </View>

            <View style={{flexDirection:"row", padding:20,paddingLeft:5, paddingTop:10}}>
                    <Text style={styles.text}>Tuesday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:10}}
                    >
                        
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 3"})}}
                            >
                                <Image source={require("../../assets/meals/meal3.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal3.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal3.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 4"})}}
                            >
                                <Image source={require("../../assets/meals/meal4.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal4.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal4.price}</Text>
                            </View>
                       </View>
                    </ScrollView>
            </View>

            <View style={{flexDirection:"row", padding:20,paddingLeft:5, paddingTop:10}}>
                    <Text style={{
                    color: "rgba(187,61,21,1)",
                    fontSize:20,
                    paddingHorizontal:5,
                    paddingTop:50}}
                    >Wednesday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:0}}
                    >
                        
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 5"})}}
                            >
                                <Image source={require("../../assets/meals/meal5.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal5.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal5.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 6"})}}
                            >
                                <Image source={require("../../assets/meals/meal6.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal6.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5,fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal6.price}</Text>
                            </View>
                       </View>
                    </ScrollView>
                </View>



                <View style={{flexDirection:"row", padding:20,paddingLeft:5, paddingTop:10}}>
                    <Text style={styles.text}>Thursday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{paddingLeft:0}}
                    >
                        
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 7"})}}
                            >
                                <Image source={require("../../assets/meals/meal7.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal7.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal7.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:145, width:130, marginLeft:10}}>
                            <TouchableOpacity style={{height:117, width:130}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 8"})}}
                            >
                                <Image source={require("../../assets/meals/meal8.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: 10,
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal8.name}</Text>
                                <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal8.price}</Text>
                            </View>
                       </View>
                    </ScrollView>
                </View> 
            </View>
            <View style={{width: wp("30%")}}>
                    <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
            </View>
        </ScrollView>
        );
    }else{
        return(null)
    }
}

const Tab = createMaterialTopTabNavigator();


function MainScreen1(){

    return(
        <Tab.Navigator>
        <Tab.Screen name="Week 1" component={M} initialParams={{id:1}}/> 
        <Tab.Screen name="Week 2" component={M} initialParams={{id:2}}/>
      </Tab.Navigator>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap:"wrap",
        alignItems:"flex-start"
    },
    subcontainer:{
        flexDirection:"row",
        padding:20,
        paddingTop: 10,
        paddingLeft:5
        //padding:20,paddingLeft:5, paddingTop:10
        // top:60
    }, 
    text:{
        color: "rgba(187,61,21,1)",
        fontSize:20,
        paddingHorizontal:15,
        paddingTop:50
    },
})

export default MainScreen1