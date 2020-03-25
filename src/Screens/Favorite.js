import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
//import Icon from "react-native-vector-icons/Entypo";
import { MaterialIcons } from '@expo/vector-icons';

export default function Favorite() {

    const [meals, seMeals] = useState([
        { name: 'Hummus and Pearl Barley Bowls', price: '2.86', id: '1' },
        { name: 'Chickpea Salad', price: '1.85', id: '2' },
        { name: 'Vegan Couscous Salad', price: '2.73', id: '4' },
        { name: 'Creamy Coconut Lentil Curry', price: '1.23', id: '5' },
        { name: 'One Pot Tandoori Quinoa', price: '2.94', id: '6' }

    ])

    return (
        <View style={styles.container}>

            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={meals}
                renderItem={({ item }) => (
                    // <View style={styles.item} >
                    //     <Text style={styles.item}>{item.title}</Text>
                    //     <Text style={styles.price}>Price: $5</Text>
                    //     <Image style={styles.image} source={require("../../assets/meals/meal1.jpg")} />
                    // </View>
                    <View style={styles.item} >

                        <View style={{ flexDirection: "column" }}>

                            <TouchableOpacity>
                                <Text style={{ flexWrap: 'wrap', fontSize: 23, fontFamily: "roboto-regular", flex: 6 }} >{item.name}</Text>
                            </TouchableOpacity>

                            <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "#fda856" }}>Price: ${item.price}</Text>

                            {/* <TouchableOpacity style={styles.button12}>
                            <Text style={styles.text}>DELETE</Text>
                    </TouchableOpacity> */}

                            <TouchableOpacity style={{ height: 117, width: 130 }}>
                                {/* <Image style={{ flexDirection: "column", width: 129, height: 112}} source={require("../../assets/meals/meal2.jpg")} /> */}
                                <Image style={styles.image} source={require("../../assets/meals/meal2.jpg")} />
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <View style={{ flexDirection: "row" }}>
                                    <MaterialIcons name='delete' size={18} color='#333' />
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 10,
        //backgroundColor: '#a3de83',
        backgroundColor: '#defbc2',
        fontSize: 24,
        //borderWidth: 1,
        //borderStyle: 'dashed',
        borderRadius: 10,

    },

    name: {
        width: 210,
        height: 54,
        color: "rgba(0,0,0,1)",
        fontSize: 23,
        fontFamily: "roboto-regular"


    },
    price: {
        color: "#fda856",
        fontSize: 18,
        fontFamily: "impact-regular",
        //marginLeft: 1
    },
    image: {

        flexDirection: "row",
        width: 129,
        height: 112

    },
    // text: {
    //     color: '#067242',
    //     fontSize: 15,
    //     fontFamily: "roboto-900",
    //     margin: 5
    //     //left: 10,

    // }
});