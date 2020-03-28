import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Button } from 'react-native';
//import Icon from "react-native-vector-icons/Entypo";
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation, StackActions} from '@react-navigation/native';





export default function Favorite() {

    const navigation = useNavigation();



    const [meals, setMeals] = useState([
        { image: require("../../assets/meals/meal1.jpg"), name: 'Hummus and Pearl Barley Bowls', price: '2.86', id: '1' },
        { image: require("../../assets/meals/meal2.jpg"), name: 'Chickpea Salad', price: '1.85', id: '2' },
        { image: require("../../assets/meals/meal3.jpg"), name: 'Vegan Couscous Salad', price: '2.73', id: '4' },
        { image: require("../../assets/meals/meal4.jpg"), name: 'Creamy Coconut Lentil Curry', price: '1.23', id: '5' },
        { image: require("../../assets/meals/meal5.jpg"), name: 'One Pot Tandoori Quinoa', price: '2.94', id: '6' }

    ])
      
    

    return (
        <View style={styles.container}>
            

            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={meals}
                renderItem={({ item, index}) => (
                    
                    <TouchableOpacity onPress={() => {navigation.navigate("Detail Meal", {meal_info:"Meal 2"})}}>
                    <View style={styles.item}>

                        <View style={{ flexDirection: "column" }}>

                           
                                <Text style={{ flexWrap: 'wrap', fontSize: 23, fontFamily: "roboto-regular", flex: 6 }} >{item.name}</Text>
                                <Text>{index}</Text>

                            <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "#fda856" }}>Price: ${item.price}</Text>

                            {/* <TouchableOpacity style={styles.button12}>
                            <Text style={styles.text}>DELETE</Text>
                            </TouchableOpacity> */}

                            <TouchableOpacity style={{ height: 117, width: 130 }}>
                                {/* <Image style={{ flexDirection: "column", width: 129, height: 112}} source={require("../../assets/meals/meal2.jpg")} /> */}
                                <Image style={styles.image} source={item.image} />
                            </TouchableOpacity>


                            <TouchableOpacity >
                                <View style={{ flexDirection: "row" }}>
                                    <MaterialIcons name='delete' size={22} color='#333' />
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        //marginHorizontal: 10,
        marginTop: 24,
        padding: 20,
        //backgroundColor: '#a3de83',
        backgroundColor: '#defbc2',
        fontSize: 24,
        //borderWidth: 1,
        //borderStyle: 'dashed',
        borderRadius: 20,

    },

    name: {
        //flex: 1,
        width: 210,
        height: 54,
        color: "rgba(0,0,0,1)",
        fontSize: 23,
        fontFamily: "roboto-regular",
        //justifyContent: 'flex-start'


    },
    price: {
        color: "#fda856",
        fontSize: 18,
        fontFamily: "impact-regular",
        //marginLeft: 1
    },
    image: {
        //flex: 1,
        flexDirection: "row",
        width: 160,
        height: 112,
        borderRadius: 10,
        //justifyContent: 'flex-end',

    },
    // text: {
    //     color: '#067242',
    //     fontSize: 15,
    //     fontFamily: "roboto-900",
    //     margin: 5
    //     //left: 10,

    // }
});