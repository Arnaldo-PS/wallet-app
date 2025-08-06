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
import { Login } from './screens/Auth/Login'
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import theme from "../src/styles/theme"
import { LinearGradient } from 'expo-linear-gradient';


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
        <LinearGradient
            colors={['rgba(42,123,155,1)', 'rgba(30,140,10,100)', 'rgba(87,199,133,1)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ flex: 1 }}
        >
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar style='dark' translucent backgroundColor='transparent' />
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Routes />
                    </View>
                </NavigationContainer>
            </ThemeProvider>
        </LinearGradient>
    );
}

export default App;
