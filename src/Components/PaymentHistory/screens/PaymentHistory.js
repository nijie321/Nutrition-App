import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button,Accordion, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import firebase from '../../../../FireBase';
const db = firebase.firestore();


const user = firebase.auth().currentUser;
function OrderContainer(){
    const [hasData, setHasData] = useState(false);
    const [orderData, setOrderdata] = useState({});
    useEffect(() => {
        const getData = async () =>{
            await db.collection('order').doc(user.uid).get()
            .then(function(doc){
                console.log("order data====", doc.data());
                setOrderdata(doc.data())
            })
        }
        
        getData().then(() => {setHasData(true);})
    },[]);
    
    async function updateScreen(){
        await db.collection('order').doc(user.uid).get()
        .then((doc)=>{
            // setHasData(false);
            setOrderdata(doc.data())
        })
    }
    async function cancelOrder(order_id){
        
        await db.collection('order').doc(user.uid).update({
            [order_id]: firebase.firestore.FieldValue.delete()
        })
        .then(() => {
            setHasData(false);
            console.log("deleted the order successfully.");
        })
        .then(()=>{
            updateScreen().then(()=>{setHasData(true)});
        })
        .catch((err)=> {
            console.log("Error:", err);
        })
    }
    function _renderHeader(item, expanded) {
        return (
          <View style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: "#A9DAD6" }}>
          <Text style={{ fontWeight: "600" }}>
              {" "}{item.order_date}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
          </View>
        );
      }
    function _renderContent(item) {
        let total = 0.0;
        console.log("item=", item);
        console.log('item_key=', Object.keys(item));
        return (
            <View>
          <Text
            style={{
              backgroundColor: "#e3f1f1",
              padding: 10,
              fontStyle: "italic",
            }}
          >
            {
            Object.keys(item.meals).map(k => {
                total += item.meals[k].quantity * parseFloat(item.meals[k].price.substr(1))
                return item.meals[k].name + "\t\tqty:" + item.meals[k].quantity + "\tunit price: " + item.meals[k].price + "\n"
                })   
            }
            Order Total: {total.toFixed(2)}
          </Text>
          <View style={{width:wp("10%"), alignContent:"center", backgroundColor:"#e3f1f1"}}>
            <Button danger onPress={()=>{cancelOrder(item.key)}}><Text style={{textAlign:"center"}}>Cancel</Text></Button>
          </View>
          </View>
        );
      }

    function generateDataArray(){

        let array = [];

        if(hasData){
            console.log("inside generate data array");
            console.log("data=",orderData);
            // console.log("data key = ", Object.keys(orderData));

            for(const key in orderData){
                console.log("key=",key);
                let order_date = orderData[key].order_date.toDate().toDateString();
                let meals = orderData[key].meals;
                array.push({order_date,meals,key});
            }
        }

        return array;
    }
    const dataArray = generateDataArray();

        return(
            <View style={styles.order_container}>
                {hasData? 
                
                    <Accordion
                    dataArray={dataArray}
                    animation={true}
                    expanded={true}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    />
                :
                null
                }
                
                
            </View>
        )
    }


function PaymentHistory(){
    

    // console.log(orderData);

    return(
        <View>
        {/* <Text>{Object.keys(orderData['meal'])}</Text> */}
        <OrderContainer />
        {/* <OrderContainer />
        <OrderContainer /> */}
            {/* <Button onPress={()=>{updateScreen()}}><Text>update</Text></Button> */}
        </View>
    )
    
  
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column"
    },
    detail_btn:{
        width:wp("15%"),
        textAlign:"center"
    },
    order_container:{
        flexDirection:"row",
        marginVertical:hp("1%"),
    }
})

export default PaymentHistory