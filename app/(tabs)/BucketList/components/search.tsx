import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Search() {
    return (
        <View style={styles.searchContainer}>
            <Ionicons
                name='search'
                size={17.33}
                color={"rgba(188, 97, 213, 0.8)"}
                style={{ paddingHorizontal: 20 }}
            />
            <TextInput
                placeholder='Search'
                style={{ flex: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        width: "100%",
        backgroundColor: "#F7F5FA",
        borderColor: "#C2C2C2",
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 12,
        flexDirection: "row",
        marginBottom: 15 // Add some bottom margin if needed
    }
});