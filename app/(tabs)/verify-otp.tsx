import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MainButton from '../../components/auth/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../components/auth/top-text';
import { useRouter } from 'expo-router';

export default function VerifyOTP() {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const inputRefs: React.RefObject<TextInput>[] = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null)
    ];

    const handleOtp = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1 && index < otp.length - 1) {
            const nextInput = inputRefs[index + 1].current;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const router = useRouter();

    const checkOtp = async () => {
        const otpCode = otp.join("");
        if (otpCode.length !== 4) {
            alert("Please enter the full 4-digit OTP.");
            return;
        }
        console.log(otpCode)

        try {
            const response = await fetch("http://192.168.18.164:3000/api/otp/verify-otp", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ otp: otpCode }),
            });
          
            const text = await response.text(); // get raw text response
            console.log("Raw Response Text:", text);
          
            let data;
            try {
              data = JSON.parse(text); // try parsing it if it's JSON
            } catch (parseError) {
              console.error("Failed to parse JSON:", parseError);
              alert("Invalid response from server.");
              return;
            }
          
            console.log("Parsed Data:", data);
          
            if (response.ok ) {
              alert("OTP verified successfully!");
              setTimeout(() => {
                router.push("/dearly-departed/main-screen");
              }, 500);
            } else {
              alert(data.message || "Invalid OTP");
            }
          } catch (error) {
            console.error("OTP verification error:", error);
            alert("An error occurred. Please try again.");
          }
          
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Verify OTP'} showIcon={true} />
                <View style={styles.main}>
                    <Text style={styles.verify}>Verify OTP</Text>
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
                        <MainButton title={"Verify"} onPress={checkOtp} />
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
        marginTop: -35,
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
    }
});
