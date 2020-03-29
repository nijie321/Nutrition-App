import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import firebase from '../../../../../FireBase';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
const db = firebase.firestore();

function ShoppingCart({route}){

    const[qty, setQty] = useState({});
    const[price,setPrice] = useState(2.5);
    const[metadata, setMetaData] = useState();
    // const[mealImg, setMealImg] = useState([]);
    const[meal, setMeal] = useState([]);
    // const meal = {};
    const[mealCount, setMealCount] = useState(0);
    var mealImg = [];
    
    const [hasData, setHasData] = useState(false);
    
    // const navigaion = useNavigation();
    
    function usePrevious(value){
        const ref = useRef();
        ref.current = value;
        return ref.current;
    }

    
    async function getMeta(){
        
    }

    async function getData(id){
        for(const d in metadata){
            await db.collection('meals').doc(id).get()
            .then(function(doc){
                const temp = doc.data();
                const name = temp.name;
                const price = temp.price;
                setMeal(prevState => {
                    console.log(prevState);
                    return {...prevState, ...{[id]:{name,price}} } })
            })
        }

        await db.collection('meals').doc(id)
    }
    
    async function fetchMeal(id){
        await db.collection('meals').doc(id).get()
        .then(function(doc){
            const temp = doc.data();
            const name = temp.name;
            const price = temp.price;
            setMeal(prevState => {
                return {...prevState, ...{[d]:{name,price}}}
            })
        })
    }

    useEffect(() => {

        const getData = async ()=> {
            const user = firebase.auth().currentUser;
            await db.collection('shopping_cart').doc(user.uid).get()
            .then(function(doc){
                return doc.data();
                // setMetaData(doc.data());
            })
            .then(async function(data){
                for(const d in data){
                    // setQty(parseInt(data[d]));
                    await db.collection('meals').doc(d).get()
                    .then(function(doc){
                        const temp = doc.data();
                        const name = temp.name;
                        const price = temp.price;
                        const quantity = parseInt(data[d]);
                        const meal_id = d;
                        setMeal(prevState => {
                            console.log(prevState);
                            return {...prevState, ...{[d]:{meal_id,name,price,quantity}} } })
                        setQty(prevState => {
                            return {...prevState, ...{[d]:{quantity}}}
                        })
                    })
                }
                // setHasData(true);
            })


            // .then(() => {setHasData(true);});
        }

        // const getData = async () => {
        //     for(const id in route.params.id){
        //         fetchMeal(id);
        //     }
        // }


        // fetchMeal(route.params.id[0]).then(() => {setHasData(true);})
        getData().then(() => {setHasData(true);})
        // setHasData(true);
    },[route.params.id]);
    

    function displayMealInfo(){
        console.log("-----------------------------------");
        console.log(qty);
        // console.log(route.params.id);
        // console.log(qty);

        for(const m in meal){
            console.log(m);
        }
    }
    function onMinusPress(meal){
        // if(quantity >= 1){
        //     // setQty(quantity-1);    
        //     quantity -= 1;        
        // }else{
        //     console.log("the quantity is already zero.");
        // }
        // console.log("test");

        const quantity = qty[meal.meal_id].quantity;
        if(quantity >= 1){
            setQty(prevState => {return {...prevState, ...{[meal.meal_id]: {quantity: quantity - 1}}}})
        }else{
            console.log("The quantity is already zero.");
        }
    }

    function onPlusPress(meal){
        // setQty(quantity + 1);
        // console.log(meal);
        
        // const key = Object.keys(meal)[0];
        // const meal_id = meal['meal_id'];
        // console.log(meal.quantity);
        // console.log("hello");
        // console.log(qty[meal.meal_id]);
        const quantity = qty[meal.meal_id].quantity;
        // setMeal(prevState => {return {...prevState, ...{id:1}}})
        // setMeal(prevState => (console.log(prevState)));
        // setMeal(prevState => ({...prevState, meal_id:{...prevState.meal_id, quantity: [prevState.meal_id.quantity]+1} }))
        // setMeal(prevState => ({...prevState, key:{...prevState.key,quantity: prevState.key.quantity+1 } }));
        setQty(prevState => {return {...prevState, ...{[meal.meal_id]: {quantity:quantity+1}}} });
        console.log(qty);
    }
    
    function AddRemoveBTNs({meal}){
        return(
            <View style={styles.quantity_btn_container}>
                {/* remove quantity */}
                <Button transparent rounded
                    style={styles.remove_btn}
                    onPress={() => {onMinusPress(meal)}}
                    >
                <Icon type="AntDesign" name="minuscircle" style={styles.remove_btn} />
                </Button>
                <Text style={{fontSize:wp("3%"), alignSelf:"center", paddingHorizontal:5, fontWeight:"bold" }}>Quantity: { qty[meal.meal_id].quantity }</Text>
                {/* add quantity */}
                <Button transparent rounded
                    style={styles.remove_btn}
                    onPress={() => {
                        onPlusPress(meal)
                        // console.log(Object.keys(meal)[0]);
                        // console.log(meal);
                        // meal.quantity += 1;

                        // const meal_id = meal['meal_id'];
                        // setMeal(prevState => ({
                        //     ...prevState,
                        //     [meal.meal_id]: {...prevState.meal_id, quantity: prevState.meal.meal_id.quantity+1}
                        // }))
                    }}
                    >
                <Icon type="AntDesign" name="pluscircle" style={styles.add_btn} />
                </Button>
            </View>
        )
    }
    
    function MealInfoContainer({meal}){
        return(
            <View style={styles.meal_info_container}>
                <Image style={styles.img} resizeMode="cover" source={require("../../../../../assets/meals/meal1.jpg")}/>
                <Text>{meal.name}</Text> 
                {/* meal['Meal 1']['name'] */}
                <View style={{position:"absolute", right:wp("7%"), marginTop:hp("2%")}}>
                    <AddRemoveBTNs meal={meal}/>
                    <Price price={parseFloat( meal.price.substr(1) * qty[meal.meal_id].quantity ).toFixed(2)} />
                    {/* meal['Meal 1']['price'].substr(1) * qty */}
                </View>
            </View>
        )
        
    }
    
    function Price({price}){
        return(
            <View>
                
                <Text style={{fontSize:wp("3%"), fontWeight:"bold", alignSelf:"center"}}>
                    Price: ${price}
                    {/* Price: ${parseFloat(meal['Meal 1']['price'].substr(1)) * qty} */}
                    {/* Price: ${meal['Meal 1']['price'].slice(1, -1) * qty} */}
                </Text>
                {/* <Text>{meal['Meal 3']["name"]}</Text> */}
                
            </View>
        )
        
    }
    
    // if(hasData){
    const createMealInfoContainer = () => {
        let container = [];

        for(const m in meal){
            container.push(<MealInfoContainer meal={meal[m]} key={m}/>)
        }
        return container;
    }
    return(
        <Container style={styles.container}>
            {/* <Header /> */}
            <Content>
                <Button rounded success 
                    style={styles.checkout_btn}
                    onPress={displayMealInfo}
                    >
                    <Text>Check Out!</Text>
                </Button>
                
                {hasData?createMealInfoContainer():null}

                    
            </Content>

            

        </Container>
    )
    // }else{return null};
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignSelf:"center"
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
        // alignContent:"flex-end",
        // position:"absolute",
        // right:wp("6%"),
        // marginLeft: wp("60%")
    },
    meal_info_container:{
        // alignItems:"center"
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
export default ShoppingCart