import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Button} from 'react-native';
//import Icon from "react-native-vector-icons/Entypo";
//import DeleteButton from '../data/DeleteButton';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, StackActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';



import firebase from '../../FireBase';
const db = firebase.firestore();

export default function Favorite({ navigation }) {


  const [meal, setMeal] = useState([
    { image: require("../../assets/meals/meal1.jpg"), name: 'Hummus and Pearl Barley Bowls', price: '2.86', id: '1' },
    { image: require("../../assets/meals/meal2.jpg"), name: 'Chickpea Salad', price: '1.85', id: '2' },
    { image: require("../../assets/meals/meal3.jpg"), name: 'Vegan Couscous Salad', price: '2.73', id: '4' },
    { image: require("../../assets/meals/meal4.jpg"), name: 'Creamy Coconut Lentil Curry', price: '1.23', id: '5' },
    { image: require("../../assets/meals/meal5.jpg"), name: 'One Pot Tandoori Quinoa', price: '2.94', id: '6' },
    { image: require("../../assets/meals/meal6.jpg"), name: 'Broccoli Cashew Stir fry', price: '2.53', id: '7' },
    { image: require("../../assets/meals/meal7.jpg"), name: 'Spicy Ground Turkey and Green Bean Stir Fry', price: '2.18', id: '8' },
    { image: require("../../assets/meals/meal8.jpg"), name: 'Asado Chicken and Zucchini', price: '4.43', id: '9' }

  ]);

  const pressHandler = (id) => {
    console.log(id);
    setMeal((prevMeal) => {
      return prevMeal.filter(meal => meal.id != id);
    });
  };

 
   

  return (
   
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={meal}
        renderItem={({ item, index }) => (
         
          <TouchableOpacity >
            <View style={{
              flex: 1,
              flexDirection: 'column',
            }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: index % 2 == 0 ? '#defbc2' : '#e1f4f3'
                }}>
                  {/* <TouchableOpacity onPress={() => pressHandler(item.id)}> */}
                  
                  <Image
                    source={item.image}
                    style={{ width: 120, height: 120, margin: 10, borderRadius: 5,}}
                  />
               
                
                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    //height: "auto",
                    //width: "auto",
                  }}>
                    <Text style={{ flexWrap: 'wrap', fontSize: 18, fontFamily: "roboto-regular", marginTop: 8 }} >{item.name}</Text>
                    <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 20, fontWeight: "bold", color: "#fda856" }}>${item.price}</Text>

                  {/* <Button
                    title="VIEW DETAILS"
                    color="#8cba51"
                    onPress={() => navigation.navigate('Detail Meal', { id: item.name })}
                    /> */}

                    <View style={{color:"#000", fontSize: 15, fontFamily: "roboto-regular",  marginTop: 8 ,
                                  backgroundColor:"frgba(106,164,27,1)6",
                                  //flexDirection: "row",
                                  // alignItems: "left",
                                  // justifyContent: "left",
                                  //paddingRight: 2,
                                  paddingLeft: 2,
                                  elevation: 2,
                                  minWidth: 5,
                                  borderRadius: 2,
                                  shadowColor: "#000",
                                  shadowOpacity: 0.35,
                                  shadowRadius: 2
                                 }}>
                      <TouchableOpacity onPress={() => navigation.navigate('Detail Meal', { id: item.name })}>
                        <Text>VIEW DETAILS</Text>
                      </TouchableOpacity>
                    </View>

                  <View style={{ marginTop: 8 }}>
                  <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <AntDesign name='delete' size={18} color='#333'></AntDesign>
                    </TouchableOpacity>
                  </View>
 
                </View>
              </View>

              <View style={{
                height: 1,
                backgroundColor: 'white'
              }}>
              </View>

            </View>

          </TouchableOpacity>
        
        )}
      />
    </View>
 
  );
}

const styles = StyleSheet.create({

    
   

  // button: {
  //   alignItems: 'stretch',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10
  // }

  // name: {
  //   //flex: 1,
  //   width: 210,
  //   height: 54,
  //   color: "rgba(0,0,0,1)",
  //   fontSize: 23,
  //   fontFamily: "roboto-regular",
  //   //justifyContent: 'flex-start'


  // },

});
