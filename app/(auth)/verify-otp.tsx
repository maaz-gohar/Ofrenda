import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import MainText from "@/components/auth/top-text";
import MainButton from "@/components/auth/button";
import { API_URL } from "../../configs/config";

export default function VerifyOtp() {
  const { email } = useLocalSearchParams();
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();

  const confirmOtp = async () => {
    if (otpCode.length !== 4) {
      Alert.alert("Error", "Please enter the full 4-digit OTP.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/otp/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpCode }),
      });
      console.log("Response status:", response.status); // Log the response status for debugging
      console.log("values :", email, otpCode); // Log the response headers for debugging
      const text = await response.text();
      console.log("Response text:", text); // Log the response text for debugging
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        Alert.alert("Error", "Invalid response from server.");
        return;
      }
      console.log("Response data:", data); // Log the parsed response data
      if (response.ok) {
        Alert.alert("Success", "OTP verified successfully.", [
          {
            text: "OK",
            onPress: () =>
              router.push({
                pathname: "/reset-password",
                params: { email }, // Pass email to reset-password screen
              }),
          },
        ]);
      } else {
        Alert.alert("Error", data.message || "Invalid OTP");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Try again.");
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText title={"Verify OTP"} showIcon={true} />
        <View style={styles.main}>
          <Text style={styles.verify}>Verify OTP</Text>
          <Text>Enter The Verificaiton Code</Text>
          <View style={{ paddingVertical: 20, paddingHorizontal: 60 }}>
            <OtpInput
              numberOfDigits={4}
              onTextChange={setOtpCode}
              focusColor="#FFC70B"
              focusStickBlinkingDuration={500}
              theme={{
                pinCodeTextStyle: { color: "#000", fontSize: 20 },
                pinCodeContainerStyle: {
                  borderColor: "#c2c2c2",
                },
              }}
            />
          </View>
          <View style={styles.btn}>
            <MainButton title={"Reset"} onPress={confirmOtp} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
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
    justifyContent: "flex-start",
  },
  btn: {
    width: "100%",
  },
  verify: {
    fontWeight: "700",
    fontSize: 20,
    paddingVertical: 20,
  },
});
