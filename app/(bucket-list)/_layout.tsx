// app/_layout.tsx
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";

const TAB_CONFIG = {
  "(home)": {
    label: "Home",
    activeColor: "#BC61D5CC", // Purple
    icon: (focused: boolean, color: string) => (
      <Ionicons name="home" size={24} color={focused ? color : "#484C52"} />
    ),
  },
  "(notifications)": {
    label: "Notification",
    activeColor: "#FFC70B", // Yellow
    icon: (focused: boolean, color: string) => (
      <MaterialIcons
        name="notifications-active"
        size={24}
        color={focused ? color : "#484C52"}
      />
    ),
  },
  "(profile)": {
    label: "Profile",
    activeColor: "#FFC70B", // Yellow
    icon: (focused: boolean, color: string) => (
      <Ionicons name="person" size={24} color={focused ? color : "#484C52"} />
    ),
  },
};

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => {
          const config = TAB_CONFIG[route.name as keyof typeof TAB_CONFIG];
          const activeColor = config?.activeColor || "#BC61D5CC";

          return {
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
              <Text
                style={[
                  styles.tabLabel,
                  focused && { color: activeColor, fontWeight: "bold" },
                ]}
              >
                {config?.label || ""}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {config.icon(focused, activeColor)}
                {focused && (
                  <View
                    style={[
                      styles.activeIndicator,
                      { backgroundColor: activeColor },
                    ]}
                  />
                )}
              </View>
            ),
          };
        }}
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
    bottom: -30,
    height: 3,
    width: "100%",
    borderRadius: 2,
  },
  tabLabel: {
    fontSize: 12,
    color: "#484C52",
    marginTop: 4,
  },
});
