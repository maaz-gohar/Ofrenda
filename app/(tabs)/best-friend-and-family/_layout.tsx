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
                <Stack.Screen name="bff-form" />
                <Stack.Screen name="bff-information" />
                <Stack.Screen name="bff-main-screen" />
                <Stack.Screen name="bff-view-information" />
                <Stack.Screen name="display-data" />
                <Stack.Screen name="main-screen" />
                <Stack.Screen name="modern" />
                <Stack.Screen name="select-college-design" />
                <Stack.Screen name="select-frames" />
                <Stack.Screen name="select-image" />
                <Stack.Screen name="successfull" />
                <Stack.Screen name="vintage" />

            </Stack>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}

