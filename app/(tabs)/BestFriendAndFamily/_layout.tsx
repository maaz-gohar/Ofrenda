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
                <Stack.Screen name="bffForm" />
                <Stack.Screen name="BffInformation" />
                <Stack.Screen name="BffMainScreen" />
                <Stack.Screen name="BffViewinformation" />
                <Stack.Screen name="BFFViewInformationLandscape" />
                <Stack.Screen name="DisplayData" />
                <Stack.Screen name="mainScreen" />
                <Stack.Screen name="modern" />
                <Stack.Screen name="selectCollegeDesign" />
                <Stack.Screen name="selectFrames" />
                <Stack.Screen name="selectImage" />
                <Stack.Screen name="successfull" />
                <Stack.Screen name="vintage" />

            </Stack>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}

