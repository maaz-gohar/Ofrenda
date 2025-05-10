import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
// import FloatingLabelInput from "../../../components/auth/input";
// import MainButton from "../../../components/auth/button";
import { LinearGradient } from "expo-linear-gradient";
// import MainText from "../../../components/auth/top-text";
// import NotisficationContainer from "../../../components/auth/notisfication-container";
// import TabBar from "../../../components/auth/tab-bar";
// import Wrapper from "../../../components/auth/wrapper";
import MainButton from "@/components/auth/button";
import MainText from "./auth/top-text";
import NotisficationContainer from "./auth/notisfication-container";
import Wrapper from "./auth/wrapper";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

interface NotificationProps {
  g1: string;
  g2: string;
}

export default function NotificaitionComponent({ g1, g2 }: NotificationProps) {
  const { height, width } = Dimensions.get("window");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText
          title={"Notification"}
          setting={true}
          showIcon={true}
          gradientColor={[g1, g2]}
        />

        <Wrapper>
          <NotisficationContainer
            name={"Kate Tanner"}
            event={"Upcoming Birthday"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={" Upcoming Death Anniversary"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={"Upcoming Birthday"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={" Upcoming Death Anniversary"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={"Upcoming Birthday"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={" Upcoming Death Anniversary"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={"Upcoming Birthday"}
            time={"11:00"}
          />
          <NotisficationContainer
            name={"Kate Tanner"}
            event={" Upcoming Death Anniversary"}
            time={"11:00"}
          />

          <MainButton title={"See All Notificaitons"} />
        </Wrapper>
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
    paddingHorizontal: 10,
  },
  addNewCard: {
    height: 90,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dotted",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  gradient: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
