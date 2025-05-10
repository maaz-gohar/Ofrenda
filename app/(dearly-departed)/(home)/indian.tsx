import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  FontAwesome6,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import MainText from "../../../components/auth/top-text";
import AncestorsComponent from "../../../components/dearly-departed/ancestors-component";
import TabBar from "../../../components/auth/tab-bar";
import MainButton from "../../../components/auth/button";
import AncestorsImage from "../../../components/dearly-departed/ancestors-image";
import { useRouter } from "expo-router";
import FrameComponent from "../../../components/dearly-departed/frame-component";
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function Indain() {
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
          <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>
            Select Memory Boards
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20 }}
            bounces={false}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <FrameComponent
                text="Ofrenda"
                onPress={() =>
                  router.push("/(dearly-departed)/(home)/select-ofrenda")
                }
              />
              <FrameComponent
                text="Elegant"
                onPress={() => router.push("/(dearly-departed)/(home)/elegant")}
              />
              <FrameComponent
                text="Indian"
                isGradient={true}
                onPress={() => router.push("/(dearly-departed)/(home)/indian")}
              />
              <FrameComponent text="Scandinavian" />
              <FrameComponent text="Chinese" />
              <FrameComponent text="Japanese" />
              <FrameComponent text="Modernist" />
              <FrameComponent text="Another Mexican style" />
              <FrameComponent text="Glass photo frames " />
              <FrameComponent text="Classical Christian altar" />
              <FrameComponent text="Hebrew altar" />
              <FrameComponent text="Wall photo frames" />
              {/* <View style={styles.scrollContainer}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>More</Text>
                        </View> */}
            </View>
          </ScrollView>
          {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                        // onPress={() => router.push('/Dearly Department/selectOfrenda')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}

                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}

                        />
                    </View> */}
          <Text>Indian Screen</Text>
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
    alignItems: "center",
    paddingTop: 30,
    marginTop: -35,
  },
  text: {
    fontSize: 16,
    paddingTop: 15,
    color: "#7d7d7d",
  },
  gradient: {
    borderRadius: 250,
    marginHorizontal: 5,
  },
  scrollContainer1: {
    height: 40,
    // width: 120,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    height: 40,
    // width: 120,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#C2C2C2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 250,
    marginHorizontal: 5,
  },
});
