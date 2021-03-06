import React, { useState , useEffect} from 'react';
import { Container,Text, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import firebase from '../../FireBase';

export default function Favorite2() {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  const [mealData, setMealData] = useState({});
  const [hasData, setHasData] = useState(false);
  const navigation = useNavigation();

  const getData = async () => {
    setHasData(false);
    await db.collection('favorite').doc(user.uid).get()
    .then((doc) => {
      let meals = [];
      for(let [key,_] of Object.entries(doc.data())){
        meals.push(key);
      }
      return meals;
    })
    .then(async (meals) => {
      const temp = {};
      for(const meal in meals){
        const mealN = meals[meal];
        temp[mealN] = [];
        await db.collection('meals').doc(mealN).get()
        .then(doc => {
          let data = doc.data();
          temp[mealN].push(data.name);
          temp[mealN].push(data.description);
          temp[mealN].push(determineImg(mealN));
          temp[mealN].push(mealN);
        })
      }
      return temp;
    })
    .then(data => setMealData(data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getData()
    .then(() => setHasData(true))
    .catch((error) => console.log(error))
  },[]);
  
  const refreshScreen = async () => {
    await getData()
    .then(() => setHasData(true))
    .catch(err => console.log(err));
  }

  const deleteAndRefresh = async (mealN) => {
    console.log(mealN);
    db.collection("favorite").doc(user.uid).update({
      [mealN]: firebase.firestore.FieldValue.delete()
    })
    .then(() => {console.log("delete successfully")})
    .then(() => {refreshScreen()})
    .catch(err => console.log(err));

  }
  
  function generateListItem(){
    let temp = [];
    for(let d in mealData){
      const data = mealData[d];
      temp.push(
          <ListItem thumbnail key={data}>
            <Left>
              <Thumbnail square source={data[2]} />
            </Left>
            <Body>
              <Text>{data[0]}</Text>
              <Text note numberOfLines={1}>{data[1]}</Text>
            </Body>
            <Right style={{borderColor:"white"}}>
            <Button transparent onPress={() => {navigation.navigate('Detail Meal',{meal_info: d})}}>
                <Text>View</Text>
              </Button>

            <Button transparent onPress={() => deleteAndRefresh(data[3])}>
                <Text style={{color:"red"}}>Remove</Text>
              </Button>
            </Right>
          </ListItem>
      )
    }
    return temp;
  }
  
  generateListItem();
  function determineImg(mealName) {
    switch (mealName) {
      case "Meal 1": return (require("../../assets/meals/meal1.jpg"));
      case "Meal 2": return (require("../../assets/meals/meal2.jpg"));
      case "Meal 3": return (require("../../assets/meals/meal3.jpg"));
      case "Meal 4": return (require("../../assets/meals/meal4.jpg"));
      case "Meal 5": return (require("../../assets/meals/meal5.jpg"));
      case "Meal 6": return (require("../../assets/meals/meal6.jpg"));
      case "Meal 7": return (require("../../assets/meals/meal7.jpg"));
      case "Meal 8": return (require("../../assets/meals/meal8.jpg"));
    }
  }
  if (hasData){
  return (
    <Container>
      <Content>
        <View>
          <Button transparent onPress={() => refreshScreen()}><Text>Refresh</Text></Button> 
        </View>
        <View
              style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                  marginBottom: 10,
              }}
          />
          
        <List>
          {generateListItem().map(i => i)}
        </List>
      </Content>
    </Container>
  );
  }else{
    return null;
  }
}