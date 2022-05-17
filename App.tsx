import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    Inter_400Regular,
                    Inter_500Medium,
                    Rajdhani_500Medium,
                    Rajdhani_700Bold
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Background>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Home />
            </Background>
        </View>
    );
}
