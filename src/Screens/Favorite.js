import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
//import Icon from "react-native-vector-icons/Entypo";

export default function Favorite() {

  const [favs, seFavs] = useState([
    {title: 'Hummus and Pearl Barley Bowls', price:'2.86', id: '1'},
    {title: 'Chickpea Salad', price:'1.85', id: '2'},
    {title: 'Mexican Quinoa Salad', price:'2.63', id: '3'}

  ])
  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={favs} 
        renderItem={({ item }) => ( 
            // <View style={styles.item} >
            //     <Text style={styles.item}>{item.title}</Text>
            //     <Text style={styles.price}>Price: $5</Text>
            //     <Image style={styles.image} source={require("../../assets/meals/meal1.jpg")} />
            // </View>
            
            <View style={{ flexDirection: "column" }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 23, fontFamily: "roboto-regular", flex: 6 }} numberOfLines={2}>{item.title}</Text>
                <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "rgba(187,61,22,1)" }}>{item.price}</Text>
                
                <Image style={{ flexDirection: "row", width: 129, height: 112}} source={require("../../assets/meals/meal1.jpg")} />
            </View>

            

        

            // <View style={{ height: 145, width: 130, marginLeft: 10 }}>
            //             <TouchableOpacity style={{ height: 117, width: 130 }}
            //                 onPress={() => { navigation.navigate("Detail Meal", { meal_info: "Meal 7" }) }}
            //             >
            //                 <Image source={require("../../assets/meals/meal7.jpg")}
            //                     style={{
            //                         flex: 1,
            //                         width: null,
            //                         height: null,
            //                         resizeMode: 'cover',
            //                         paddingLeft: 10,
            //                     }}
            //                 />
            //             </TouchableOpacity>
            //             <View style={{ flexDirection: "row" }}>
            //                 <Text style={{ flexWrap: 'wrap', fontSize: 10, fontFamily: "roboto-500", flex: 6 }} numberOfLines={2}>{meal.meal7.name}</Text>
            //                 <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "rgba(187,61,22,1)" }}>{meal.meal7.price}</Text>
            //             </View>
            // </View>
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
//   item: {
//     flex: 1,
//     marginHorizontal: 10,
//     marginTop: 24,
//     padding: 10,
//     backgroundColor: '#a1c559',
//     fontSize: 24,
//   },

  title: {
    width: 210,
    height: 54,
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    fontFamily: "roboto-regular"


  },
  price: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "impact-regular",
    //marginLeft: 1
  },
//   image: {
//     width: 128,
//     height: 117,
    
//   }
});