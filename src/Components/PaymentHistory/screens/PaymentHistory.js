import React, { useState, useEffect, useRef} from 'react';
import { Container, Content ,Text, Button,Accordion, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import firebase from '../../../../FireBase';
const db = firebase.firestore();

function OrderContainer(){
    const user = firebase.auth().currentUser;
    const [hasData, setHasData] = useState(false);
    const [orderData, setOrderdata] = useState({});
    useEffect(() => {
        const getData = async () =>{
            await db.collection('order').doc(user.uid).get()
            .then(function(doc){
                console.log(doc.data());
                setOrderdata(doc.data())
            })
        }
        
        getData().then(() => {setHasData(true);})
    },[]);
    
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
        return (
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
        );
      }
    function getMealNames(meal){
        for(let data in orderData.meal){

        }
    }
    function generateDataArray(){
        let array = [];

        if(hasData){
            console.log("inside generate data array");
            console.log("data=",orderData);
            console.log("data key = ", Object.keys(orderData));

            for(const key in orderData){
                console.log("key=",key);
                let order_date = orderData[key].order_date.toDate().toDateString();
                let meals = orderData[key].meals;
                array.push({order_date,meals});
            }
            // const k = Object.keys(orderData)[0];
            // let order_date = orderData[k].order_date.toDate().toDateString();
            // let meals = orderData[k].meals;
            // array.push({order_date, meals});
        }

        return array;
    }
    const dataArray = generateDataArray();

    //   const dataArray = [
    //     { order_date: hasData? orderData.order_date.toDate().toDateString():"", content: {"meal2=3":1, "meal2":2} },
    //     // { order_date: "Second Elements", content: {"meal1":1, "meal2":2} }, //content: "Lorem ipsum dolor sit amet"
    //     // { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
    //   ];

        return(
            <View style={styles.order_container}>
                {/* <Text>{Object.keys(orderData)}</Text> */}

                {/* <Button onPress={() => {console.log(generateDataArray())}}>
                    <Text>click me</Text>
                </Button> */}
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