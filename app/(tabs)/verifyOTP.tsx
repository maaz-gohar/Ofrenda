import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MainButton from './components/button';
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from 'react-native-gesture-handler';
import MainText from './components/topText';
import { useRouter } from 'expo-router';

export default function VerifyOTP() {
    // const { height, width } = Dimensions.get("window");

    const [otp, setOtp] = useState(["", "", "", ""]);


    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const handleOtp = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);


        if (text.length === 1 && index < otp.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    }

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Verify OTP'}
                    showIcon={true}
                />
                <View style={[styles.main]}>
                    <Text style={styles.verify}>
                        Verify OTP
                    </Text>
                    <Text style={styles.verifytxt}>Enter the verification code</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={inputRefs[index]}
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleOtp(text, index)}
                                autoFocus={index === 0}
                            />
                        ))}
                    </View>
                    <View style={styles.endView}>
                        <MainButton title={"Verify"} onPress={() => router.push('/signIn')} />
                        {/* <Text style={styles.account}>Don't have a account? <Text style={styles.registerText}>Register</Text></Text>
                        <View style={styles.orContainer}>
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.6)']}
                                style={styles.leftLine}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            />
                            <Text style={styles.orText}>OR</Text>
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0)']}
                                style={styles.rightLine}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            />
                        </View>
                        <View style={styles.socialIcons}>
                            <View style={styles.iconContainer}>
                                <FontAwesome name="facebook-f" size={24} color="#000" />
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name="google" size={24} color="#000" />
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name="apple" size={24} color="#000" />
                            </View>
                        </View> */}
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
    verify: {
        fontWeight: "700",
        fontSize: 20,
        paddingVertical: 20
    },
    verifytxt: {
        fontFamily: "roboto",
        fontSize: 16,
        fontWeight: "400"
    },
    otpContainer: {
        width: "80%",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 20
    },
    otpText: {
        height: 80,
        width: 54,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        borderRadius: 6,
        textAlign: "center",
        fontSize: 18
    },
    endView: {
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 30,
        width: "100%"
    },
    account: {
        marginTop: -20
    },
    registerText: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'center',
        width: "50%"
    },
    leftLine: {
        flex: 1,
        height: 2,
        marginRight: 10,
    },
    rightLine: {
        flex: 1,
        height: 2,
        marginLeft: 10,
        color: "#666666"
    },
    orText: {
        fontSize: 16,
        color: "#666666"
    },
    socialIcons: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFC70B',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
});
