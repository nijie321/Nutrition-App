import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

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
            <View style={{flexDirection:"row", padding:5 ,paddingLeft:wp("1.2%"), paddingTop:hp("1.11%")}}>
                    <Text style={styles.text}>Monday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:wp("2.4%")}}
                    >
                        
                       <View style={{height:hp("16.5%"), width:wp("31.4%"), marginLeft:wp("4%")}}>
                            <TouchableOpacity style={{height:hp("13.05%"), width:wp("31.4%")}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 1"})}}
                            >
                                <Image source={require("../../assets/meals/meal1.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal1.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal1.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("2.4%")}}>
                            <TouchableOpacity style={{height:hp("13.05%"), width:wp("31.4%")}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 2"})}}
                            >
                                <Image source={require("../../assets/meals/meal2.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
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

            <View style={{flexDirection:"row", padding:5 ,paddingLeft:wp("1.2%"), paddingTop:hp("2.5%")}}>
                    <Text style={styles.text}>Tuesday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:wp("2.4%")}}
                    >
                        
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("3.3%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 3"})}}
                            >
                                <Image source={require("../../assets/meals/meal3.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal3.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal3.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("2.4%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                                onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 4"})}}
                            >
                                <Image source={require("../../assets/meals/meal4.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
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

            <View style={{flexDirection:"row", padding:5, paddingLeft:wp("1.2%"), paddingTop:hp("0%")}}>
                    <Text style={styles.text}>Wednesday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft:0}}
                    >
                        
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("0%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 5"})}}
                            >
                                <Image source={require("../../assets/meals/meal5.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal5.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal5.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("2.4%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 6"})}}
                            >
                                <Image source={require("../../assets/meals/meal6.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
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



                <View style={{flexDirection:"row", padding:5,paddingLeft:wp("1.2%"), paddingTop:hp("1.11%")}}>
                    <Text style={styles.text}>Thursday</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{paddingLeft:0}}
                    >
                        
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("4%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 7"})}}
                            >
                                <Image source={require("../../assets/meals/meal7.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
                                    }}
                                /> 
                            </TouchableOpacity>
                            <View style={{flexDirection:"row"}}>
                            <Text style={{flexWrap:'wrap',fontSize:10,fontFamily:"roboto-500", flex:6}} numberOfLines={2}>{meal.meal7.name}</Text>
                            <Text style={{fontFamily:"impact-regular",margin:5, fontSize:15, fontWeight:"bold", color:"rgba(187,61,22,1)"}}>{meal.meal7.price}</Text>
                            </View>
                       </View>
                       
                       <View style={{height:hp("16.18%"), width:wp("31.4%"), marginLeft:wp("2.4%")}}>
                            <TouchableOpacity style={{height:wp("20%"), width:wp("31.4%")}}
                            onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 8"})}}
                            >
                                <Image source={require("../../assets/meals/meal8.jpg")}
                                    style={{flex:1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'cover',
                                        paddingLeft: wp("2.4%"),
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
        padding:16.18,
        paddingTop: 10,
        paddingLeft:wp("1.2%")
        //padding:16.18,paddingLeft:wp("1.2"), paddingTop:hp("1.11")
        // top:60
    }, 
    text:{
        color: "rgba(187,61,21,1)",
        fontSize:15,
        paddingHorizontal:13.05,
        paddingTop:hp("5.58%")
    },
})

export default MainScreen1