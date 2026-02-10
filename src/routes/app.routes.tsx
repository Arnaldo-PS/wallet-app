import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabRoutes } from "./tab.routes";
import { Wallet } from '../screens/App/Wallet'
const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            id={undefined}
            initialRouteName="TabRoutes"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="TabRoutes"
                component={TabRoutes}
            />
            <Screen
                name="Wallet"
                component={Wallet}
            />
        </Navigator>
    )
}
