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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import FloatingLabelInput from "../../components/auth/input";
import MainButton from "../../components/auth/button";
import { LinearGradient } from "expo-linear-gradient";
import MainText from "../../components/auth/top-text";
import { useRouter } from "expo-router";
import { API_URL } from "../../configs/config";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function SignUp(props: { segment: string }) {
  const [value, setValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordTooShort, setIsPasswordTooShort] = useState(false);

  useEffect(() => {
    if (value.length < 8) {
      setIsPasswordTooShort(true);
    } else {
      setIsPasswordTooShort(false);
    }
  }, [value]);

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    console.log("data",  firstName,
        lastName,
        email,
        password,)
    try {
      const response = await fetch(
        `${API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );
      console.log("response", response.status);
      const data = await response.json();
      console.log(data); // Or handle success
    } catch (error) {
      console.error("Registration error:", error);
    }
    router.push('sign-in');
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
        <MainText title="Sign Up" showIcon={true} />
        <View style={[styles.main]}>
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
              placeholder="First Name"
              iconName="person-outline"
              value={firstName}
              onChangeText={setFirstName}
            />
            <FloatingLabelInput
              placeholder="Last Name"
              iconName="person-outline"
              value={lastName}
              onChangeText={setLastName}
            />
            <FloatingLabelInput
              placeholder="Email Address"
              iconName="envelope-o"
              iconType="FontAwesome"
              value={email}
              onChangeText={setEmail}
            />
            <FloatingLabelInput
              placeholder="Create Password"
              iconName="lock-closed-outline"
              eyeIcon={true}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setValue(text); // Optional: keep your existing logic
              }}
              secureTextEntry={!isPasswordVisible}
            />
            {isPasswordTooShort && (
              <View style={styles.passwordValidation}>
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#FFC70B"
                />
                <Text style={styles.validationText}>
                  Must be 8 characters long.
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.endView}>
          <MainButton title="Create Account" onPress={registerUser} />
          <Text style={styles.account}>
            Do you already have an account?
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text style={styles.signInText}>Sign in</Text>
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
    // fontWeight: "bold",
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
    // marginTop: 10,
    fontSize: 14,
  },
  signInText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: 3,
    marginBottom: -3,
  },
});
