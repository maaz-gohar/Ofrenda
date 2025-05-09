import { Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Define your routes */}
        <Tabs.Screen name="index" /> {/* This is your home screen */}
        <Tabs.Screen name="basicPackages" />
        <Tabs.Screen name="congratulations" />
        <Tabs.Screen name="addCard" />
        <Tabs.Screen name="forgotPassword" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="paymentMethod" />
        <Tabs.Screen name="notification" />
        <Tabs.Screen name="setting" />
        <Tabs.Screen name="signIn" />
        <Tabs.Screen name="signUp" />
        <Tabs.Screen name="summary" />
        <Tabs.Screen name="verifyOTP" />
        {/* Add your folder-based routes */}
        <Tabs.Screen name="BestFriendAndFamily" />
        <Tabs.Screen name="BffUser" />
        <Tabs.Screen name="Dearly Department" />
        <Tabs.Screen name="DearlyDepartmentUser" />
        <Tabs.Screen name="BucketList" />
      </Tabs>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
