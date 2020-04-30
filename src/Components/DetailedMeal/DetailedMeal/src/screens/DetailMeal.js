
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  // Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Button
} from "react-native";
import {Picker,Icon, Card, CardItem, Body, Text} from 'native-base';
import { useRoute, useNavigation } from "@react-navigation/native";
import firebase from '../../../../../../FireBase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function DetailMeal() {
  
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  const route = useRoute();
  const [display, setDisplay] = useState({toDisplay: ""});
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [nutritionText, setNutritionText] = useState("");
  const [imgSrc, setImgSrc] = useState();
  const [mealInfo, setMealInfo] = useState({});
  const [qty, setQty] = useState(0);
  const [tabSelected, setTabSelected] = useState({
    nutrition: false,
    ingredients: false,
    recipes: false,
    procedure: false
  });

  const navigation = useNavigation();

  const IngredientsList = () => {
    // setDisplay(mealInfo);
    setDisplay(
      { toDisplay: "ingredients" }
    );
    setTabSelected({ ingredients: true });
  }

  const ProcedureInfo = () => {
    // setDisplay({});
    setDisplay({
      toDisplay: "procedures"
    });
    setTabSelected({ procedure: true });
  }

  const NutritionInfo = () => {
    setDisplay({
      toDisplay: "nutrition"
    });
    setNutritionText(`calories_serving: ${mealInfo.calories_serving}, chol: ${mealInfo.chol}, dietary_fiber: ${mealInfo.dietary_fiber}, omega3: ${mealInfo.omega3}, omega6: ${mealInfo.omega6}, polyunsat: ${mealInfo.polyunsat}, protein: ${mealInfo.protein}, sat: ${mealInfo.sat}, sugar: ${mealInfo.sugar}, total_carb: ${mealInfo.total_carb}, total_fat: ${mealInfo.total_fat}, trans: ${mealInfo.trans}`)
    setTabSelected({ nutrition: true });
  }

  function returnIngredientString(info, procedure = false) {
    let splitString = ""
    if(procedure) splitString = ". ";
    else splitString = ", ";
    return info.split(splitString).reduce((acc, cur) => {acc += cur + "\n"; return acc}, "");
  }

  function returnDisplayText() {
    switch (display.toDisplay) {
      case "ingredients": return (<Text>{returnIngredientString(mealInfo.ingredients)}</Text>);
      case "recipe": return (<Text>recipe....</Text>);
      case "nutrition": return (<Text>{returnIngredientString(nutritionText)}</Text>);
      case "procedures": return (<Text>{returnIngredientString(mealInfo.procedure, true)}</Text>);
    }
  }

  function determineImg() {
    switch (route.params.meal_info) {
      case "Meal 1": setImgSrc(require("../../../../../../assets/meals/meal1.jpg")); break;
      case "Meal 2": setImgSrc(require("../../../../../../assets/meals/meal2.jpg")); break;
      case "Meal 3": setImgSrc(require("../../../../../../assets/meals/meal3.jpg")); break;
      case "Meal 4": setImgSrc(require("../../../../../../assets/meals/meal4.jpg")); break;
      case "Meal 5": setImgSrc(require("../../../../../../assets/meals/meal5.jpg")); break;
      case "Meal 6": setImgSrc(require("../../../../../../assets/meals/meal6.jpg")); break;
      case "Meal 7": setImgSrc(require("../../../../../../assets/meals/meal7.jpg")); break;
      case "Meal 8": setImgSrc(require("../../../../../../assets/meals/meal8.jpg")); break;
    }
  }


  async function getMealInfo() {
    db.collection("meals").doc(route.params.meal_info).get().then(function (doc) {
      setMealInfo(doc.data());
    })
  }

  function setBackButton(){
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity
            onPress={() => { navigation.goBack() }}
          >
            <FontAwesome5 name="angle-left" color={"#00cc00"} size={30} />
          </TouchableOpacity>
        </View>
      )
    })
  }
  
  function addToCart(){
    if(qty > 0 && pickUpLocation !== ""){
      var docData = {
        [route.params.meal_info]: {
          qty,
          pick_up_location: pickUpLocation
        }
      }
      console.log("docData:", docData);
      db.collection("shopping_cart").doc(user.uid).update(docData)
      .then(function(){
        Alert.alert("Added to shopping cart successfully.");
      })
      .catch(() => {
        db.collection("shopping_cart").doc(user.uid).set(docData)
        .then(function(){
          console.log("add to shopping cart successfully.");
        })
      })  
    }else{
      Alert.alert("Please make sure the quantity is above 0 and/or the pick-up locaiton is entered.");
    }
  }

  function addToList() {
    var docData = {
      [route.params.meal_info]: 1
    }
    console.log("docData:", docData);
    db.collection("favorite").doc(user.uid).update(docData)
      .then(function () {
        console.log("update to favorite successfully.");
      })
      .catch(function (error) {
        db.collection("favorite").doc(user.uid).set(docData)
          .then(function () {
            console.log("add to favorite successfully.");
          })
      })
  }

  //remove to favorite

  function removeFromList() {
    db.collection("favorite").doc(user.uid).update({
      [ route.params.meal_info ]: firebase.firestore.FieldValue.delete()
    })
    .then(() => {console.log("delete successfully")})
    .catch((err) => {console.log(err)});
  }

  useEffect(() => {
    determineImg();
    getMealInfo();
    setBackButton();
  }, []);


  return (
    <ScrollView style={styles.container}>
      
        <Image
          source={imgSrc}
          resizeMode="contain"
          style={styles.image}
        ></Image>
   

      <View>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontWeight:"bold", fontSize:30}}>
                {mealInfo.name} <Text style={{fontWeight:"bold", fontSize:25, color:"rgba(106,164,27,1)"}}>Price: {mealInfo.price}</Text>
              </Text>
              <Text style={{paddingLeft:20}}>
                {mealInfo.description}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <View style={{ flexDirection: "row", flex: 3, }}>
          <View style={{ marginHorizontal: 60 }}>
            <Button title="Add To List" onPress={() => addToList()}/>
          </View>

            <Button title="Remove From List" onPress={() => removeFromList()} />
        </View>
        
        <View style={{flexDirection:"row", marginVertical:20}}>
          <Text style={{fontWeight:"bold", fontSize:20, alignSelf:"center", paddingLeft:wp("5%")}}>
            Serving Size:
          </Text>
          <TextInput style={{borderWidth:1 ,marginTop:5, width:34, height:30, marginLeft:wp("1%"), alignSelf:"center"}} keyboardType="numeric" placeholder="qty"
                      onChangeText={text => setQty(text)}
                      />
          
          <TouchableOpacity style={{backgroundColor:"rgba(106,164,27,1)", width:wp("20%"), alignItems:"center", padding:10, borderRadius:10, position:"absolute", alignSelf:"center", right:wp("1%")}}
                onPress={addToCart}
          >
              <Text style={{color:"white"}}>
                Add to Shopping Cart
              </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row", marginBottom:hp("2%")}}>

            <View style={{width: wp("30%") ,marginLeft:wp("5%")}}>
                    <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Pick-up Location"
                    placeholderStyle={{ color: "#000000", fontWeight:"bold", fontSize:20, paddingLeft:wp("0%") }}
                    placeholderIconColor="#007aff"
                    selectedValue={pickUpLocation}
                    onValueChange={(value)=>{setPickUpLocation(value)}}
                >
                    <Picker.Item label="address 1" value="address 1" />
                    <Picker.Item label="address 2" value="address 2" />
                    <Picker.Item label="address 3" value="address 3" />
                    <Picker.Item label="address 4" value="address 4" />
                    <Picker.Item label="address 5" value="address 5" />
                </Picker>
            </View>

           <TouchableOpacity style={{backgroundColor:"rgba(106,164,27,1)", width:wp("20%"), alignItems:"center", marginLeft:wp("5%") , padding:10, borderRadius:10, position:"absolute",right:wp("1%")}}
                onPress={() => {navigation.navigate("Shopping Cart")}}
          >
              <Text style={{color:"white"}}>
                Go to Shopping Cart <Feather name="shopping-cart" color="white" />
              </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }}/>
      
      <View style={{ justifyContent: "space-evenly", padding: 10, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={NutritionInfo}
          style={tabSelected.nutrition ? { backgroundColor: "black" } : {}}>
          <Text style={{
            color: "rgba(106,164,27,1)",
            fontSize: 18,
            fontFamily: "roboto-900"
          }}>Nutrition</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={IngredientsList}
          style={tabSelected.ingredients ? { backgroundColor: "black", } : {}}>
          <Text style={{
            color: "rgba(106,164,27,1)",
            fontSize: 18,
            fontFamily: "roboto-900"
          }}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ProcedureInfo}
          style={tabSelected.procedure ? { backgroundColor: "black" } : {}}>
          <Text style={{
            color: "rgba(106,164,27,1)",
            fontSize: 18,
            fontFamily: "roboto-900"
          }}>Recipe/Procedure</Text>
        </TouchableOpacity>

      </View>

    
    <ScrollView>
      <View style={styles.infoContainer}>
        {/* <Text>{mealInfo.name}</Text> */}
        {returnDisplayText()}
        
      </View>

    </ScrollView>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer:{
    textAlign:"center",
    marginLeft: 15
  },
  image: {
    alignSelf:"center",
    width: wp("100%"),
    height: hp("50%"),
    
  },
});

export default DetailMeal;

