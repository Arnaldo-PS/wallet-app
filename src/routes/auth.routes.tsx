import React from "react";
import { View, Text } from "react-native";
import { Login } from '../screens/Auth/Login'
import { Register } from '../screens/Auth/Register'
import { ForgotPassword } from "../screens/Auth/ForgotPassword";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialPage } from "@src/screens/Auth/InitialPage";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            id={undefined}
            initialRouteName="InitialPage"
            screenOptions={{
                headerShown: false,
            }}

        >
            <Screen name="InitialPage" component={InitialPage}/>
            <Screen name="Login" component={Login}/>
            <Screen name="Register" component={Register}/>
            <Screen name="ForgotPassword" component={ForgotPassword}/>
        </Navigator>
    )
}
