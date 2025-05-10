import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <StatusBar style="auto" />
    </>
  );
}
