import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Touchable,
    TouchableOpacity,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import MainButton from '../components/button';
import { useRouter } from 'expo-router';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function Successfully() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Successfully'}
                />

                <View style={[styles.main]}>
                    <Text style={styles.successText}>SUCCESS!</Text>
                    <Text style={styles.messageText}>Your data has been updated successfully.</Text>
                    <LinearGradient
                        colors={[b1, b2]}
                        style={styles.gradient}
                    >
                        <Ionicons name='checkmark-circle' size={97} color={"#fff"} />
                    </LinearGradient>
                    <MainButton title={"View Family Tree"} onPress={() => router.push('/Dearly Department/bffMainScreen')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginTop: -25,
    },
    successText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
    },
    gradient: {
        borderRadius: "50%",
        marginBottom: 40
    },
});


