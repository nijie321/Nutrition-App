import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function MainScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <CupertinoFooter2 style={styles.cupertinoFooter2}></CupertinoFooter2>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group57Row}>
            <View style={styles.group57}>
              <Text style={styles.monday}>monday</Text>
              <Text style={styles.tuesday}>tuesday</Text>
              <Text style={styles.wednesday}>wednesday</Text>
              <Text style={styles.thursday}>thursday</Text>
            </View>
            <View style={styles.scrollArea2Column}>
              <View style={styles.scrollArea2}>
                <ScrollView
                  horizontal={false}
                  contentContainerStyle={
                    styles.scrollArea2_contentContainerStyle
                  }
                >
                  <View style={styles.group65Row}>
                    <View style={styles.group65}>
                      <View style={styles.button17Stack}>
                        <TouchableOpacity style={styles.button17}>
                          <Image
                            source={require("../assets/images/Meal_01-02.jpg")}
                            resizeMode="contain"
                            style={styles.image9}
                          ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button18}>
                          <Text style={styles.chic2}>
                            Hummus and Pearl{"\n"}Barley Bowls
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.loremIpsum}>$5</Text>
                      </View>
                    </View>
                    <View style={styles.group64}>
                      <View style={styles.button20StackStack}>
                        <View style={styles.button20Stack}>
                          <TouchableOpacity style={styles.button20}>
                            <Text style={styles.chickpeaSalad}>
                              Chickpea Salad
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button19}>
                            <Image
                              source={require("../assets/images/Meal_02-03.jpg")}
                              resizeMode="contain"
                              style={styles.image16}
                            ></Image>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.text12}>$5</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.scrollArea22}>
                <ScrollView
                  horizontal={false}
                  contentContainerStyle={
                    styles.scrollArea22_contentContainerStyle
                  }
                >
                  <View style={styles.group63Row}>
                    <View style={styles.group63}>
                      <View style={styles.button21Stack}>
                        <TouchableOpacity style={styles.button21}>
                          <Image
                            source={require("../assets/images/Meal_03-04.jpg")}
                            resizeMode="contain"
                            style={styles.image11}
                          ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button22}>
                          <Text style={styles.text15}>
                            Mexican Quinoa {"\n"}Salad
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.text16}>$5</Text>
                      </View>
                    </View>
                    <View style={styles.group62}>
                      <View style={styles.button23StackStack}>
                        <View style={styles.button23Stack}>
                          <TouchableOpacity style={styles.button23}>
                            <Text style={styles.veganCouscousSalad}>
                              Vegan Couscous{"\n"}Salad
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button24}>
                            <Image
                              source={require("../assets/images/Meal_04-05.jpg")}
                              resizeMode="contain"
                              style={styles.image17}
                            ></Image>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.text14}>$5</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.scrollArea3Stack}>
                <View style={styles.scrollArea3}>
                  <ScrollView
                    horizontal={false}
                    contentContainerStyle={
                      styles.scrollArea3_contentContainerStyle
                    }
                  >
                    <View style={styles.group60Row}>
                      <View style={styles.group60}>
                        <View style={styles.button26Stack}>
                          <TouchableOpacity style={styles.button26}>
                            <Image
                              source={require("../assets/images/Meal_05-06.jpg")}
                              resizeMode="contain"
                              style={styles.image13}
                            ></Image>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button27}>
                            <Text style={styles.text19}>
                              Broccoli Cashew{"\n"}Stir Fry
                            </Text>
                          </TouchableOpacity>
                          <Text style={styles.text20}>$5</Text>
                        </View>
                      </View>
                      <View style={styles.group61}>
                        <View style={styles.button28StackStack}>
                          <View style={styles.button28Stack}>
                            <TouchableOpacity style={styles.button28}>
                              <Text style={styles.text17}>
                                One Pot Tandoori{"\n"}Quinoa
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button25}>
                              <Image
                                source={require("../assets/images/Meal_06-07.jpg")}
                                resizeMode="contain"
                                style={styles.image18}
                              ></Image>
                            </TouchableOpacity>
                          </View>
                          <Text style={styles.text18}>$5</Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.scrollArea4}>
                  <ScrollView
                    horizontal={false}
                    contentContainerStyle={
                      styles.scrollArea4_contentContainerStyle
                    }
                  >
                    <View style={styles.group59Row}>
                      <View style={styles.group59}>
                        <View style={styles.button29StackStack}>
                          <View style={styles.button29Stack}>
                            <TouchableOpacity style={styles.button29}>
                              <Image
                                source={require("../assets/images/Meal_07-08.jpg")}
                                resizeMode="contain"
                                style={styles.image15}
                              ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button30}>
                              <Text style={styles.text23}>
                                Spicy Ground{"\n"}Turkey Green Bean {"\n"}Ftir
                                Fry
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text style={styles.text24}>$5</Text>
                        </View>
                      </View>
                      <View style={styles.group58}>
                        <View style={styles.button31StackStack}>
                          <View style={styles.button31Stack}>
                            <TouchableOpacity style={styles.button31}>
                              <Text style={styles.text21}>
                                Hummus and Pearl{"\n"}Barley Bowls
                              </Text>
                            </TouchableOpacity>
                            <Image
                              source={require("../assets/images/Meal_08-09.jpg")}
                              resizeMode="contain"
                              style={styles.image19}
                            ></Image>
                          </View>
                          <Text style={styles.text22}>$5</Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
          <MaterialButtonDanger
            style={styles.materialButtonDanger}
          ></MaterialButtonDanger>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoFooter2: {
    width: 375,
    height: 49,
    marginTop: 778,
    marginLeft: 20
  },
  scrollArea: {
    width: 356,
    height: 685,
    marginTop: -741,
    marginLeft: 29
  },
  scrollArea_contentContainerStyle: {
    width: 356,
    height: 685,
    flexDirection: "column"
  },
  group57: {
    width: 103,
    height: 498,
    marginTop: 55
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
  scrollArea2: {
    width: 248,
    height: 159
  },
  scrollArea2_contentContainerStyle: {
    width: 248,
    height: 159,
    flexDirection: "row"
  },
  group65: {
    width: 119,
    height: 159
  },
  button17: {
    top: 0,
    left: 0,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image9: {
    width: 113,
    height: 136
  },
  button18: {
    top: 132,
    left: 0,
    width: 88,
    height: 27,
    position: "absolute"
  },
  chic2: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  loremIpsum: {
    top: 135,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button17Stack: {
    width: 118,
    height: 159
  },
  group64: {
    width: 117,
    height: 157,
    marginLeft: 12
  },
  button20: {
    top: 132,
    left: 0,
    width: 70,
    height: 14,
    position: "absolute"
  },
  chickpeaSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  button19: {
    top: 0,
    left: 0,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image16: {
    width: 113,
    height: 136
  },
  button20Stack: {
    top: 0,
    left: 0,
    width: 113,
    height: 146,
    position: "absolute"
  },
  text12: {
    top: 135,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button20StackStack: {
    width: 116,
    height: 157
  },
  group65Row: {
    height: 159,
    flexDirection: "row",
    flex: 1
  },
  scrollArea22: {
    width: 244,
    height: 158,
    marginTop: 2
  },
  scrollArea22_contentContainerStyle: {
    width: 244,
    height: 158,
    flexDirection: "row"
  },
  group63: {
    width: 115,
    height: 158
  },
  button21: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image11: {
    width: 113,
    height: 136
  },
  button22: {
    top: 131,
    left: 0,
    width: 78,
    height: 27,
    position: "absolute"
  },
  text15: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text16: {
    top: 134,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button21Stack: {
    width: 115,
    height: 158
  },
  group62: {
    width: 114,
    height: 158,
    marginLeft: 16
  },
  button23: {
    top: 131,
    left: 0,
    width: 78,
    height: 27,
    position: "absolute"
  },
  veganCouscousSalad: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  button24: {
    top: 0,
    left: 0,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image17: {
    width: 113,
    height: 136
  },
  button23Stack: {
    top: 0,
    left: 0,
    width: 113,
    height: 158,
    position: "absolute"
  },
  text14: {
    top: 134,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button23StackStack: {
    width: 113,
    height: 158
  },
  group63Row: {
    height: 158,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  scrollArea3: {
    top: 0,
    left: 0,
    width: 248,
    height: 157,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea3_contentContainerStyle: {
    width: 248,
    height: 157
  },
  group60: {
    width: 116,
    height: 157
  },
  button26: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image13: {
    width: 113,
    height: 136
  },
  button27: {
    top: 130,
    left: 0,
    width: 77,
    height: 27,
    position: "absolute"
  },
  text19: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  text20: {
    top: 133,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button26Stack: {
    width: 115,
    height: 157
  },
  group61: {
    width: 117,
    height: 157,
    marginLeft: 15
  },
  button28: {
    top: 130,
    left: 0,
    width: 80,
    height: 27,
    position: "absolute"
  },
  text17: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  button25: {
    top: 0,
    left: 0,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image18: {
    width: 113,
    height: 136
  },
  button28Stack: {
    top: 0,
    left: 0,
    width: 113,
    height: 157,
    position: "absolute"
  },
  text18: {
    top: 133,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button28StackStack: {
    width: 117,
    height: 157
  },
  group60Row: {
    height: 157,
    flexDirection: "row",
    flex: 1
  },
  scrollArea4: {
    top: 154,
    left: 0,
    width: 247,
    height: 175,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea4_contentContainerStyle: {
    width: 247,
    height: 175
  },
  group59: {
    width: 119,
    height: 175
  },
  button29: {
    top: 0,
    left: 1,
    width: 113,
    height: 136,
    position: "absolute"
  },
  image15: {
    width: 113,
    height: 136
  },
  button30: {
    top: 134,
    left: 0,
    width: 92,
    height: 41,
    position: "absolute"
  },
  text23: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  button29Stack: {
    top: 0,
    left: 0,
    width: 114,
    height: 175,
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
  button29StackStack: {
    width: 118,
    height: 175
  },
  group58: {
    width: 117,
    height: 162,
    marginLeft: 12
  },
  button31: {
    top: 135,
    left: 0,
    width: 88,
    height: 27,
    position: "absolute"
  },
  text21: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    fontFamily: "arial-regular",
    lineHeight: 14
  },
  image19: {
    top: 0,
    left: 0,
    width: 113,
    height: 136,
    position: "absolute"
  },
  button31Stack: {
    top: 0,
    left: 0,
    width: 113,
    height: 162,
    position: "absolute"
  },
  text22: {
    top: 138,
    color: "rgba(187,61,22,1)",
    position: "absolute",
    right: 0,
    fontSize: 22,
    fontFamily: "impact-regular"
  },
  button31StackStack: {
    width: 116,
    height: 162
  },
  group59Row: {
    height: 175,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  scrollArea3Stack: {
    width: 248,
    height: 329
  },
  scrollArea2Column: {
    width: 248,
    marginLeft: 6
  },
  group57Row: {
    height: 648,
    flexDirection: "row",
    marginRight: -1
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 1,
    marginLeft: 250
  }
});

export default MainScreen;
