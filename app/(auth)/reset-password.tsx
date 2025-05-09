import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FloatingLabelInput from "../../components/auth/input";
import MainButton from "../../components/auth/button";
import MainText from "../../components/auth/top-text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { API_URL } from "../../configs/config";
import { useForm } from "react-hook-form";

type FormValues = { 
  password: string;
};

export default function ResetPassword() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const { control, handleSubmit } = useForm<FormValues>();

  const resetPasswordHandler = async (data: FormValues) => {
    console.log("values :", email, data.password);
    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword: data.password,
        }),
      });

      const result = await response.json();
      console.log("data:", result);

      if (response.ok) {
        router.push("/sign-in");
      } else {
        alert(result.message || "Invalid Email");
      }
    } catch (error) {
      console.error("error:", error);
      alert("An error occurred. Please try again.");
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
        <MainText title="Reset Password" showIcon={true} />
        <View style={styles.main}>
          <Text style={styles.forgottxt}>
            Enter your new password to reset your password
          </Text>

          <FloatingLabelInput
            name="password"
            control={control}
            placeholder="Password"
            iconType="Ionicons"
            eyeIcon={true}
            iconName="lock-closed-outline"
            secureTextEntry
          />

          <View style={styles.btn}>
            <MainButton
              title="Reset"
              onPress={handleSubmit(resetPasswordHandler)}
            />
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
