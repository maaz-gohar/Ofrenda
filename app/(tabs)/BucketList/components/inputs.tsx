import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Inputs() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                placeholderTextColor={"#000"}
                style={styles.input1}
            />
            {/* Line between inputs */}
            <View style={styles.separator} />
            <TextInput
                placeholder='Note'
                placeholderTextColor={"#000"}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        width: "100%"
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    input1: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 22,
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',

    },
});
