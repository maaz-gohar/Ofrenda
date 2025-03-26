import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { usePathname } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";

interface FrameComponentProps {
    text: string;
    isGradient?: boolean;
    onPress?: () => void;
}

export default function FrameComponent({ text, isGradient = false, onPress }: FrameComponentProps) {
    const pathname = usePathname();

    const getGradientColors = (): [string, string, ...string[]] => {
        if (pathname.includes('dearly-departed')) {
            return ["#FFC70B", "rgba(255, 248, 225, 1)"];
        } else if (pathname.includes('best-friend-and-family')) {
            return ["rgba(94, 164, 253, 1)", "rgba(244, 248, 253, 1)"];
        }
        return ["#FFC70B", "rgba(255, 248, 225, 1)"];
    };

    const Container = isGradient ? LinearGradient : View;
    const containerProps = isGradient ? { colors: getGradientColors() } : {};

    return (
        <TouchableOpacity onPress={onPress}>
            <Container style={styles.container} {...containerProps}>
                <Text style={styles.text}>{text}</Text>
            </Container>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 250,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "rgba(194, 194, 194, 1)"
    },
    text: {
        fontWeight: "600",
        fontSize: 16,
    }
});