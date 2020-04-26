import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
 
} from "react-native";
import { Container, CheckBox, Content, Body, Button ,ListItem, Form,Item , Input,Label} from 'native-base';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import firebase from "../../../../../../FireBase";
const db = firebase.firestore();

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function EditProfile() {
  var user = firebase.auth().currentUser;
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [placeOfWork, setPlaceOfWork] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [weight, setWeight] = useState("");
  const [colesterol, setColesterol] = useState("");
  const [fastingGlucose, setFastingGlucose] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [a1c, setA1c]= useState("");


  const [checked, setChecked] = useState(false);
  
  const INITIALALLERGENS = {
    "wheat": false,
    "milk": false,
    "soy": false,
    "seasame": false,
    "shelfish": false
  }
  const [allergensSelected, setAllergensSelected] = useState(INITIALALLERGENS);

  function onUpdateAllergen(key){
    setAllergensSelected(prev => {return {...prev, [key]: !prev[key]}})
  }

  

  function onUpdate(){
    db.collection("users").doc(user.uid).update({
      firstName,
      lastName,
      phoneNumber,
      address,
      placeOfWork,
      numOfPeople,
      weight,
      colesterol,
      a1c,
      fastingGlucose,


    })
  }


//   return (
//     <View style={styles.container}>
//       <View style={styles.group7}>
//         <View style={styles.group6}>
//           <Text style={styles.firstName}>First name:</Text>
//           <TextInput
//             placeholder="Lorem Ipsum"
//             placeholderTextColor="rgba(230, 230, 230,1)"
//             style={styles.textInput}
//             onChangeText={(text) => {setFirstName(text)}}
//           ></TextInput>
//           <Text style={styles.lastName}>Last name:</Text>
//           <TextInput
//             placeholder="Lorem Ipsum"
//             placeholderTextColor="rgba(230, 230, 230,1)"
//             style={styles.textInput2}
//             onChangeText={(text) => {setLastName(text)}}
//           ></TextInput>
//           <Text style={styles.phoneNumber}>Phone number:</Text>
//           <TextInput
//             placeholder="Lorem Ipsum"
//             placeholderTextColor="rgba(230, 230, 230,1)"
//             style={styles.textInput3}
//             onChangeText={(text) => {setPhoneNumber(text)}}
//           ></TextInput>
//           <Text style={styles.address}>Address:</Text>
//           <TextInput
//             placeholder="Lorem Ipsum"
//             placeholderTextColor="rgba(230, 230, 230,1)"
//             style={styles.textInput4}
//             onChangeText={(text) => {setAddress(text)}}
//           ></TextInput>
//         </View>
//         <View style={styles.group2}>
//           <View style={styles.allergiesRow}>
//             <Text style={styles.allergies}>Allergies and Restrictions:</Text>
//             <TouchableOpacity style={styles.button4}>
//               <IoniconsIcon name="md-add" style={styles.icon4}></IoniconsIcon>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.scrollArea}>
//           <ScrollView
//             horizontal={false}
//             contentContainerStyle={styles.scrollArea_contentContainerStyle}
//           >
//             <View style={styles.group3Row}>
//               <View style={styles.group3}>
//                 <View style={styles.shellfishFreeRow}>
//                   <Text style={styles.shellfishFree}>Shellfish-Free</Text>
//                   <TouchableOpacity style={styles.button53}>
//                     <EntypoIcon name="cross" style={styles.icon5}></EntypoIcon>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <View style={styles.group4}>
//                 <View style={styles.fishFree3Row}>
//                   <Text style={styles.fishFree3}>Fish-Free</Text>
//                   <TouchableOpacity style={styles.button2}>
//                     <EntypoIcon name="cross" style={styles.icon2}></EntypoIcon>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <View style={styles.group5}>
//                 <View style={styles.glutenFreeRow}>
//                   <Text style={styles.glutenFree}>Gluten-Free</Text>
//                   <TouchableOpacity style={styles.button3}>
//                     <EntypoIcon name="cross" style={styles.icon3}></EntypoIcon>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={[ {backgroundColor: "rgba(248,217,28,1)",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//         alignSelf:"center",
//         paddingRight: 16,
//         paddingLeft: 16,
//         borderRadius: 5, marginTop:30, width:wp("20%"), height:hp("5%")}]}
//         onPress={onUpdate}
//       >
//         <Text style={{color: "rgba(118,118,118,1)",
//     fontSize: 17,
//     fontFamily: "roboto-500"}}>SAVE</Text>
//       </TouchableOpacity>
//       {/* <CupertinoButtonPurple
//         style={styles.cupertinoButtonPurple}
//       ></CupertinoButtonPurple> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,1)"
//   },
//   group7: {
//     // width: 318,
//     // height: 471,
//     width: wp("100%"),//318,
//     height: hp("60%"),//471,
//     // marginTop: 70,
//     marginTop: hp("5%"),
//     // marginLeft: 48,
//     alignItems:"center",
//     // alignSelf:"center"
//   },
//   group6: {
//     // width: 318,
//     // height: 383
//     // width: wp("50%"),
//     // height: hp("50%"),
//     // alignItems:"center"
//     // alignContent:"center"
//     // alignSelf:"center"
//     // alignItems:"center"
//   },
//   firstName: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 18,
//     fontFamily: "roboto-300",
//     marginLeft: 2
//   },
//   textInput: {
//     width: 318,
//     height: 45,
//     backgroundColor: "rgba(161,197,89,1)",
//     color: "rgba(111,111,111,1)",
//     borderRadius: 5,
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 10
//   },
//   lastName: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 18,
//     fontFamily: "roboto-300",
//     marginTop: 10,
//     marginLeft: 2
//   },
//   textInput2: {
//     width: 318,
//     height: 45,
//     backgroundColor: "rgba(161,197,89,1)",
//     color: "rgba(111,111,111,1)",
//     borderRadius: 5,
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 10
//   },
//   phoneNumber: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 18,
//     fontFamily: "roboto-300",
//     marginTop: 10,
//     marginLeft: 2
//   },
//   textInput3: {
//     width: 318,
//     height: 45,
//     backgroundColor: "rgba(161,197,89,1)",
//     color: "rgba(111,111,111,1)",
//     borderRadius: 5,
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 10
//   },
//   address: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 18,
//     fontFamily: "roboto-300",
//     marginTop: 10,
//     marginLeft: 2
//   },
//   textInput4: {
//     width: 318,
//     height: 45,
//     backgroundColor: "rgba(161,197,89,1)",
//     color: "rgba(111,111,111,1)",
//     borderRadius: 5,
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 10
//   },
//   group2: {
//     width: 238,
//     height: 20,
//     flexDirection: "row",
//     marginTop: 36,
//     marginLeft: 1
//   },
//   allergies: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 18,
//     fontFamily: "roboto-700",
//     marginTop: 1
//   },
//   button4: {
//     width: 13,
//     height: 20,
//     marginLeft: 12
//   },
//   icon4: {
//     color: "rgba(133,133,133,1)",
//     fontSize: 20
//   },
//   allergiesRow: {
//     height: 20,
//     flexDirection: "row",
//     flex: 1
//   },
//   scrollArea: {
//     width: 313,
//     height: 20,
//     marginTop: 12,
//     marginLeft: 1
//   },
//   scrollArea_contentContainerStyle: {
//     width: 313,
//     height: 20,
//     flexDirection: "row"
//   },
//   group3: {
//     width: 115,
//     height: 20,
//     flexDirection: "row"
//   },
//   shellfishFree: {
//     color: "rgba(0,0,0,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 3
//   },
//   button53: {
//     width: 20,
//     height: 20,
//     marginLeft: 5
//   },
//   icon5: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 20
//   },
//   shellfishFreeRow: {
//     height: 20,
//     flexDirection: "row",
//     flex: 1
//   },
//   group4: {
//     width: 90,
//     height: 20,
//     flexDirection: "row",
//     marginLeft: 5
//   },
//   fishFree3: {
//     color: "rgba(0,0,0,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 3
//   },
//   button2: {
//     width: 20,
//     height: 20,
//     marginLeft: 9
//   },
//   icon2: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 20
//   },
//   fishFree3Row: {
//     height: 20,
//     flexDirection: "row",
//     flex: 1
//   },
//   group5: {
//     width: 96,
//     height: 20,
//     flexDirection: "row",
//     marginLeft: 7
//   },
//   glutenFree: {
//     color: "rgba(0,0,0,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     marginTop: 3
//   },
//   button3: {
//     width: 20,
//     height: 20
//   },
//   icon3: {
//     color: "rgba(161,197,89,1)",
//     fontSize: 20
//   },
//   glutenFreeRow: {
//     height: 20,
//     flexDirection: "row",
//     flex: 1
//   },
//   group3Row: {
//     height: 20,
//     flexDirection: "row",
//     flex: 1
//   },
//   cupertinoButtonPurple: {
//     width: 100,
//     height: 44,
//     width: wp("50%"),
//     height: hp("10%"),
//     elevation: 45,
//     shadowOffset: {
//       width: 2,
//       height: 0
//     },
//     shadowColor: "rgba(0,0,0,1)",
//     shadowOpacity: 0.27,
//     shadowRadius: 15,
//     // marginTop: 70,
//     // marginLeft: 157
//     // marginTop:10,
//     alignSelf:"center"
//   }
// });

return (

  <ScrollView>

    <View style={{ flexDirection: "column", marginLeft: 15, marginTop: 5  }}>
        <Text style={{ color: "black", fontSize: 20, fontFamily: "roboto-300", }}>Personal Info:</Text>
    </View>


  <View style={styles.container}>

      <View style={[styles.btnContainer]}>

        <View style={{ flex:1, flexDirection: "column",}}>
          <Text style={styles.firstName}>First Name:</Text>
          <TextInput
            style={styles.input1}
           // placeholder="John"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setFirstName(text)}}
            />
        </View>

        <View style={{flex:1, flexDirection: "column", width: wp("10%"), }}>
        <Text style={styles.firstName}>Last Name:</Text>
          <TextInput
            style={styles.input2}
           // placeholder="Smith"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setLastName(text)}}
            />
        </View>

      </View>

    
      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(230,230,230,1)"
          onChangeText={(text) => {setPhoneNumber(text)}}
        />

      </View>
  
   

      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>Address(optional):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(230,230,230,1)"
          onChangeText={(text) => {setAddress(text)}}
          />
      </View>

      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>Place of Work (optional):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(230,230,230,1)"
          onChangeText={(text) => { setPlaceOfWork(text) }}
          />
      </View>

      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>How many people in your family (optional):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(230,230,230,1)"
          onChangeText={(text) => { setNumOfPeople(text) }}/>
      </View>  
  </View>
  
    <View style={{ flexDirection: "column", marginLeft: 15  }}>
      <View >
        <Text style={{ color: "black", fontSize: 20, fontFamily: "roboto-300", }}>Allergies and Restrictions:</Text>
      </View>
      {/* <View >
        <TouchableOpacity>
          <Text style={{ color: "rgba(161,197,89,1)", fontSize: 17, fontFamily: "roboto-300", }}>Add Restrictions</Text>
        </TouchableOpacity>
      </View> */}
    </View>

    <View style={{marginTop:wp("2%")}}>
          {/* <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"rgba(106,164,27,1)" }}>Allergens</Text> */}
          
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["wheat"]} onPress={() => {
                  onUpdateAllergen("wheat")
                }}
              />
              <Body>
                <Text>wheat</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["milk"]} onPress={() => {
                  onUpdateAllergen("milk")
                }}
              />
              <Body>
                <Text>milk</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["soy"]} onPress={() => {
                  onUpdateAllergen("soy")
                }}
              />
              <Body>
                <Text>soy</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={allergensSelected["seasame"]} onPress={() => {
                  onUpdateAllergen("seasame")
                }}
              />
              <Body>
                <Text>seasame</Text>
              </Body>
            </ListItem>
            <ListItem style={styles.list_view}>
              <CheckBox color="rgba(106,164,27,1)" checked={ allergensSelected["shelfish"] } onPress={() => {
                  onUpdateAllergen("shelfish")
                  // setAllergensSelected(prev => {onUpdateAllergen("shelfish")})
                }}
              />
              <Body>
                <Text>shelfish</Text>
              </Body>
            </ListItem>
          </View>


    <View style={{ flexDirection: "column", marginLeft: 15, marginTop: 5  }}>
        <Text style={{ color: "black", fontSize: 20, fontFamily: "roboto-300", }}>Health Info:</Text>
    </View>


  <View style={styles.container}>
      <View style={[styles.btnContainer]}>

      <View style={{ flex:1, flexDirection: "column",}}>
          <Text style={styles.firstName}>Weight (pounds):</Text>
          <TextInput
            style={styles.input1}
           // placeholder="John"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setWeight(text)}}
            />
        </View>

        <View style={{flex:1, flexDirection: "column", }}>
        <Text style={styles.firstName}>Fasting Glucose:</Text>
          <TextInput
            style={styles.input2}
           // placeholder="Smith"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setFastingGlucose(text)}}
            />
        </View>

      </View>

      <View style={[styles.btnContainer]}>

      <View style={{ flex:1, flexDirection: "column",}}>
          <Text style={styles.firstName}>A1C:</Text>
          <TextInput
            style={styles.input1}
           // placeholder="John"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setA1c(text)}}
           />
        </View>

        <View style={{flex:1, flexDirection: "column", }}>
        <Text style={styles.firstName}>Colesterol:</Text>
          <TextInput
            style={styles.input2}
           // placeholder="Smith"
            placeholderTextColor="rgba(230, 230, 230,1)"
            onChangeText={(text) => {setColesterol(text)}}
            />
        </View>

      </View>
  </View>

  <View style={{ flexDirection: "column", marginLeft: 15, marginTop: 5  }}>
        <Text style={{ color: "black", fontSize: 20, fontFamily: "roboto-300", }}>Security:</Text>
  </View>


  <View style={styles.container}>

    
      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>Email:</Text>
        <TextInput
          style={styles.input}
          //placeholder="Enter Your Email"
          placeholderTextColor="rgba(230,230,230,1)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => { setEmail(text) }}/>
      </View>

      <View style={{ flexDirection: "column", width: wp("90%"), }}>
        <Text style={styles.firstName}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(230,230,230,1)"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => { setPassword(text) }}/>
      </View>

      <TouchableOpacity
        style={[ {backgroundColor: "rgba(248,217,28,1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        //paddingRight: 16,
        //paddingLeft: 16,
        borderRadius: 5, marginTop:30, width:wp("20%"), height:hp("5%")}]}
        onPress={onUpdate}>
        <Text style={{color: "rgba(118,118,118,1)", fontSize: 17, fontFamily: "roboto-500"}}>SAVE</Text>
      </TouchableOpacity>

  </View>
  </ScrollView>

);
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#fff',
    //flex: 2,
    flexDirection:"column",
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 10,
   
   
  },
  

  input1: {
    flex: 1,
    width: wp("42%"),
    //backgroundColor: "rgba(122,179,52,1)",
    padding: 15,
    marginBottom: 10,
    marginRight: 5,
    borderColor: "rgba(122,179,52,1)",
    borderWidth: 1,
    borderRadius: 5
    //flex: 2,
   //marginRight: 10,

  },

  input2: {
    flex: 1,
    width: wp("44%"),
    //backgroundColor: "rgba(122,179,52,1)",
    padding: 15,
    marginBottom: 10,
    marginLeft: 5,
    borderColor: "rgba(122,179,52,1)",
    borderWidth: 1,
    borderRadius: 5
  },

  input: {
    flex: 1,
    width: wp("90%"),
    //backgroundColor: "rgba(122,179,52,1)",
    padding: 15,
    marginBottom: 10,
    borderColor: "rgba(122,179,52,1)",
    borderWidth: 1,
    borderRadius: 5
   // marginLeft: 5
  },




  btnContainer: { 
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width:  wp("90%"), 
    //marginRight: 5
   
  },
  firstName: {
        color: "rgba(161,197,89,1)",
        fontSize: 18,
        fontFamily: "roboto-300",
        marginLeft: 2
      },

  userBtn: {
    backgroundColor: "rgba(122,179,52,1)",
    padding: 13,
    width: "45%",
    marginTop: 25,
  },

  textBtn: {
    backgroundColor: "#fff",
    padding: 13,
    width: "45%",
    marginTop: 25,
  },

  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  },
  btnTxt2: {
    fontSize: 18,
    padding:5,
    textAlign: "center",
    color: "rgba(248,186,28,1)"
  },
  
  email: {
    color: "rgba(127,202,23,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    textAlign:"right"
  },

  list_view:{
    width:wp("90%")
  }

  
  
});


export default EditProfile;
