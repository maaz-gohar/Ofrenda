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
                <Stack.Screen name="addCard" />
                <Stack.Screen name="bucketLists" />
                <Stack.Screen name="mainScreen" />
                <Stack.Screen name="memory" />
                <Stack.Screen name="naturalDisaster" />
                <Stack.Screen name="paymentMethod" />
                <Stack.Screen name="selectBucketList" />
                <Stack.Screen name="selectBucketListPremium" />
                <Stack.Screen name="summary" />
                <Stack.Screen name="thoughts" />

            </Stack>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}

