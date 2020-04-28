import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text,Input,Item,Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';


import uuid from 'react-native-uuid';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// import { useTheme } from '@react-navigation/native';

import firebase from '../../../../FireBase';

function Payment({route, navigation}){
    const[boxOnFocus, setBoxOnFocus] = useState(false);

    const INITIALBOXESFOCUS = {
        "card-number":false,
        "card-month":false,
        "card-year":false,
        "card-name":false,
        "card-cvv":false,
    }
    const[boxesOnFocus, setBoxesOnFocus] = useState(INITIALBOXESFOCUS);
    console.log("route=",route);
    console.log("route params data=",route.params.data);
    console.log("navigation=",navigation)
    
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();

    function SubmitOrder(){
        const mealData = _ => {
            const temp = {};

            for(let key in route.params.data){
                temp[key] = {
                    name: route.params.data[key].name,
                    price: route.params.data[key].price,
                    quantity: route.params.data[key].quantity,
                    address: route.params.data[key].pick_up_loc
                }
            }
            return temp;
        }
        const id=uuid.v1();
        const docData = {
            [id]:{
            "order_date": new Date(),
            "meals": mealData(),
            "status":"processing", // ["processing", "confirmed", "cancelled"]
            "can_cancel":true,
            }
        }

        db.collection("order").doc(user.uid).update(docData)
        .then(()=>{
            Alert.alert("New Order Placed Successfully.");
        })
        .catch((err)=>{
            console.log(err);
            console.log("attemping to set a new documentation in the databse");
            db.collection("order").doc(user.uid).set(docData)
            .then(()=>{
                console.log("Order Placed Successfully.");
            })
        })
         navigation.navigate("Confirm",{order:docData,id:id,total:route.params.total});
        // db.collection("order").doc(user.uid).set(docData)
        // .then(() => {Alert.alert("Order Placed Successfully.");})
        // .then(() => {
        //     navigation.dispatch(
        //         CommonActions.reset({
        //           index:0,
        //           routes:[
        //             {name: "Home"}
        //           ]
        //         })
        //         )
        // })
        // .catch((err) => {console.log("something went wrong. error code:", err);})

    }
    return(
        <ScrollView>
        <Container>
            <View style={styles.card}>
                <Text style={styles.text_header}>Card Number</Text>
                <Item style={{borderColor: boxesOnFocus["card-number"]? "red":"black" }} >
                    <Entypo name="credit-card" size={wp("3%")}/>
                    {/* <Icon active name='home' /> */}
                    <Input onFocus={() => {setBoxesOnFocus({...INITIALBOXESFOCUS, "card-number":true})}}/>
                </Item>
            </View>
            
            <View style={styles.card}>
                <Text style={styles.text_header}>Valid Until</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    {/* <TextInput style={{borderColor:"red", borderWidth:1, width:wp("5%") }}/>
                    <TextInput style={{borderColor:"red", borderWidth:1}} />  */}
                    <Item style={{width:wp("40%"), borderColor: boxesOnFocus["card-month"]? "red":"black" }}>
                        <Input onFocus={() => { setBoxesOnFocus({...INITIALBOXESFOCUS, "card-month":true})}} placeholder="Month"/>
                    </Item>
                    
                    <Item style={{width:wp("40%"), borderColor: boxesOnFocus["card-year"]? "red":"black"}}>
                        <Input onFocus={prevState => { setBoxesOnFocus({...INITIALBOXESFOCUS, "card-year":true})} } placeholder="Year"/>
                        
                    </Item>
                </View>

            </View>

            <View style={{flexDirection:"row"}}>
                <View style={styles.card}>
                    <Text style={styles.text_header}>Card Holder's Name</Text>
                    <Item style={{width:wp("20%"), borderColor: boxesOnFocus["card-name"]? "red":"black"}}>
                            <Input onFocus={prevState => { setBoxesOnFocus({...INITIALBOXESFOCUS, "card-name":true})} }/>
                    </Item>
                </View>

                <View style={styles.card}>
                    <Text style={styles.text_header}>CVV</Text>
                    <Item style={{width:wp("10%"), borderColor: boxesOnFocus["card-cvv"]? "red":"black"}}>
                            <Input onFocus={prevState => { setBoxesOnFocus({...INITIALBOXESFOCUS, "card-cvv":true})} }/>
                            
                    </Item>
                </View>
            </View>

            <Button success onPress={SubmitOrder} style={{width:wp("10%"), position:"absolute", bottom:hp("20%"), right:wp("10%"), justifyContent:"center"}}>
                <Text style={{textAlign:"center"}}> Pay </Text>
            </Button>
            
        </Container>
        </ScrollView>
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