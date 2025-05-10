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
import { Ionicons } from "@expo/vector-icons";
import FloatingLabelInput from "../../components/auth/input";
import MainButton from "../../components/auth/button";
import { LinearGradient } from "expo-linear-gradient";
import MainText from "../../components/auth/top-text";
import { useRouter } from "expo-router";
import { API_URL } from "../../configs/config";
import { useForm, SubmitHandler } from "react-hook-form";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { control, handleSubmit, watch } = useForm<FormValues>();
  const router = useRouter();

  const registerUser = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      console.log("response", response.status);
      const data = await response.json();
      console.log("Response Data:", data);
      router.push("sign-in");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    registerUser(data.firstName, data.lastName, data.email, data.password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
        <MainText title="Sign Up" showIcon={true} />

        <View style={styles.main}>
          <View>
          <View style={styles.btns}>
            <LinearGradient colors={[b1, b2]} style={styles.gradient}>
              <Text style={styles.activeText}>Sign Up</Text>
            </LinearGradient>
            <View style={styles.inactive}>
              <TouchableOpacity onPress={() => router.push("/sign-in")}>
                <Text style={styles.inactiveText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FloatingLabelInput
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            placeholder="First Name"
            iconPosition="left"
            iconName="person-outline"
          />

          <FloatingLabelInput
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            placeholder="Last Name"
            iconPosition="left"
            iconName="person-outline"
          />

          <FloatingLabelInput
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            }}
            placeholder="Email Address"
            iconPosition="left"
            
            iconName="envelope-o"
            iconType="FontAwesome"
          />

          <FloatingLabelInput
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters required" },
            }}
            placeholder="Create Password"
            iconPosition="left"
            iconName="lock-closed-outline"
            secureTextEntry={!isPasswordVisible}
            eyeIcon={true}
            onKeyPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
          </View>
        </View>

        <View style={styles.endView}>
          <MainButton title="Create Account" onPress={handleSubmit(onSubmit)} />
          <Text style={styles.account}>
            Do you already have an account?
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text style={styles.signInText}> Sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
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
  },
  btns: {
    borderWidth: 1,
    borderColor: "#FFC70B",
    width: "90%",
    borderRadius: 32,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
  passwordValidation: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingLeft: 20,
    marginTop: 10,
  },
  validationText: {
    marginLeft: 5,
    fontSize: 14,
    paddingTop: 3,
  },
  endView: {
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  account: {
    fontSize: 14,
  },
  signInText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: 3,
  },
});