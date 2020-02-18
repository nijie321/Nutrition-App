import React, {useState} from 'react';
import {View, StyleSheet,Text, TouchableOpacity, Image} from 'react-native';

export default function Detail({route}) {
    console.log(route.params);

    const l = {ingredient: false, recipe: false}
    const [selectedItem, setSelectedItem] = useState({
      ingredient:false,
      recipe:false,
      btn: false
    });

    console.log(selectedItem)

    function setColor(tab){
      const newL = selectedItem.filter(function(key){
        if(key == tab){
          return true
        }else{
          return false
        }
      })      
      setSelectedItem(newL)
    }
    // setState(prevState => {
    //   // Object.assign would also work
    //   return {...prevState, ...updatedValues};
    // });
    // Object.keys(filter).forEach(v => filter[v] = false)

    const ingredientList = ['Chickpea','Celery','Onion','LimeJuice','Black Bean','Corn','Tomato','Cheddar Cheese','Jalapeno','Cilantro','Extra Virgin Olive Oil'];
    return (
      <View style={{ flex: 1, borderWidth:2, borderColor:'red'}}>
        <Image source={require('../assets/Chickpea-Salad.jpg')} style={styles.img}/>

        <View style={[styles.tabView, {flexDirection:'row'}]}>
          <TouchableOpacity style={[styles.tab, selectedItem.ingredient? {backgroundColor:'green'}:{}]} 
              onPress={() => {
                setSelectedItem({ingredient:true})
                // setColor('ingredient')
              } }>
            <Text>Ingredients</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.tab, selectedItem.recipe? {backgroundColor:'green'}:{}]} 
              onPress={() => {
                setSelectedItem({recipe:true})
                
                // setSelectedItem({recipe:true})
                // setColor('recipe')
              } }>
            <Text>Recipe</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.tab, selectedItem.btn? {backgroundColor:'green'}:{}]} 
              onPress={() => {
                setSelectedItem({btn:true})
                route.params.onButtonClick(true)
              } }>
            <Text>{route.params.day}</Text>
          </TouchableOpacity>
         
        </View>

        <View style={{flexDirection:'column',flex:1}}>
              
              {
                (selectedItem.ingredient? 
                  ingredientList.map(element => {
                  return(
                    <Text>
                      {selectedItem.recipe? '': element}
                    </Text>
                  )
                }): <Text>recipe</Text>)
                  
              }
        </View>
      </View>
    );
  }



const styles = StyleSheet.create({
  img:{
    height: 300,
    width:300,
    margin:50
  },
  tab:{
    height:20,
    width:100,
    marginLeft:10,
  },
  tabView:{
    borderColor:'blue',
    borderWidth:2
  }
})