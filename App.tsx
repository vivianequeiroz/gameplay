import React from 'react';
import * as Font from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';

import * as SplashScreen from 'expo-splash-screen';
import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

export default function App(): JSX.Element {
    async function loadFonts() {
        try {
            await Font.loadAsync({
                Inter_400Regular,
                Inter_500Medium,
                Rajdhani_500Medium,
                Rajdhani_700Bold
            });

            await SplashScreen.preventAutoHideAsync();
        } catch (error) {
            console.warn('Error downloading the fonts', error);
        } finally {
            SplashScreen.hideAsync();
        }
    }
    loadFonts();

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Home />
        </Background>
    );
}
