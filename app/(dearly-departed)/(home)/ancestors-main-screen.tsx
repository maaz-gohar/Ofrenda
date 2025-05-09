import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  FontAwesome6,
  FontAwesome5,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
// import MainText from '../../../components/auth/top-text';
import AncestorsComponent from "../../../components/dearly-departed/ancestors-component";
import TabBar from "../../../components/auth/tab-bar";
import { useRouter } from "expo-router";
import MainText from "@/components/auth/top-text";
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function AncestorsMainScreen() {
  // const { height, width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText title={"Dearly Departed"} showIcon={true} setting={true} />
        <View style={[styles.main]}>
          <AncestorsComponent
            imagePath={require("../../../assets/images/ancestors1.png")}
            text={"View Memory Boards"}
            onPress={() => router.push("/dearly-departed/memory-boards")}
          />
          <AncestorsComponent
            imagePath={require("../../../assets/images/ancestors2.png")}
            text={"View Relationship Tree"}
            onPress={() => router.push("/dearly-departed/add-family-tree")}
          />
          <AncestorsComponent
            imagePath={require("../../../assets/images/info.jpg")}
            text={"View Information"}
            onPress={() => router.push("/dearly-departed/view-information")}
          />
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
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 30,
    zIndex: 10,
    marginTop: -35,
    justifyContent: "flex-start",
  },
  endView: {
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    // marginBottom: 30,
    backgroundColor: "#ffffff",
  },
});
