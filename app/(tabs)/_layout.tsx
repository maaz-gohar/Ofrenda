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
        <Stack.Screen name="index" /> {/* This is your home screen */}
        <Stack.Screen name="basicPackages" />
        <Stack.Screen name="congratulations" />
        <Stack.Screen name="addCard" />
        <Stack.Screen name="forgotPassword" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="paymentMethod" />
        <Stack.Screen name="notification" />
        <Stack.Screen name="setting" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="summary" />
        <Stack.Screen name="verifyOTP" />

        {/* Add your folder-based routes */}
        <Stack.Screen name="BestFriendAndFamily" />
        <Stack.Screen name="BffUser" />
        <Stack.Screen name="Dearly Department" />
        <Stack.Screen name="DearlyDepartmentUser" />
        <Stack.Screen name="BucketList" />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}