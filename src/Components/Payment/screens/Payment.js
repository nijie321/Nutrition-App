import React, { useState } from 'react';
import { Container, Text,Input,Item } from 'native-base';
import {StyleSheet, View, ScrollView,Button, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

import firebase from '../../../../FireBase';

import { CreditCardInput } from 'react-native-credit-card-input';

import {useNavigation} from '@react-navigation/native';

function Payment({route}){
    const navigation = useNavigation();
    const STRIPE_PUBLISHABLE_KEY = 'pk_test_nNf99ywU1zbOU8EDD6oUUoZ100WIQKKHsT'; 
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const [cardData, setCardData] = useState({});
    const [notValid, setNotValid] = useState(true);

    function generateOrderID(){
        return Math.random().toString(36).substring(7);
    };

    async function deleteFromDB(){
        for(let meal in route.params.mealNames){
            await db.collection("shopping_cart").doc(user.uid).update({
                [meal]: firebase.firestore.FieldValue.delete()
            })
            .then(() => console.log("delete successfully"))
            .catch(err => console.log(err));
        }
    }
    function SubmitOrder(){
        const mealData = _ => {
            const temp = {};

            for(let key in route.params.data){
                temp[key] = {
                    name: route.params.data[key].name,
                    price: route.params.data[key].price,
                    quantity: route.params.data[key].quantity,
                }
            }
            return temp;
        }
        let order_id = generateOrderID();
        const docData = {
            [order_id]:{
            "order_date": new Date(),
            "meals": mealData(),
            "status":"processing", // ["processing", "confirmed", "cancelled"]
            "can_cancel":true,
            }
        }
        db.collection("order").doc(user.uid).set(docData, {merge:true})
        .then(() => {Alert.alert("Payment went through successfully.")})
        .then(() => deleteFromDB())
        .then(() => navigation.navigate("History"))
        // .then(() => navigation.navigate("Confirm", {order:docData, id:order_id,total:route.params.total}))
        .catch((err) => {console.log(err)})
    }
    

    const _onChange = form => (form.valid)?  setNotValid(false) : setNotValid(true)

    const getCreditCardToken = async () => {
        const creditCardData = cardData;
        const card = {
            'card[number]': creditCardData.values.number.replace(/ /g, ''),
            'card[exp_month]': creditCardData.values.expiry.split('/')[0],
            'card[exp_year]': creditCardData.values.expiry.split('/')[1],
            'card[cvc]': creditCardData.values.cvc
        };

        let data = await fetch('https://api.stripe.com/v1/tokens', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
            },
            method: 'post',
            body: Object.keys(card).map(key => key + '=' + card[key]).join('&')
        },
        )
        .then(response => response.json())
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data);
        }
    }

    
    return(
        <View>
            <View>
                <CreditCardInput allowScroll={true} onChange={(data) => {setCardData(data); _onChange(data)} } />
            </View>
            <View> 
                <Button title="Confirm Order" disabled={notValid} onPress={() => {getCreditCardToken(); SubmitOrder()}} />
                {/* <Button title="Review Meals" disabled={notValid} onPress={() =>getCreditCardToken()} />
                <Button title="Pay" onPress={() => SubmitOrder()} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
    },
    card:{
        marginHorizontal:wp("5%"),
        marginVertical:hp("5%")
    },
    text_header:{
        fontSize:wp("2%"),
        fontWeight:"bold",
        marginBottom:hp("1%")
    },

})

export default Payment;