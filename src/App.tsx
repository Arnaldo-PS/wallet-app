import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

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
            <SafeAreaProvider>
                <GestureHandlerRootView
                    style={{
                        flex: 1
                    }}
                >
                    <PaperProvider>
                        <BottomSheetModalProvider>
                            <NavigationContainer>
                                <StatusBar style='light' translucent backgroundColor='transparent' />
                                <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: theme.COLORS.BLACK_100 }}>
                                    <Routes />
                                </SafeAreaView>
                            </NavigationContainer>
                        </BottomSheetModalProvider>
                    </PaperProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </ThemeProvider >
    );
}

export default App;
