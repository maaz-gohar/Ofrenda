// app/_layout.tsx
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";

const TAB_CONFIG = {
  "(home)": {
    label: "Home",
    icon: (focused: boolean) => (
      <Ionicons
        name={focused ? "home" : "home"}
        size={24}
        color={focused ? "#FFC70B" : "#484C52"}
      />
    ),
  },
  "(notifications)": {
    label: "Notification",
    icon: (focused: boolean) => (
      <MaterialIcons
        name={focused ? "notifications-active" : "notifications-active"}
        size={24}
        color={focused ? "#FFC70B" : "#484C52"}
      />
    ),
  },
  "(profile)": {
    label: "Profile",
    icon: (focused: boolean) => (
      <Ionicons
        name={focused ? "person" : "person"}
        size={24}
        color={focused ? "#FFC70B" : "#484C52"}
      />
    ),
  },
};

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 70,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarItemStyle: {
            height: 70,
            paddingVertical: 8,
          },
          tabBarButton: (props) => {
            const { children, onPress, accessibilityState, style } = props;
            return (
              <Pressable
                onPress={onPress}
                accessibilityState={accessibilityState}
                android_ripple={{ color: "transparent" }}
                style={[{ opacity: 1 }, style]}
              >
                {children}
              </Pressable>
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
              {TAB_CONFIG[route.name as keyof typeof TAB_CONFIG]?.label || ""}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {TAB_CONFIG[route.name as keyof typeof TAB_CONFIG]?.icon(focused)}
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        })}
      >
        {Object.keys(TAB_CONFIG).map((name) => (
          <Tabs.Screen key={name} name={name as any} />
        ))}
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    bottom: -30, // Position below the icon
    height: 3,
    width: "100%", // Width of the border
    backgroundColor: "#FFC70B",
    borderRadius: 2,
  },
  tabLabel: {
    fontSize: 12,
    color: "#484C52",
    marginTop: 4,
  },
  tabLabelFocused: {
    color: "#FFC70B",
    fontWeight: "bold",
  },
});
