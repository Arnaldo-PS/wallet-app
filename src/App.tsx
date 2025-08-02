import React, { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native"
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import {DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "../src/styles/theme"

const App: React.FC = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const [ fontsLoaded ] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    useEffect(() => {
    async function prepare() {
        try {
        } catch (e) {
            console.warn(e);
        } finally {
            if (fontsLoaded) setAppIsReady(true);
        }
        }
        prepare();
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar
            style='dark'
            translucent
            backgroundColor='transparent'
            />
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                }}
                onLayout={onLayoutRootView}>
                <Text style={{
                    fontFamily: 'Poppins_400Regular', fontSize: 20 }}>
                    App carregado!
                </Text>
            </View>
        </ThemeProvider>
    );
}

export default App;
