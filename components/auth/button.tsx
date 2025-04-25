import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const MainButton: React.FC<{
    title?: string;
    onPress?: () => void;
    showIcon?: boolean;
    gradientColor?: string[];
    shadowColor?: string;
    fontSize?: number;
    disabled?: boolean;
    style?: object;
}> = ({
    title = '',
    onPress,
    showIcon = false,
    gradientColor = ["#FFC70BE5", "#ffe9a1"],
    shadowColor = "#FFC70BE5",
    fontSize = 18, 
}) => {
    return (
        <View style={styles.btn_view}>
            <TouchableOpacity
                style={[styles.button, { shadowColor }]}
                onPress={onPress}
            >
                <LinearGradient colors={gradientColor} style={styles.gradient}>
                    {showIcon && (
                        <Ionicons
                            name="lock-closed"
                            color="#000"
                            size={20}
                            style={styles.icon}
                        />
                    )}
                    <Text style={[styles.text, { fontSize }]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn_view: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 20,
    },
    button: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 50,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.37,
        shadowRadius: 4,
        elevation: 5,
    },
    gradient: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 50,
    },
    text: {
        color: "#000",
        fontWeight: "600",
        textAlign: "center",
    },
    icon: {
        marginRight: 10,
    },
});

export default MainButton;
