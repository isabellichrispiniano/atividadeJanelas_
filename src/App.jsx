import React from "react";
import {Text, SafeAreaView,} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Begin from "./components/Begin";
import Login from "./components/Login";
import Register from "./components/Register";


const Stack = createNativeStackNavigator();

export default () =>{
    return(
        <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Entrar' component={Begin}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Registrar' component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)
    
}