import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  FontAwesome6,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import MainText from "../../../components/auth/top-text";
import MainButton from "../../../components/auth/button";
import { useLocalSearchParams, useRouter } from "expo-router";
import TabBar from "../../../components/auth/tab-bar";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function Successfully() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const handleViewDetails = () => {
    const forwardParams = {
      selectedFrame: params.selectedFrame,
      frameImage: params.frameImage,
      worked: params.worked,
      name: params.name,
      memory: params.memory,
      health: params.health,
      hobbies: params.hobbies,
      dob: params.dob,
      dod: params.dod,
      noteableContribution: params.noteableContribution,
      movie: params.movie,
      food: params.food,
      relationship: params.relationship,
      ancestorRelationship: params.ancestorRelationship,
      dynamicFields: params.dynamicFields,
      selectedImage: params.selectedImage,
    };
    console.log("success", forwardParams);

    router.push({
      pathname: "/(dearly-departed)/(home)/bff-main-screen",
      params: forwardParams,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText title={"Successfully"} showIcon={true} setting={true} />

        <View style={[styles.main]}>
          <Text style={styles.successText}>SUCCESS!</Text>
          <Text style={styles.messageText}>
            Your data has been updated successfully.
          </Text>
          <LinearGradient colors={[b1, b2]} style={styles.gradient}>
            <Ionicons name="checkmark-circle" size={97} color={"#fff"} />
          </LinearGradient>
          <MainButton title={"Memory Board"} onPress={handleViewDetails} />
        </View>
      </ScrollView>
      {/* <TabBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  main: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    marginTop: -35,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  gradient: {
    borderRadius: 500,
    marginBottom: 40,
  },
});
