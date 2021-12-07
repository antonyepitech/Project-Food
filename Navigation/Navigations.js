import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icon } from 'react-native-elements'
import Home from "../Home/Home";
import {Button, StyleSheet, TouchableHighlight} from "react-native";
import {DrawerActions as navigation} from "@react-navigation/routers/src/DrawerRouter";


const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home" options={{color: "white"}}>
            <Stack.Screen name="Home" component={Home} options={ ({ navigation }) => ({
                headerRight: () => (
                    <TouchableHighlight underlayColor="#539d68" onPress={() => alert("toto")} style={styles.container}>
                        <Icon name={"more-vert"} color={"white"} type={"material"}></Icon>
                    </TouchableHighlight>
                ),
                headerStyle: {
                    backgroundColor: '#66c082',
                },
                headerTitleStyle:{
                    color: "white",
                }

            })}/>
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        justifyContent: "center",
        borderRadius: 2,
        marginRight: 5,
    },

})

export default MyStack