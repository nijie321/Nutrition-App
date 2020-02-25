import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

function MainScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.groupRow}>
        <View style={styles.group}>
          <Text style={styles.monday}>monday</Text>
          <Text style={styles.tuesday}>tuesday</Text>
          <Text style={styles.wednesday}>wednesday</Text>
          <Text style={styles.thursday}>thursday</Text>
        </View>
        <View style={styles.group4}>
          <View style={styles.button9StackStackRow}>
            <View style={styles.button9StackStack}>
              <View style={styles.button9Stack}>
                <TouchableOpacity style={styles.button9}>
                  <View style={styles.stackFiller}></View>
                  <View style={styles.image5Stack}>
                    <Image
                      source={require("../assets/images/Meal_05-06.jpg")}
                      resizeMode="contain"
                      style={styles.image5}
                    ></Image>
                    <View style={styles.rect11}>
                      <View style={styles.text7StackStack}>
                        <View style={styles.text7Stack}>
                          <Text style={styles.text7}>
                            Creamy Coconut{"\n"}Lentil Curry
                          </Text>
                          <View style={styles.rect12}></View>
                        </View>
                        <Text style={styles.text8}>$5</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button7}>
                  <View style={styles.stackFiller}></View>
                  <View style={styles.image3Stack}>
                    <Image
                      source={require("../assets/images/Meal_03-04.jpg")}
                      resizeMode="contain"
                      style={styles.image3}
                    ></Image>
                    <View style={styles.rect6}>
                      <View style={styles.mexicanQuinoaSaladRow}>
                        <Text style={styles.mexicanQuinoaSalad}>
                          Mexican{"\n"}Quinoa Salad
                        </Text>
                        <View style={styles.mexicanQuinoaSaladFiller}></View>
                        <View style={styles.text4Column}>
                          <Text style={styles.text4}>$5</Text>
                          <View style={styles.rect7}></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button11}>
                  <View style={styles.image7Stack}>
                    <Image
                      source={require("../assets/images/Meal_07-08.jpg")}
                      resizeMode="contain"
                      style={styles.image7}
                    ></Image>
                    <View style={styles.rect16}>
                      <View style={styles.text11StackStack}>
                        <View style={styles.text11Stack}>
                          <Text style={styles.text11}>
                            Broccoli Cashew{"\n"}Stir Fry
                          </Text>
                          <View style={styles.rect17}></View>
                        </View>
                        <Text style={styles.text12}>$5</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button5}>
                <View style={styles.image9Stack}>
                  <Image
                    source={require("../assets/images/Meal_01-02.jpg")}
                    resizeMode="contain"
                    style={styles.image9}
                  ></Image>
                  <View style={styles.rect20}>
                    <View style={styles.chic2StackStack}>
                      <View style={styles.chic2Stack}>
                        <Text style={styles.chic2}>
                          Hummus and Pearl{"\n"}Barley Bowls
                        </Text>
                        <View style={styles.rect2}></View>
                      </View>
                      <Text style={styles.loremIpsum}>$5</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button6Column}>
              <TouchableOpacity style={styles.button6}>
                <Image
                  source={require("../assets/images/Meal_02-03.jpg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <View style={styles.rect3}>
                  <View style={styles.chickpeaSaladRow}>
                    <Text style={styles.chickpeaSalad}>Chickpea Salad</Text>
                    <View style={styles.chickpeaSaladFiller}></View>
                    <Text style={styles.text2}>$5</Text>
                  </View>
                  <View style={styles.rect4}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button8}>
                <Image
                  source={require("../assets/images/Meal_04-05.jpg")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <View style={styles.rect8}>
                  <View style={styles.veganCouscousSaladStackStack}>
                    <View style={styles.veganCouscousSaladStack}>
                      <Text style={styles.veganCouscousSalad}>
                        Vegan Couscous{"\n"}Salad
                      </Text>
                      <View style={styles.rect9}></View>
                    </View>
                    <Text style={styles.text6}>$5</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button10}>
                <Image
                  source={require("../assets/images/Meal_06-07.jpg")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
                <View style={styles.rect13}>
                  <View style={styles.stackFiller}></View>
                  <View style={styles.text9Stack}>
                    <Text style={styles.text9}>One Pot Tandoori Quinoa</Text>
                    <Text style={styles.text10}>$5</Text>
                    <View style={styles.rect14}></View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button12}>
                <Image
                  source={require("../assets/images/Meal_08-09.jpg")}
                  resizeMode="contain"
                  style={styles.image8}
                ></Image>
                <View style={styles.rect18}>
                  <View style={styles.text13StackStack}>
                    <View style={styles.text13Stack}>
                      <Text style={styles.text13}>
                        Butternut Squash{"\n"}and Lentil Soup
                      </Text>
                      <View style={styles.rect19}></View>
                    </View>
                    <Text style={styles.text14}>$5</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <MaterialButtonDanger
        style={styles.materialButtonDanger}
      ></MaterialButtonDanger>
      <View style={styles.group5}>
        <View style={styles.button13Row}>
          <TouchableOpacity style={styles.button13}>
            <Text style={styles.week1}>WEEK1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button17}>
            <Text style={styles.week2}>WEEK 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button18}>
            <Text style={styles.week3}>WEEK 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button19}>
            <Text style={styles.week4}>WEEK 4</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect}></View>
      <View style={styles.group6}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.icon5Stack}>
              <MaterialIconsIcon
                name="person-outline"
                style={styles.icon5}
              ></MaterialIconsIcon>
              <Text style={styles.profile}>Profile</Text>
            </View>
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
      <View style={styles.group3}>
        <View style={styles.button15Row}>
          <TouchableOpacity style={styles.button15}>
            <MaterialButtonTransparentHamburger
              style={styles.materialButtonTransparentHamburger}
            ></MaterialButtonTransparentHamburger>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button16}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 84,
    height: 437,
    marginTop: 50
  },
  monday: {
    color: "rgba(187,61,22,1)",
    fontSize: 18,
    fontFamily: "impact-regular"
  },
  tuesday: {
    color: "rgba(187,61,22,1)",
    fontSize: 18,
    fontFamily: "impact-regular",
    marginTop: 123
  },
  wednesday: {
    width: 84,
    height: 18,
    color: "rgba(187,61,22,1)",
    fontSize: 18,
    fontFamily: "impact-regular",
    marginTop: 113
  },
  thursday: {
    color: "rgba(187,61,22,1)",
    fontSize: 18,
    fontFamily: "impact-regular",
    marginTop: 129
  },
  group4: {
    width: 233,
    height: 559,
    marginLeft: 17
  },
  button9: {
    top: 139,
    left: 0,
    width: 101,
    height: 142,
    position: "absolute",
    flexDirection: "row"
  },
  stackFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image5: {
    top: 0,
    width: 100,
    height: 120,
    position: "absolute",
    right: 1
  },
  rect11: {
    top: 114,
    width: 100,
    height: 28,
    position: "absolute",
    right: 0
  },
  text7: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  rect12: {
    top: 22,
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 0
  },
  text7Stack: {
    top: 0,
    left: 0,
    width: 99,
    height: 28,
    position: "absolute"
  },
  text8: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  text7StackStack: {
    width: 99,
    height: 28
  },
  image5Stack: {
    width: 101,
    height: 142
  },
  button7: {
    top: 0,
    left: 0,
    width: 101,
    height: 142,
    position: "absolute",
    flexDirection: "row"
  },
  image3: {
    top: 0,
    width: 100,
    height: 120,
    position: "absolute",
    right: 1
  },
  rect6: {
    top: 114,
    width: 100,
    height: 28,
    position: "absolute",
    right: 0
  },
  mexicanQuinoaSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  mexicanQuinoaSaladFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text4: {
    color: "rgba(187,61,22,1)",
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  rect7: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    marginTop: 4
  },
  text4Column: {
    width: 40,
    alignItems: "flex-end",
    marginTop: 2,
    marginBottom: 4
  },
  mexicanQuinoaSaladRow: {
    height: 28,
    flexDirection: "row",
    marginRight: 1
  },
  image3Stack: {
    width: 101,
    height: 142
  },
  button11: {
    top: 276,
    left: 0,
    width: 101,
    height: 142,
    position: "absolute"
  },
  image7: {
    top: 0,
    left: 0,
    width: 100,
    height: 120,
    position: "absolute"
  },
  rect16: {
    top: 114,
    left: 1,
    width: 100,
    height: 28,
    position: "absolute"
  },
  text11: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  rect17: {
    top: 22,
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 0
  },
  text11Stack: {
    top: 0,
    left: 0,
    width: 99,
    height: 28,
    position: "absolute"
  },
  text12: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  text11StackStack: {
    width: 99,
    height: 28
  },
  image7Stack: {
    width: 101,
    height: 142
  },
  button9Stack: {
    top: 141,
    left: 0,
    width: 101,
    height: 418,
    position: "absolute"
  },
  button5: {
    top: 0,
    left: 0,
    width: 101,
    height: 142,
    position: "absolute"
  },
  image9: {
    top: 0,
    left: 0,
    width: 100,
    height: 120,
    position: "absolute"
  },
  rect20: {
    top: 114,
    left: 1,
    width: 100,
    height: 28,
    position: "absolute"
  },
  chic2: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  rect2: {
    top: 22,
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 0
  },
  chic2Stack: {
    top: 0,
    left: 0,
    width: 99,
    height: 28,
    position: "absolute"
  },
  loremIpsum: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  chic2StackStack: {
    width: 99,
    height: 28
  },
  image9Stack: {
    width: 101,
    height: 142
  },
  button9StackStack: {
    width: 101,
    height: 559
  },
  button6: {
    width: 120,
    height: 132,
    borderRadius: 29,
    borderColor: "#000000",
    borderWidth: 0
  },
  image2: {
    width: 120,
    height: 100
  },
  rect3: {
    width: 100,
    height: 28,
    marginTop: 4,
    marginLeft: 11
  },
  chickpeaSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  chickpeaSaladFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text2: {
    color: "rgba(187,61,22,1)",
    fontSize: 16,
    fontFamily: "impact-regular",
    marginTop: 2
  },
  chickpeaSaladRow: {
    height: 18,
    flexDirection: "row",
    marginRight: 1
  },
  rect4: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    alignSelf: "flex-end",
    marginTop: 4,
    marginRight: 1
  },
  button8: {
    width: 120,
    height: 132,
    marginTop: 9
  },
  image4: {
    width: 120,
    height: 100
  },
  rect8: {
    width: 100,
    height: 28,
    marginTop: 4,
    marginLeft: 11
  },
  veganCouscousSalad: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  rect9: {
    top: 22,
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 0
  },
  veganCouscousSaladStack: {
    top: 0,
    left: 0,
    width: 99,
    height: 28,
    position: "absolute"
  },
  text6: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  veganCouscousSaladStackStack: {
    width: 99,
    height: 28
  },
  button10: {
    width: 120,
    height: 132,
    marginTop: 7,
    marginLeft: 2
  },
  image6: {
    width: 120,
    height: 100
  },
  rect13: {
    width: 100,
    height: 28,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 11
  },
  text9: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  text10: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 1,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  rect14: {
    top: 22,
    width: 40,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 1
  },
  text9Stack: {
    width: 100,
    height: 28
  },
  button12: {
    width: 120,
    height: 132,
    marginTop: 5
  },
  image8: {
    width: 120,
    height: 100
  },
  rect18: {
    width: 100,
    height: 28,
    marginTop: 4,
    marginLeft: 11
  },
  text13: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    lineHeight: 14
  },
  rect19: {
    top: 22,
    width: 30,
    height: 2,
    backgroundColor: "rgba(122,179,52,1)",
    position: "absolute",
    right: 0
  },
  text13Stack: {
    top: 0,
    left: 0,
    width: 98,
    height: 28,
    position: "absolute"
  },
  text14: {
    top: 2,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "impact-regular"
  },
  text13StackStack: {
    width: 99,
    height: 28
  },
  button6Column: {
    width: 122,
    marginLeft: 10,
    marginTop: 10
  },
  button9StackStackRow: {
    height: 559,
    flexDirection: "row"
  },
  groupRow: {
    height: 559,
    flexDirection: "row",
    marginTop: 166,
    marginLeft: 21,
    marginRight: 20
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 14,
    marginLeft: 244
  },
  group5: {
    width: 312,
    height: 20,
    flexDirection: "row",
    marginTop: -640,
    marginLeft: 21
  },
  button13: {
    width: 51,
    height: 20
  },
  week1: {
    color: "rgba(187,61,22,1)",
    fontSize: 20,
    fontFamily: "impact-regular"
  },
  button17: {
    width: 57,
    height: 20,
    marginLeft: 29
  },
  week2: {
    width: 57,
    height: 20,
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 20,
    fontFamily: "impact-regular"
  },
  button18: {
    width: 58,
    height: 20,
    marginLeft: 27
  },
  week3: {
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 20,
    fontFamily: "impact-regular"
  },
  button19: {
    width: 57,
    height: 20,
    marginLeft: 33
  },
  week4: {
    color: "rgba(187,61,22,1)",
    opacity: 0.7,
    fontSize: 20,
    fontFamily: "impact-regular"
  },
  button13Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  rect: {
    width: 324,
    height: 3,
    backgroundColor: "rgba(122,179,52,1)",
    marginTop: 3,
    marginLeft: 21
  },
  group6: {
    width: 317,
    height: 47,
    flexDirection: "row",
    marginTop: -88,
    marginLeft: 20
  },
  button: {
    width: 37,
    height: 47
  },
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(122,179,52,1)",
    fontSize: 35
  },
  profile: {
    top: 34,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  icon5Stack: {
    width: 37,
    height: 47
  },
  button2: {
    width: 46,
    height: 47,
    marginLeft: 20
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
    marginLeft: 18
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
    marginLeft: 18
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
  buttonRow: {
    height: 47,
    flexDirection: "row",
    flex: 1
  },
  group3: {
    width: 328,
    height: 36,
    flexDirection: "row",
    marginTop: -83,
    marginLeft: 21
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
    marginLeft: 248,
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
    flex: 1
  }
});

export default MainScreen;
