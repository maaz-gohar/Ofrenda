import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                {/* Define your routes */}

                <Stack.Screen name="bffMainScreenLandscape" />
                <Stack.Screen name="bffMainScreen" />
                <Stack.Screen name="displayData" />

            </Stack>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}

