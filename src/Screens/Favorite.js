import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../FireBase';
const db = firebase.firestore();
import { parse } from 'url';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { preventAutoHide } from 'expo/build/launch/SplashScreen';
//const db = firebase.firestore();

function Favorite({route}){
    //const[qty, setQty] = useState({});
    const[meal, setMeal] = useState([]);
    const [hasData, setHasData] = useState(false);
    // const[subtotal, setSubtotal] = useState(0.0);
    //const subtotal = useRef(0.0);
    const user = firebase.auth().currentUser;
    
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
    }
    // useEffect(() => {
    //     subtotal.current = 0;
    //     const getData = async ()=> {
            
    //         await db.collection('shopping_cart').doc(user.uid).get()
    //         .then(function(doc){
    //             return doc.data();
    //             // setMetaData(doc.data());
    //         })
    //         .then(async function(data){
    //             for(const d in data){
    //                 // setQty(parseInt(data[d]));
    //                 await db.collection('meals').doc(d).get()
    //                 .then(function(doc){
    //                     const temp = doc.data();
    //                     const name = temp.name;
    //                     const price = temp.price;
    //                     const quantity = parseInt(data[d]);
    //                     const meal_id = d;
    //                     setMeal(prevState => {
    //                         console.log(prevState);
    //                         return {...prevState, ...{[d]:{meal_id,name,price}} } })
    //                     setQty(prevState => {
    //                         return {...prevState, ...{[d]:{quantity}}}
    //                     })
    //                     // calculate initial subtotal
    //                     subtotal.current += (parseFloat(price.substr(1)) * quantity);
    //                     // subtotal.current.toFixed(2);
    //                 })
    //             }
    //         })
    //     }

    //    getData().then(() => {setHasData(true);})
    // },[route.params.id]);
    

    function displayMealInfo(){
        console.log("-----------------------------------");
        console.log(subtotal);
        // console.log(qty);
        // console.log(meal);
        
    }

    async function updateQty(field_id, new_val){
        await db.collection("favorite").doc(user.uid).update({
            [field_id]: new_val.toString()
        }).then(function(){
            console.log("update favorite successfully.");
        }).catch(function(error){
            console.log("error");
        })
    }

  

   
    
    

    function determineImg(meal_id){
        switch(meal_id){
          case "Meal 1": return require("../../assets/meals/meal1.jpg"); break;
          case "Meal 2": return require("../../assets/meals/meal2.jpg"); break;
          case "Meal 3": return require("../../assets/meals/meal3.jpg"); break;
          case "Meal 4": return require("../../assets/meals/meal4.jpg"); break;
          case "Meal 5": return require("../../assets/meals/meal5.jpg"); break;
          case "Meal 6": return require("../../assets/meals/meal6.jpg"); break;
          case "Meal 7": return require("../../assets/meals/meal7.jpg"); break;
          case "Meal 8": return require("../../assets/meals/meal8.jpg"); break;
        }
      }
    
    function MealInfoContainer({meal}){
        return(
            <View style={styles.meal_info_container}>
                <Image style={styles.img} resizeMode="cover" source={determineImg(meal.meal_id)}/>
                <Text>{meal.name}</Text> 
                
            </View>
        )
        
    }
    
    // function Price({price}){
    //     return(
    //         <View>
    //             <Text style={{fontSize:wp("3%"), fontWeight:"bold", alignSelf:"center"}}>
    //                 Price: ${price}
    //             </Text>
    //         </View>
    //     )
        
    // }

    // function Total(){
    //     // const subtotal = 
    //     return(
    //         <View>
    //             <Text>Subtotal: ${subtotal.current}</Text>
    //         </View>
    //     )
    // }
    // function Payment(){
    //     return(
    //         <View>
    //             <MaterialIcons.Button name="payment" color="#007AFF" backgroundColor="transparent" underlayColor="green" size={wp("20%")}
    //                 onPress={()=>{console.log("pressed");}}
    //             />
    //         </View>
    //     )
    // }
    
    // // if(hasData){
    // const createMealInfoContainer = () => {
    //     let container = [];

    //     for(const m in meal){
    //         container.push(<MealInfoContainer meal={meal[m]} key={m}/>)
    //     }
    //     return container;
    // }
    // return(
    //     <View style={styles.container}>
    //         <Button rounded success 
    //                 style={styles.checkout_btn}
    //                 onPress={displayMealInfo}
    //                 >
    //                 <Text>Check Out!</Text>
    //         </Button>
                
    //             {hasData?createMealInfoContainer():null}
    //         <View style={{alignItems:"center",flexDirection:"row", position:"absolute", bottom:hp("1%")}}>
    //             <Total />
    //             <Payment />
    //         </View>
    //     </View>
    // )
    // // }else{return null};
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    checkout_btn:{
        marginTop:20,
        width:wp('50%'),
    },
    quantity_input:{
        width:wp("5%"),
        height:hp("5%"),
        fontSize:wp("2%"),
        borderWidth:1
    },
    remove_btn:{
        color:"red",
    },
    add_btn:{
        color:"#2f71e9"
    },
    quantity_btn_container:{
        flexDirection:"row",
    },
    meal_info_container:{
        flexDirection:"row",
        marginLeft:wp("5%"),
        borderColor:"red",
        borderWidth:1,
    },
    img:{
        height:hp("12%"),
        width:wp("30%"),
    }
})
export default Favorite