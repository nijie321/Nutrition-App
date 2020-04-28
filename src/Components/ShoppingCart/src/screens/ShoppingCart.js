
import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

import firebase from '../../../../../FireBase';
const db = firebase.firestore();

function ShoppingCart(){
    const[qty, setQty] = useState({});
    const[meal, setMeal] = useState([]);
    const [hasData, setHasData] = useState(false);
    const subtotal = useRef(0.0);
    const user = firebase.auth().currentUser;
    
    const navigation = useNavigation();
    // console.log(route.params.update);

    async function getDataFromDB(){
        subtotal.current = 0;
        let data;
        setHasData(false);
        await db.collection('shopping_cart').doc(user.uid).get()
        .then(function(doc){
            data = doc.data();
            // return doc.data();
        })
        .catch((error) => console.log(error))
        return data;
    }

    async function loadData(data,update=false){
        console.log("inside loadData, data=", data);
        if(update){
            subtotal.current = 0.0;
            setMeal([]);
        }
        for (const d in data){
            await db.collection('meals').doc(d).get()
            .then(function(doc){
                const temp = doc.data();
                const name = temp.name;
                const price = temp.price;
                const quantity = parseInt(data[d].qty);
                const pick_up_loc = data[d].pick_up_location;
                const meal_id = d;

                setMeal(prevState => {
                    console.log(prevState);
                    return {...prevState, ...{[d]:{meal_id,name,price,quantity, pick_up_loc}} } })
                    subtotal.current += (parseFloat(price.substr(1)) * quantity);
                })
            .catch((error)=> console.log(error))
        }
    }
    useEffect(() => {
        getDataFromDB().then((data) => loadData(data)).then(() => setHasData(true))
    },[]);
    
    function updateMealInfo(){
        getDataFromDB().then((data) => loadData(data, true)).then(() =>setHasData(true))
    }

    async function updateQty(field_id, new_val){
        let id = field_id;
        await db.collection("shopping_cart").doc(user.uid).update({
            [field_id + '.qty'] : new_val.toString()
        }).then(function(){
            console.log("update shopping cart successfully.");
        }).catch(function(error){
            console.log("error");
        })
    }
    function onMinusPress(meal){
        console.log("inside on minus press");
        const quantity = meal.quantity;
        const new_quantity = quantity - 1;
        if(quantity >= 1){

            console.log("inside if statement (if quantity >= 1)");
            // setMeal({...previous, [meal.meal_id]:{...previous[meal.meal_id],quantity:new_quantity} })
            setMeal(prevState => {
                console.log("printing previous state...");
                console.log(prevState);
                return {...prevState, ...{[meal.meal_id]:{...prevState[meal.meal_id], quantity:new_quantity}}}}
                )
            // console.log("meal location = ", meal[meal.meal_id].pick_up_location);
            updateQty(meal.meal_id, new_quantity);

            subtotal.current -= parseFloat(meal.price.substr(1));
            if(quantity == 1){
                
                const u = async () => {
                    await db.collection('shopping_cart').doc(user.uid).update({
                        [meal.meal_id]: firebase.firestore.FieldValue.delete()
                    })
                }
                u().then(()=>{updateMealInfo()});
            }
        }else{
            console.log("The quantity is already zero.");
        }
    }
    
    

    function onPlusPress(meal){
        // const quantity = qty[meal.meal_id].quantity;
        // const new_quantity = quantity + 1;
        const quantity = meal.quantity;
        const new_quantity = quantity + 1;
        setMeal(prevState => {return {...prevState, ...{[meal.meal_id]:{...prevState[meal.meal_id], quantity:new_quantity}}}})
        // setQty(prevState => {return {...prevState, ...{[meal.meal_id]: {quantity:new_quantity}}} });
        updateQty(meal.meal_id,new_quantity);
        subtotal.current += parseFloat(meal.price.substr(1));
        // console.log(qty);
    }
    
    function AddRemoveBTNs({meal}){
        return(
            <View style={styles.quantity_btn_container}>
                {/* remove quantity */}
                <Button transparent rounded
                    style={styles.remove_btn}
                    onPress={async () => {await onMinusPress(meal)}}
                    >
                <Icon type="AntDesign" name="minuscircle" style={styles.remove_btn} />
                </Button>
                <Text style={{fontSize:wp("3%"), alignSelf:"center", paddingHorizontal:5, fontWeight:"bold" }}>Quantity: { meal.quantity }</Text>
                {/* add quantity */}
                <Button transparent rounded
                    style={styles.remove_btn}
                    onPress={() => {onPlusPress(meal)}}
                    >
                <Icon type="AntDesign" name="pluscircle" style={styles.add_btn} />
                </Button>
            </View>
        )
    }

    function determineImg(meal_id){
        switch(meal_id){
          case "Meal 1": return require("../../../../../assets/meals/meal1.jpg"); break;
          case "Meal 2": return require("../../../../../assets/meals/meal2.jpg"); break;
          case "Meal 3": return require("../../../../../assets/meals/meal3.jpg"); break;
          case "Meal 4": return require("../../../../../assets/meals/meal4.jpg"); break;
          case "Meal 5": return require("../../../../../assets/meals/meal5.jpg"); break;
          case "Meal 6": return require("../../../../../assets/meals/meal6.jpg"); break;
          case "Meal 7": return require("../../../../../assets/meals/meal7.jpg"); break;
          case "Meal 8": return require("../../../../../assets/meals/meal8.jpg"); break;
        }
      }
    
    function MealInfoContainer({meal}){
        console.log("inside meal info container");
        console.log(meal);
        return(
            <View style={styles.meal_info_container}>
                <Image style={styles.img} resizeMode="cover" source={determineImg(meal.meal_id)}/>
                <Text>{meal.name}</Text> 
                <View style={{position:"absolute", right:wp("7%"), marginTop:hp("2%")}}>
                    <AddRemoveBTNs meal={meal}/>
                    <Price price={parseFloat( meal.price.substr(1) * meal.quantity ).toFixed(2)} />
                </View>
            </View>
        )
        
    }
    
    function Price({price}){
        return(
            <View>
                <Text style={{fontSize:wp("3%"), fontWeight:"bold", alignSelf:"center"}}>
                    Price: ${price}
                </Text>
            </View>
        )
        
    }

    function Total(){
        return(
            <View style={{flexDirection:"column", justifyContent:"space-between"}}>
                <Text style={styles.price}>Subtotal: {"\t$"+`${subtotal.current.toFixed(2)}`}</Text> 
                {/* ${subtotal.current.toFixed(2) */}
                <Text style={styles.price}>Tax: {"\t\t$"+`${(subtotal.current * .15).toFixed(2)}`}</Text>
                <Text style={styles.price}>Total: {"\t\t$" + `${(subtotal.current * 1.15).toFixed(2)}`}</Text>
            </View>
        )
    }
    function Payment(){
        return(
            <View>
                <MaterialIcons.Button name="payment" color="#007AFF" backgroundColor="transparent" underlayColor="green" size={wp("10%")}
                    onPress={()=>{ navigation.navigate("Payment", {data:meal})}}
                />
            </View>
        )
    }

    const createMealInfoContainer = () => {
        console.log("inside create meal coninters");

        let container = [];

        for(const m in meal){
            container.push(<MealInfoContainer meal={meal[m]} key={m}/>)
        }
        return container;
    }

    return(
        <ScrollView>
        <View style={styles.container}>
            {hasData?createMealInfoContainer():null}
            <View style={{width:wp("10%")}}>
                <FontAwesome.Button name="refresh" backgroundColor="transparent" size={wp("5%")} underlayColor="red" color="#007AFF" onPress={updateMealInfo}/>
            </View>

            <View style={{marginTop:hp("5%") }}>

                {/* <View style={{marginRight:wp("5%")}}>
                    
                </View> */}
                <Total />
                <Payment />
            </View>
        </View>
</ScrollView>
    )
    // }else{return null};
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
        marginHorizontal:wp("3%"),
        // marginVertical: hp("2%"),
        // borderColor:"red",
        // borderWidth:1,
        marginBottom:hp("1%")
    },
    img:{
        height:hp("12%"),
        width:wp("30%"),
    },
    price:{
        marginBottom:hp("1%")
    },
    payment:{
        position:"absolute",
        bottom:hp("5%"),
        right:wp("5%")
    }
})
export default ShoppingCart