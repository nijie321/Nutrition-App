
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import {useNavigation, StackActions} from '@react-navigation/native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import {useRoute, useNavigation} from "@react-navigation/native";
// import {useNavigation, StackActions} from '@react-navigation/native';

//import {DetailMeal} from './src/Components/DetailedMeal/src/component/DetailedMeal';
//const navigation = useNavigation();
class FlatListItem extends Component {
    
    constructor(props) {
        super(props);
        // const navigation = useNavigation();
        
        // // need to bind `this` to access props in handler
        // this.onPressButton = this.onPressButton.bind(this);

        this.state = {
            activeRowKey: null
        };
    }
    render() {

        //const { navigate } = this.props.navigation;
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }; //end const swipeSettings

        return (
            <Swipeout {...swipeSettings}>
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: this.props.index % 2 == 0 ? '#defbc2' : '#e1f4f3'
                        }}>
                            <Image
                                source={{ uri: this.props.item.imageUrl }}
                                style={{ width: 120, height: 120, margin: 10, borderRadius: 5 }}
                            >
                            </Image>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                height: "auto",
                                width: "auto",
                            }}>
                                {/* <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.price}</Text> */}
                                <Text style={{ flexWrap: 'wrap', fontSize: 18, fontFamily: "roboto-regular", marginTop: 8 }} >{this.props.item.name}</Text>
                                <Text style={{ fontFamily: "impact-regular", margin: 5, fontSize: 15, fontWeight: "bold", color: "#fda856" }}>Price: ${this.props.item.price}</Text>

                            </View>
                        </View>
                        <View style={{
                            height: 1,
                            backgroundColor: 'white'
                        }}>

                        </View>
                    </View>
                    
                </TouchableOpacity>
            </Swipeout>
           

        ); //end return

    } //end render 

} //end class FlatListItem

//create new class to handle returning to Detail View



const styles = StyleSheet.create({
    // flatListItem: {
    //     flex: 1,
    //     paddingTop: 10,
    //     paddingHorizontal: 50,
    //     backgroundColor: '#fff',

    // },
    name: {
        //flex: 1,
        width: 210,
        height: 54,
        color: "rgba(0,0,0,1)",
        fontSize: 23,
        fontFamily: "roboto-regular",
        //justifyContent: 'flex-start'


    },
    // price: {
    //     color: "#fda856",
    //     fontSize: 18,
    //     fontFamily: "impact-regular",
    //     //marginLeft: 1
    // },

    // imageUrl: {
    //     //flex: 1,
    //     flexDirection: "row",
    //     width: 160,
    //     height: 112,
    //     borderRadius: 10,
    //     //justifyContent: 'flex-end',
    // }

});

// export default class BasicFlatList extends Component {
    export default class FavList extends Component {
        
    constructor(props) {
        super(props);
        //const navigation = useNavigation();
        //navigation = useNavigation();
        this.state = ({
            deletedRowKey: null,
        });
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        // onPressButton() {
        //     const { navigate } = this.props.navigation;
        
        //     var options = {
        //       title: strings.app_name,
        //       content: strings.create_message,
        //       positiveText: strings.OK,
        //       onPositive: () => navigate("DashboardScreen")
        //     };
        //     var dialog = new DialogAndroid();
        //     dialog.set(options);
        //     dialog.show();
        //   }
          
        return (
            <View style={{ flex: 1, marginTop: 2, padding: 20, }}>
                <Text>{navigate}</Text>
                <FlatList

                    data={flatListData}
                    renderItem={({ item, index }) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                                 <TouchableOpacity onPress= {() => this.props.navigate ('Detail Meal', {meal_info:"Meal 3"})}>

                                </TouchableOpacity>
                                
                            </FlatListItem> 
                            
                        );


                    }} 
                /> 

                
            </View>
        );
    }
}