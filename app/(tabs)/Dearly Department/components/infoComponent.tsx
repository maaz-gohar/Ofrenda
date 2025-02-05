import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { usePathname } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";

export default function InfoComponent({ title, imagePath, onPress }) {


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={imagePath} style={styles.img} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: "center",
        marginHorizontal: 5,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(194, 194, 194, 1)",
        flexDirection: "row",
        width: "100%",
        flex: 1
    },
    text: {
        fontWeight: "600",
        fontSize: 16,
    },
    img: {
        height: 60,
        width: 60,
        margin: 10,
    }
});