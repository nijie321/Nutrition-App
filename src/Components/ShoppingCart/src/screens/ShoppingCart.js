
import React, { useState, useEffect, useRef} from 'react';
import { Text, Button, Icon } from 'native-base';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {useNavigation, useRoute } from '@react-navigation/native';

import firebase from '../../../../../FireBase';
const db = firebase.firestore();

function ShoppingCart(){
    const[meal, setMeal] = useState([]);
    const [hasData, setHasData] = useState(false);
    const subtotal = useRef(0.0);
    const user = firebase.auth().currentUser;
    const [mealNames, setMealNames]  = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const [meatless, setMeatless] = useState("false");
    const setItems = route.params.setItems;
    async function getDataFromDB(){
        subtotal.current = 0;
        let data;
        setHasData(false);
        await db.collection('shopping_cart').doc(user.uid).get()
        .then(function(doc){
            data = doc.data();
            setMealNames(data);
        })
        .catch((error) => console.log(error))
        return data;
    }
    async function loadData(data,update=false){
        if(update){
            subtotal.current = 0.0;
            setMeal([]);
        }
        let totalQty = 0;
        for (const d in data){
            await db.collection('meals').doc(d).get()
            .then(function(doc){
                const temp = doc.data();
                const name = temp.name;
                const price = temp.price;
                const quantity = parseInt(data[d].qty);
                totalQty += quantity;
                const pick_up_loc = data[d].pick_up_location;
                const meal_id = d;
                const meat_less = data[d].meatless;
                setMeatless(meat_less);
                setMeal(prevState => {
                    console.log(prevState);
                    return {...prevState, ...{[d]:{meal_id,name,price,quantity, pick_up_loc, meatless}} } })
                    subtotal.current += (parseFloat(price.substr(1)) * quantity);
                })
            .catch((error)=> console.log(error))
        }
        setItems(totalQty);
    }
    useEffect(() => {
        getDataFromDB().then((data) => loadData(data)).then(() => setHasData(true))
    },[]);
    
    function updateMealInfo(){
        getDataFromDB().then((data) => loadData(data, true)).then(() =>setHasData(true))
    }

    async function updateQty(field_id, new_val, update="add"){
        // let id = field_id;
        await db.collection("shopping_cart").doc(user.uid).update({
            [field_id + '.qty'] : new_val.toString()
        })
        .then(function(){
            console.log("update shopping cart successfully.");
        })
        .then(_ => {
            if(update === "add"){
                setItems(prevState => {return prevState + 1})
            }else if(update === "subtract"){
                setItems(prevState => {return prevState - 1})
            }else{
                console.log("invalid update method");
            }
        })
        .catch(function(error){
            console.log(error);
        })
        
    }
    function onMinusPress(meal){
        const quantity = meal.quantity;
        const new_quantity = quantity - 1;
        // setItems(new_quantity);
        if(quantity >= 1){
            setMeal(prevState => {
                return {...prevState, ...{[meal.meal_id]:{...prevState[meal.meal_id], quantity:new_quantity}}}}
                )
            updateQty(meal.meal_id, new_quantity, "subtract");

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
        const quantity = meal.quantity;
        const new_quantity = quantity + 1;
        // setItems(new_quantity);
        setMeal(prevState => {return {...prevState, ...{[meal.meal_id]:{...prevState[meal.meal_id], quantity:new_quantity}}}})
        updateQty(meal.meal_id,new_quantity);
        subtotal.current += parseFloat(meal.price.substr(1));
    }
    
    function AddRemoveBTNs({meal}){
        return(
            <View style={styles.quantity_btn_container}>
                <Button transparent rounded
                    style={styles.remove_btn}
                    onPress={async () => {await onMinusPress(meal)}}
                    >
                <Icon type="AntDesign" name="minuscircle" style={styles.remove_btn} />
                </Button>
                <Text style={{fontSize:wp("3%"), alignSelf:"center", paddingHorizontal:5, fontWeight:"bold" }}>Quantity: { meal.quantity }</Text>
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
                <Text style={styles.price}>Tax: {"\t\t$"+`${(subtotal.current * .15).toFixed(2)}`}</Text>
                <Text style={styles.price}>Total: {"\t\t$" + `${(subtotal.current * 1.15).toFixed(2)}`}</Text>
            </View>
        )
    }

    const createMealInfoContainer = () => {
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
        </View>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 3,
                marginBottom: 10,
            }}
        />
        <View style={{alignSelf:"center", flexDirection:"row"}}>
            <View style={{flexDirection:"column", marginHorizontal:wp("5%")}}>
                <Button transparent onPress={() => updateMealInfo()}>
                    <Text>REFRESH</Text>
                </Button>
                <Button transparent onPress={()=>{ 
                    navigation.navigate("Payment", {data:meal, mealNames: mealNames, meatless:meatless})}} >
                    <Text>Pay Now</Text>
                </Button>
            </View>
            <Total />
        </View>
</ScrollView>
    )
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