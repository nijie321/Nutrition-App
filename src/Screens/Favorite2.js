import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import mealItem from './src/Screens/mealItem';





export default function Favorite2() {

  const [meals, setMeals] = useState([
    { image: require("../../assets/meals/meal1.jpg"), name: 'Hummus and Pearl Barley Bowls', price: '2.86', id: '1' },
    { image: require("../../assets/meals/meal2.jpg"), name: 'Chickpea Salad', price: '1.85', id: '2' },
    { image: require("../../assets/meals/meal3.jpg"), name: 'Vegan Couscous Salad', price: '2.73', id: '4' },
    { image: require("../../assets/meals/meal4.jpg"), name: 'Creamy Coconut Lentil Curry', price: '1.23', id: '5' },
    { image: require("../../assets/meals/meal5.jpg"), name: 'One Pot Tandoori Quinoa', price: '2.94', id: '6' }

])

const pressHandler = (key) => {
  setMeals(prevMeals => {
    return prevMeals.filter(meal => meal.id != id);
  });
};
 

  // const submitHandler = (text) => {
  //   if(text.length > 3){
  //     setTodos(prevTodos => {
  //       return [
  //         { text, key: Math.random().toString() },
  //         ...prevTodos
  //       ];
  //     });
  //   } else {
  //     Alert.alert('OOPS', 'Todo must be over 3 characters long', [
  //       {text: 'Understood', onPress: () => console.log('alert closed') }
  //     ]);
  //   }
  // };

  return (
    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss();
    //   console.log('dismissed keyboard');
    // }}>
      <View style={styles.container}>
        
        
            <FlatList
              data={meals}
              renderItem={({ item }) => (
                <MealItem item={item} pressHandler={pressHandler} />
              )}
            />
          
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
