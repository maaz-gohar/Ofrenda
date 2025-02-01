import { Tabs } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '.';
import ExploreScreen from './explore';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import SignUp from './signUp';

const Stack = createNativeStackNavigator();

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: { display: 'none' },
          headerShown: false
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}

            />

          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </Tabs>
    </GestureHandlerRootView>
  );
}
