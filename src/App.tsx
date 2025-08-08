import React, { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native"
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"
import { Routes } from './routes'
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import theme from "../src/styles/theme"

const App: React.FC = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const [fontsLoaded] = useFonts({
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
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar style='light' translucent backgroundColor='transparent' />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.COLORS.BLACK_100
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
