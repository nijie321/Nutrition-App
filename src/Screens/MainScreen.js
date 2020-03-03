import React, {Component, useEffect,useLayoutEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    StatusBar
} from 'react-native';
// import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
// import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import EntypoIcon from "react-native-vector-icons/Entypo";

// import { NavigationContainer } from '@react-navigation/native';


import {useNavigation} from "@react-navigation/native";


// import Week from '../../src/Screens/Week';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import firebase from '../../FireBase';
const db = firebase.firestore();

function M({navigation, route}){
    // console.log(route);
    
    // const navigation = useNavigation();
    const [meal, setMeal] = useState({});
    const [hasData, setHasData] = useState(false);
    // async function getMealInfo(){
    //     db.collection("weeks").doc("week1").get().then(function(doc){
    //         setMeal(doc.data());
    //     })
    //     console.log(meal);
    // }

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

    const onImgPress = () => {
        navigation.navigate("Detail", {day: "Monday"});
    }
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

{/* 
                <TouchableOpacity>
                    <Image source={require("../../assets/meals/Meal_01-02.jpg")}
                    />
                </TouchableOpacity> */}
            </View>
        </ScrollView>
        );
    }else{
        return(null)
    }
}

const Tab = createMaterialTopTabNavigator();


function MainScreen1(){


// initialParams={{info: meal}}
    return(
        <Tab.Navigator>
        <Tab.Screen name="Week 1" component={M} initialParams={{id:1}}/> 
        <Tab.Screen name="Week 2" component={M} initialParams={{id:2}}/>
        {/* <Tab.Screen name="Main" component={M} /> */}
      </Tab.Navigator>

    //   <View>
    //       {topTab}
    //       {bottomTab}
    //   </View>
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
    // group57: {
    //     top:56,
    //     left:0,
    //     width: 103,
    //     height: 498,
    //     position: "absolute"
    // },
    text:{
        color: "rgba(187,61,21,1)",
        fontSize:20,
        paddingHorizontal:15,
        paddingTop:50
    },
    // group57StackStack: {
    //     width: 364,
    //     height: 636, //636
    //     marginTop: 65, //163
    //     marginLeft: 29
    // },
    // group57Stack: {
    //     top: 0,
    //     left: 0,
    //     width: 364,
    //     height: 554,
    //     position: "absolute"
    // },
    // monday: {
    //     color: "rgba(187,61,22,1)",
    //     fontSize: 20,
    //     fontFamily: "impact-regular",
    //     marginLeft: 1
    //   },
    //   tuesday: {
    //     color: "rgba(187,61,22,1)",
    //     fontSize: 20,
    //     fontFamily: "impact-regular",
    //     marginTop: 133,
    //     marginLeft: 1
    //   },
    //   wednesday: {
    //     width: 103,
    //     height: 25,
    //     color: "rgba(187,61,22,1)",
    //     fontSize: 20,
    //     fontFamily: "impact-regular",
    //     marginTop: 142
    //   },
    //   thursday: {
    //     color: "rgba(187,61,22,1)",
    //     fontSize: 20,
    //     fontFamily: "impact-regular",
    //     marginTop: 138,
    //     marginLeft: 1
    //   },
})

export default MainScreen1