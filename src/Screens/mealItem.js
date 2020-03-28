import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MealItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>

                <View style={{ flexDirection: "column" }}>


                    <Text style={{ flexWrap: 'wrap', fontSize: 23, fontFamily: "roboto-regular", flex: 6 }} >{item.name}</Text>
                    {/* <Text>{index}</Text> */}

                    <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "#fda856" }}>Price: ${item.price}</Text>

                    <View style={{ height: 117, width: 130 }}>
                        {/* <Image style={{ flexDirection: "column", width: 129, height: 112}} source={require("../../assets/meals/meal2.jpg")} /> */}
                        <Image style={styles.image} source={item.image} />
                    </View>

                    <TouchableOpacity >
                        <View style={{ flexDirection: "row" }}>
                            <MaterialIcons name='delete' size={22} color='#333' />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

        </TouchableOpacity>
    )
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
