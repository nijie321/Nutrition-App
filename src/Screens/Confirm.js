import * as React from 'react';
import { Container, Content ,Text,Input,Item,Button, Icon } from 'native-base';
import {StyleSheet, View, Image, TextInput, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

import {useNavigation, CommonActions} from '@react-navigation/native';
function Confirm({ route }) {
    
    const navigation = useNavigation();

    function determineImg(meal_id){
        switch(meal_id){
          case "Meal 1": return require("../../assets/meals/meal1.jpg"); break;
          case "Meal 2": return require("../../assets/meals/meal2.jpg"); break;
          case "Meal 3": return require("../../assets/meals/meal3.jpg"); break;
          case "Meal 4": return require("../../assets/meals/meal4.jpg"); break;
          case "Meal 5": return require("../../assets/meals/meal5.jpg"); break;
          case "Meal 6": return require("../../assets/meals/meal6.jpg"); break;
          case "Meal 7": return require("../../assets/meals/meal7.jpg"); break;
          case "Meal 8": return require("../../assets/meals/meal8.jpg"); break;
        }
      }
    const { order } = route.params;
    const { id } = route.params;
    const elements = [];
    var total = parseFloat(route.params.total).toFixed(2);

    console.log(order[id]["meals"])
    for(const d in order[id]["meals"]){console.log(d);elements.push(d);}
    return (
        <ScrollView>
        <Container>
            <View>
            {elements.map((value, index) => {
                return  <View style={styles.meal_info_container}>
                            <Image style={styles.img} resizeMode="cover" source={determineImg(value)}/>
                            <Text style={styles.info}>{order[id]["meals"][value]["name"]}
                            {'\n'}Amount:{order[id]["meals"][value]["quantity"]}
                            {'\n'}Address:{order[id]["meals"][value]["address"]}</Text>
                        </View>
            })}
            <Text>Total: ${total}</Text>
            </View>
            <Button success onPress={() => {navigation.dispatch(
                CommonActions.reset({
                    index:0,
                    routes:[
                        {name:"home"}
                    ]
                })
            )}}> 

            {/* <Button success onPress={()=>{navigation.pop(2)}} style={{width:wp("10%"), position:"absolute", bottom:hp("20%"), right:wp("10%"), justifyContent:"center"}}> */}
            <Text style={{textAlign:"center"}}> Home </Text>
            </Button>
        </Container>
        </ScrollView>
    )
  }
  const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    info:{
        flex: 1, flexWrap: 'wrap',flexDirection:"column",
    },
    meal_info_container:{
        flexDirection:"row",
        marginHorizontal:wp("3%"),
        marginBottom:hp("1%")
    },
    img:{
        height:hp("12%"),
        width:wp("30%"),
    }
})
  export default Confirm;