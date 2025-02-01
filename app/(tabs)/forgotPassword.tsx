import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from './components/input';
import MainButton from './components/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from './components/topText';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Forgot Password'}
                    showIcon={true}
                />
                <View style={[styles.main]}>
                    <Text style={styles.forgot}>
                        Forgot Password?
                    </Text>
                    <Text style={styles.forgottxt}>Enter your email or phone number to reset your password</Text>

                    <FloatingLabelInput placeholder="Email Address/Phone Number" iconName="envelope-o" iconType='FontAwesome' />
                    <View style={styles.btn}>
                        <MainButton title={"Reset"} onPress={() => router.push('/verifyOTP')} />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingTop: 30,
        zIndex: 10,
        marginTop: -15,
        justifyContent: "flex-start"
    },
    btn: {
        paddingTop: 40,
        width: "100%"
    },
    forgot: {
        fontWeight: "700",
        fontSize: 20,
        paddingVertical: 20
    },
    forgottxt: {
        fontFamily: "roboto",
        fontSize: 16,
        fontWeight: "400"
    }
});
