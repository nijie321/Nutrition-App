import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

import {useNavigation} from '@react-navigation/native';
import {Constants} from 'expo';

function MainScreen(props) {
  const navigation = useNavigation();

  function onImgPress(){
    navigation.navigate("Detail", {day: "Monday"});
  }

  return (
    <ScrollView> 
    <View style={styles.container}>

      <View style={styles.group57StackStack}>
        <View style={styles.group57Stack}>
          <View style={styles.group57}>
            <Text style={styles.monday}>monday</Text>
            <Text style={styles.tuesday}>tuesday</Text>
            <Text style={styles.wednesday}>wednesday</Text>
            <Text style={styles.thursday}>thursday</Text>
          </View>
          <View style={styles.rect21Stack}>
            <View style={styles.rect21}></View>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.button21Row}>
                  <TouchableOpacity style={styles.button21}
                    onPress={onImgPress}
                  >
                    <View style={styles.image9Stack}>
                      <Image
                        source={require("../assets/images/Meal_01-02.jpg")}
                        resizeMode="contain"
                        style={styles.image9}
                      ></Image>
                      <View style={styles.group56}>
                        <Text style={styles.chic2}>
                          Hummus and Pearl{"\n"}Barley Bowls
                        </Text>
                        <View style={styles.chic2Filler}></View>
                        <Text style={styles.loremIpsum}>$5</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button22}>
                    <Image
                      source={require("../assets/images/Meal_02-03.jpg")}
                      resizeMode="contain"
                      style={styles.image2}
                    ></Image>
                    <View style={styles.rect40}>
                      <Text style={styles.chickpeaSalad}>Chickpea Salad</Text>
                      <View style={styles.chickpeaSaladFiller}></View>
                      <Text style={styles.text12}>$5</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={styles.scrollArea2Stack}>
          <View style={styles.scrollArea2}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea2_contentContainerStyle}
            >
              <View style={styles.button23Row}>
                <TouchableOpacity style={styles.button23}>
                  <View style={styles.image11Stack}>
                    <Image
                      source={require("../assets/images/Meal_03-04.jpg")}
                      resizeMode="contain"
                      style={styles.image11}
                    ></Image>
                    <View style={styles.rect44}>
                      <Text style={styles.text15}>
                        Mexican Quinoa {"\n"}Salad
                      </Text>
                      <View style={styles.text15Filler}></View>
                      <Text style={styles.text16}>$5</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button24}>
                  <Image
                    source={require("../assets/images/Meal_04-05.jpg")}
                    resizeMode="contain"
                    style={styles.image10}
                  ></Image>
                  <View style={styles.rect42}>
                    <Text style={styles.veganCouscousSalad}>
                      Vegan Couscous{"\n"}Salad
                    </Text>
                    <View style={styles.veganCouscousSaladFiller}></View>
                    <Text style={styles.text14}>$5</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          
          <View style={styles.scrollArea32}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea32_contentContainerStyle}
            >
              <View style={styles.button25Row}>
                <TouchableOpacity style={styles.button25}>
                  <View style={styles.image13Stack}>
                    <Image
                      source={require("../assets/images/Meal_05-06.jpg")}
                      resizeMode="contain"
                      style={styles.image13}
                    ></Image>
                    <View style={styles.rect48}>
                      <Text style={styles.text19}>
                        Broccoli Cashew{"\n"}Stir fry
                      </Text>
                      <View style={styles.text19Filler}></View>
                      <Text style={styles.text20}>$5</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button26}>
                  <Image
                    source={require("../assets/images/Meal_06-07.jpg")}
                    resizeMode="contain"
                    style={styles.image12}
                  ></Image>
                  <View style={styles.rect46}>
                    <Text style={styles.text17}>
                      One Pot Tandoori{"\n"}Quinoa
                    </Text>
                    <View style={styles.text17Filler}></View>
                    <Text style={styles.text18}>$5</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.scrollArea33}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea33_contentContainerStyle}
            >
              <View style={styles.button27Row}>
                <TouchableOpacity style={styles.button27}>
                  <View style={styles.image15StackStack}>
                    <View style={styles.image15Stack}>
                      <Image
                        source={require("../assets/images/Meal_07-08.jpg")}
                        resizeMode="contain"
                        style={styles.image15}
                      ></Image>
                      <Text style={styles.text23}>
                        Spicy Ground Turkey{"\n"}Green Bean Stir Fry
                      </Text>
                    </View>
                    <Text style={styles.text24}>$5</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button28}>
                  <Image
                    source={require("../assets/images/Meal_08-09.jpg")}
                    resizeMode="contain"
                    style={styles.image14}
                  ></Image>
                  <View style={styles.rect50}>
                    <Text style={styles.text21}>
                      Hummus and Pearl{"\n"}Barley Bowls
                    </Text>
                    <View style={styles.text21Filler}></View>
                    <Text style={styles.text22}>$5</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <MaterialButtonDanger
        style={styles.materialButtonDanger}
      ></MaterialButtonDanger>

      <View style={styles.group55}>
        <View style={styles.button20Row}>
          <TouchableOpacity style={styles.button20}
            onPress={() => {console.log("Profile clicked")}}
          >
            <MaterialIconsIcon
              name="person-outline"
              style={styles.icon5}
            ></MaterialIconsIcon>
            <Text style={styles.profile}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <MaterialIconsIcon
              name="favorite"
              style={styles.icon2}
            ></MaterialIconsIcon>
            <Text style={styles.favorite}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <FontAwesomeIcon
              name="history"
              style={styles.icon3}
            ></FontAwesomeIcon>
            <Text style={styles.paymentHistory}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button14}>
            <TouchableOpacity style={styles.button4}>
              <EntypoIcon
                name="shopping-cart"
                style={styles.icon4}
              ></EntypoIcon>
              <Text style={styles.shoppingCart}>Shopping Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.button15Row}>
        <TouchableOpacity style={styles.button15}>
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button16}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View> */}
      <StatusBar></StatusBar>
      {/* <View style={styles.rect51}>
        <View style={styles.rect39Row}>
          <View style={styles.rect39}>
            <Text style={styles.week1}>WEEK 1</Text>
          </View>
          <Text style={styles.week2}>WEEK 2</Text>
          <Text style={styles.week3}>WEEK 3</Text>
          <Text style={styles.week4}>WEEK 4</Text>
        </View>
      </View> */}

    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group57: {
    top: 56,
    left: 0,
    width: 103,
    height: 498,
    position: "absolute"
  },
  monday: {
    color: "rgba(187,61,22,1)",
    fontSize: 20,
    fontFamily: "impact-regular",
    marginLeft: 1
  },
  tuesday: {
    color: "rgba(187,61,22,1)",
    fontSize: 20,
    fontFamily: "impact-regular",
    marginTop: 133,
    marginLeft: 1
  },
  wednesday: {
    width: 103,
    height: 25,
    color: "rgba(187,61,22,1)",
    fontSize: 20,
    fontFamily: "impact-regular",
    marginTop: 142
  },
  thursday: {
    color: "rgba(187,61,22,1)",
    fontSize: 20,
    fontFamily: "impact-regular",
    marginTop: 138,
    marginLeft: 1
  },
  rect21: {
    top: 0,
    left: 0,
    width: 351,
    height: 3,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute"
  },
  scrollArea: {
    top: 2,
    left: 112,
    width: 250,
    height: 161,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea_contentContainerStyle: {
    width: 250,
    height: 161
  },
  button21: {
    width: 115,
    height: 161
  },
  image9: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  group56: {
    top: 134,
    left: 0,
    width: 115,
    height: 27,
    position: "absolute",
    flexDirection: "row"
  },
  chic2: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  chic2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  loremIpsum: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  image9Stack: {
    width: 115,
    height: 161
  },
  button22: {
    width: 133,
    height: 148,
    marginLeft: 2,
    marginTop: 13
  },
  image2: {
    width: 133,
    height: 111
  },
  rect40: {
    width: 115,
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12
  },
  chickpeaSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  chickpeaSaladFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text12: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  button21Row: {
    height: 161,
    flexDirection: "row",
    flex: 1
  },
  rect21Stack: {
    top: 0,
    left: 2,
    width: 362,
    height: 163,
    position: "absolute"
  },
  group57Stack: {
    top: 0,
    left: 0,
    width: 364,
    height: 554,
    position: "absolute"
  },
  scrollArea2: {
    top: 0,
    left: 0,
    width: 250,
    height: 161,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea2_contentContainerStyle: {
    width: 250,
    height: 161
  },
  button23: {
    width: 115,
    height: 161
  },
  image11: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  rect44: {
    top: 134,
    left: 0,
    width: 115,
    height: 27,
    position: "absolute",
    flexDirection: "row"
  },
  text15: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text15Filler: {
    flex: 1,
    flexDirection: "row"
  },
  text16: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  image11Stack: {
    width: 115,
    height: 161
  },
  button24: {
    width: 133,
    height: 148,
    marginLeft: 2,
    marginTop: 13
  },
  image10: {
    width: 133,
    height: 111
  },
  rect42: {
    width: 115,
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12
  },
  veganCouscousSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  veganCouscousSaladFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text14: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  button23Row: {
    height: 161,
    flexDirection: "row",
    flex: 1
  },
  scrollArea32: {
    top: 160,
    left: 0,
    width: 250,
    height: 161,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea32_contentContainerStyle: {
    width: 250,
    height: 161
  },
  button25: {
    width: 115,
    height: 161
  },
  image13: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  rect48: {
    top: 134,
    width: 115,
    height: 27,
    position: "absolute",
    left: 0,
    flexDirection: "row"
  },
  text19: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text19Filler: {
    flex: 1,
    flexDirection: "row"
  },
  text20: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  image13Stack: {
    width: 115,
    height: 161
  },
  button26: {
    width: 133,
    height: 148,
    marginLeft: 2,
    marginTop: 13
  },
  image12: {
    width: 133,
    height: 111
  },
  rect46: {
    width: 115,
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12
  },
  text17: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text17Filler: {
    flex: 1,
    flexDirection: "row"
  },
  text18: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  button25Row: {
    height: 161,
    flexDirection: "row",
    flex: 1
  },
  scrollArea33: {
    top: 312,
    left: 0,
    width: 250,
    height: 161,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea33_contentContainerStyle: {
    width: 250,
    height: 161
  },
  button27: {
    width: 115,
    height: 161
  },
  image15: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  text23: {
    top: 134,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  image15Stack: {
    top: 0,
    left: 0,
    width: 114,
    height: 161,
    position: "absolute"
  },
  text24: {
    top: 137,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  image15StackStack: {
    width: 115,
    height: 161
  },
  button28: {
    width: 133,
    height: 148,
    marginLeft: 2,
    marginTop: 13
  },
  image14: {
    width: 133,
    height: 111
  },
  rect50: {
    width: 115,
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12
  },
  text21: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text21Filler: {
    flex: 1,
    flexDirection: "row"
  },
  text22: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular",
    marginTop: 3
  },
  button27Row: {
    height: 161,
    flexDirection: "row",
    flex: 1
  },
  scrollArea2Stack: {
    top: 163,
    left: 114,
    width: 250,
    height: 473,
    position: "absolute"
  },
  group57StackStack: {
    width: 364,
    height: 636, //636
    marginTop: 65, //163
    marginLeft: 29
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 14,
    marginLeft: 266
  },
  group55: {
    width: 353,
    height: 47,
    flexDirection: "row",
    marginTop: -750, //-776
    marginLeft: 29
  },
  button20: {
    width: 37,
    height: 47
  },
  icon5: {
    color: "rgba(122,179,52,1)",
    fontSize: 35
  },
  profile: {
    color: "#121212",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  button2: {
    width: 46,
    height: 47,
    marginLeft: 38
  },
  icon2: {
    color: "rgba(122,179,52,1)",
    fontSize: 30,
    marginLeft: 7
  },
  favorite: {
    color: "#121212",
    fontSize: 13,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  button3: {
    width: 96,
    height: 47,
    marginLeft: 25
  },
  icon3: {
    color: "rgba(122,179,52,1)",
    fontSize: 30,
    marginLeft: 33
  },
  paymentHistory: {
    color: "#121212",
    fontSize: 13,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  button14: {
    width: 82,
    height: 47,
    marginLeft: 29
  },
  button4: {
    width: 82,
    height: 47
  },
  icon4: {
    color: "rgba(122,179,52,1)",
    fontSize: 30,
    marginLeft: 24
  },
  shoppingCart: {
    color: "#121212",
    fontSize: 13,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  button20Row: {
    height: 47,
    flexDirection: "row",
    flex: 1
  },
  button15: {
    width: 36,
    height: 36
  },
  materialButtonTransparentHamburger: {
    width: 36,
    height: 36
  },
  button16: {
    width: 44,
    height: 14,
    marginLeft: 280,
    marginTop: 10
  },
  logout: {
    width: 44,
    height: 14,
    color: "#121212",
    fontFamily: "roboto-regular"
  },
  button15Row: {
    height: 36,
    flexDirection: "row",
    marginTop: -83,
    marginLeft: 21,
    marginRight: 33
  },
  rect51: {
    width: 349,
    height: 22,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 30
  },
  rect39: {
    width: 75,
    height: 20
  },
  week1: {
    color: "rgba(187,61,22,1)",
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  week2: {
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 22,
    fontFamily: "impact-regular",
    marginLeft: 16
  },
  week3: {
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 22,
    fontFamily: "impact-regular",
    marginLeft: 34
  },
  week4: {
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 22,
    fontFamily: "impact-regular",
    marginLeft: 34
  },
  rect39Row: {
    height: 22,
    flexDirection: "row",
    flex: 1
  }
});

export default MainScreen;
