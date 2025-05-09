import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useForm, SubmitHandler } from "react-hook-form";

import FloatingLabelInput from "../../components/auth/input";
import MainButton from "../../components/auth/button";
import MainText from "../../components/auth/top-text";
import { API_URL } from "../../configs/config";
import Wrapper from "@/components/auth/wrapper";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

type FormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [isPasswordTooShort, setIsPasswordTooShort] = useState(false);
  const router = useRouter();
  const { control, handleSubmit, watch } = useForm<FormValues>();

  const passwordValue = watch("password");

  useEffect(() => {
    if (passwordValue && passwordValue.length < 7) {
      setIsPasswordTooShort(true);
    } else {
      setIsPasswordTooShort(false);
    }
  }, [passwordValue]);

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        router.push("/dearly-departed/main-screen");
      } else {
        alert(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    loginUser(data.email, data.password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
        <MainText title="Sign In" showIcon={true} />
        <Wrapper>
          <View>
            <View style={styles.btns}>
              <View style={styles.inactive}>
                <TouchableOpacity onPress={() => router.push("/sign-up")}>
                  <Text style={styles.inactiveText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                <Text style={styles.activeText}>Login</Text>
              </LinearGradient>
            </View>

            <FloatingLabelInput
              name="email"
              control={control}
              placeholder="Email Address"
              
              iconName="mail"
              iconType="Ionicons"
              iconPosition="left"
            />

            <FloatingLabelInput
              name="password"
              control={control}
              placeholder="Password"
              iconType="Ionicons"
              eyeIcon={true}
              iconPosition="left"
              iconName="lock-closed-outline"
              secureTextEntry
            />

              <TouchableOpacity onPress={() => router.push("/forgot-password")}>
                <View style={styles.forgetPassword}>
                  <Text>Forget Password?</Text>
                </View>
              </TouchableOpacity>
          </View>
        {/* </View> */}

        <View style={styles.endView}>
          <MainButton title="Login" onPress={handleSubmit(onSubmit)} />
          <Text>
            Don't have an account?
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text style={styles.signInText}> Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
        </Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
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
    justifyContent: "space-between",
  },
  btns: {
    borderWidth: 1,
    borderColor: "#FFC70B",
    width: "100%",
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 6,
  },
  gradient: {
    width: "51%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
  },
  inactive: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
  },
  activeText: {
    fontSize: 16,
    color: "#000",
  },
  inactiveText: {
    fontSize: 16,
    color: "#FFC70B",
  },
  forgetPassword: {
    alignSelf: "flex-end",
    paddingLeft: 20,
    marginTop: 10,
  },
  endView: {
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
    flex:1,
    width: "100%",
  },
  signInText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: 3,
    marginBottom: -3,
  },
});
