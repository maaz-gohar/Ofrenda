import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

const NotisficationContainer = ({ name, event, time }) => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <View style={styles.kt}>
                    <Text style={{ color: "#fff", fontWeight: "700" }}>KT</Text>
                </View>
                <Text style={styles.name}>{name}</Text>
                <Text>{event}</Text>
            </View>
            <Text style={{ alignSelf: "center", color: "#C2C2C2" }}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#F7F5FA',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 50,
        paddingVertical: 5,
        justifyContent: 'space-between',
        width: "95%",
        flexDirection: "row"
    },
    data: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    kt: {
        backgroundColor: "#686868",
        height: 30,
        width: 30,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontWeight: "500",
        paddingLeft: 10,
        paddingRight: 2
    }
});

export default NotisficationContainer;
