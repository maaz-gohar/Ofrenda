import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import FloatingLabelInput from "../../components/auth/input";
import MainButton from "../../components/auth/button";
import { LinearGradient } from "expo-linear-gradient";
import MainText from "../../components/auth/top-text";
import { useRouter } from "expo-router";
import { API_URL } from "../../configs/config";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
    email: string;
  };

export default function ForgotPassword() {
  const router = useRouter();
    const { control, handleSubmit } = useForm<FormValues>();


  const forgetPassword = async (email: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();
      console.log("data ", data);

      if (response.ok) {
        router.push({
          pathname: "/verify-otp",
          params: { email },
        });
      } else {
        alert(data.message || "Invalid Email");
      }
    } catch (error) {
      console.error("error:", error);
      alert("An error occurred. Please try again.");
    }
  };
   const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log("Form Data:", data);
      forgetPassword(data.email);
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
        <MainText title={"Forgot Password"} showIcon={true} />
        <View style={[styles.main]}>
          <Text style={styles.forgot}>Forgot Password?</Text>
          <Text style={styles.forgottxt}>
            Enter your email or phone number to reset your password
          </Text>

          <FloatingLabelInput
            name="email"
            control={control}
            placeholder="Email Address"
            iconName="mail"
            iconType="Ionicons"
          />
          <View style={styles.btn}>
            <MainButton title={"Reset"} onPress={handleSubmit(onSubmit)} />
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
    paddingTop: 40,
    width: "100%",
  },
  forgot: {
    fontWeight: "700",
    fontSize: 20,
    paddingVertical: 20,
  },
  forgottxt: {
    fontFamily: "roboto",
    fontSize: 16,
    fontWeight: "400",
  },
});
