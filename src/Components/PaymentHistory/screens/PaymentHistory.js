import React, { useState, useEffect} from 'react';
import { Text,Accordion, Icon , Button} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import firebase from '../../../../FireBase';
const db = firebase.firestore();

function OrderContainer(){
    const [hasData, setHasData] = useState(false);
    const [orderData, setOrderdata] = useState({});
    const user = firebase.auth().currentUser;
    
    const getData = async () => {
        setHasData(false);
        await db.collection('order').doc(user.uid).get()
        .then(doc => {
            setOrderdata(doc.data())
        })
    }
    useEffect(() => {
        // const getData = async () =>{
        //     await db.collection('order').doc(user.uid).get()
        //     .then(function(doc){
        //         console.log("order data====", doc.data());
        //         setOrderdata(doc.data())
        //     })
        // }
        getData()
        .then(() => {setHasData(true);})
        .catch((error) => {console.log(error);})
    },[]);
    
    const refreshScreen = async () => {
        getData()
        .then(() => setHasData(true))
        .catch(err => console.log(err));
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
          </View>
        );
      }

    function generateDataArray(){
        let array = [];
        if(hasData){
            for(const key in orderData){
                console.log("key=",key);
                const date = orderData[key].order_date;
                // let order_date = orderData[key].order_date.toDate().toDateString();
                let order_date = orderData[key].order_date.toDate().toTimeString();
                // console.log(orderData[key].order_date.toDate())
                let meals = orderData[key].meals;
                array.push({order_date,meals,key});
            }
        }

        return array;
    }
    const dataArray = generateDataArray();
        return(
            <View style={styles.order_container}>
                <Button transparent onPress={() => {refreshScreen()}} ><Text>Refresh</Text></Button>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 3,
                    marginBottom: 10,
                }}
                />
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
    return(
        <View>
            <OrderContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
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