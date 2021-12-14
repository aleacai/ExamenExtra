import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from 'expo-constants';
import Pantalla1 from "../Screens/Pantalla1";
import Pantalla2 from "../Screens/Pantalla2";
import Pantalla3 from "../Screens/Pantalla3";


const Top = createMaterialTopTabNavigator();
export default function TopNavigator() {
    return (
        <Top.Navigator
            initialRouteName="Pantalla1"
            tabBarOptions={{
                activeTintColor: "#c41616",
                inactiveTintColor: "#050505",
                showLabel: true,
                labelStyle: {
                    fontSize: 12
                },
                style: {
                    paddingTop: Constants.statusBarHeight,
                    paddingBottom: 5,
                    backgroundColor: "#f3f3f1"
                }
            }
            }
        >
            <Top.Screen
            name="Pantalla1"
            component={Pantalla1}

            />
            <Top.Screen
            name="Pantalla2"
            component={Pantalla2}
            
            />
            <Top.Screen
            name="Pantalla3"
            component={Pantalla3}
            
            />
        </Top.Navigator>
    )
}