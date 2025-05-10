import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";
import MainText from "../../../components/auth/top-text";
import { useLocalSearchParams, useRouter } from "expo-router";
import MainButton from "../../../components/auth/button";
import TabBar from "../../../components/auth/tab-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSearchParams } from "expo-router/build/hooks";

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function BffMainScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [isLandscape, setIsLandscape] = useState(false);
  const searchParams = useSearchParams();
  const [selectedFrameData, setSelectedFrameData] = useState<{
    imageUri?: any;
    frameId?: string;
  }>({});
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load selected frame
        const storedFrame = await AsyncStorage.getItem("selectedFrame");
        if (storedFrame) {
          const { imageUri } = JSON.parse(storedFrame);
          setSelectedFrameData({ imageUri });
        }

        // Load uploaded image from params or storage
        if (params.selectedImage) {
          setUploadedImage(params.selectedImage.toString());
        } else {
          const storedImage = await AsyncStorage.getItem("uploadedImage");
          if (storedImage) setUploadedImage(storedImage);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [params.selectedImage]);

  const frameImages = {
    frame1: require("../../../assets/images/frames/frame1.png"),
    frame2: require("../../../assets/images/frames/frame2.png"),
    frame3: require("../../../assets/images/frames/frame3.png"),
  };

  const updateOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    const isLandscape = [
      ScreenOrientation.Orientation.LANDSCAPE_LEFT,
      ScreenOrientation.Orientation.LANDSCAPE_RIGHT,
    ].includes(orientation);

    setIsLandscape(isLandscape);
    await ScreenOrientation.lockAsync(
      isLandscape
        ? ScreenOrientation.OrientationLock.PORTRAIT_UP
        : ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );

    setTimeout(() => ScreenOrientation.unlockAsync(), 2000);
  };

  // Handle orientation changes
  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => {
        setIsLandscape(
          [
            ScreenOrientation.Orientation.LANDSCAPE_LEFT,
            ScreenOrientation.Orientation.LANDSCAPE_RIGHT,
          ].includes(orientationInfo.orientation)
        );
      }
    );

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  const handleViewDetails = () => {
    router.push({
      pathname: "/(dearly-departed)/(home)/display-data",
      params: {
        selectedImage: params.selectedImage,
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
      },
    });
  };

  const selectedImage = searchParams.get("selectedImage");

  if (isLandscape) {
    return (
      <View style={styles.fullScreenContainer}>
        {selectedFrameData.imageUri && (
          <Image
            source={selectedFrameData.imageUri}
            style={styles.fullScreenFrame}
            resizeMode="contain"
            pointerEvents="none"
          />
        )}

        {selectedImage && (
          <TouchableOpacity
            onPress={handleViewDetails}
            style={styles.imageContentContainer2}
          >
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullScreenContent}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={updateOrientation}
          style={styles.fullScreenIcon}
        >
          <MaterialIcons name="fullscreen-exit" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText
          title="Dearly Departed"
          showIcon={true}
          setting={true}
          gradientColor={[b1, b2]}
        />

        <View style={styles.main}>
          <View style={styles.frameContainer}>
            {selectedFrameData.imageUri ? (
              <>
                <Image
                  source={selectedFrameData.imageUri}
                  style={styles.frameImage}
                  resizeMode="cover"
                  pointerEvents="none"
                />
                {selectedImage && (
                  <TouchableOpacity
                    onPress={handleViewDetails}
                    style={styles.imageContentContainer}
                  >
                    <Image
                      source={{ uri: selectedImage }}
                      style={styles.uploadedImage}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <Text style={styles.noFrameText}>No frame selected</Text>
            )}

            <TouchableOpacity
              onPress={updateOrientation}
              style={[styles.icon, styles.fullScreenButton]}
            >
              <MaterialIcons name="fullscreen" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.controlsContainer}>
            <View style={styles.actionButtonsContainer}>
              {["Edit", "Share", "Cast", "Print"].map((action) => (
                <TouchableOpacity key={action} style={styles.actionButton}>
                  <Text style={styles.buttonText}>{action}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.infoButtonContainer}>
              <MainButton
                title="View Information"
                onPress={handleViewDetails}
                gradientColor={[b1, b2]}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <TabBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  main: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 30,
    marginTop: -35,
  },
  frameContainer: {
    width: "90%",
    height: 282,
    borderRadius: 8,
    borderWidth: 3,
    // position: 'relative',
    // overflow: 'hidden',
    backgroundColor: "#f0f0f0",
  },
  frameImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    flex: 1,
  },
  imageContentContainer: {
    position: "relative",
    width: "32%",
    height: "60%",
    top: "2%",
    left: "42%",
    zIndex: 1,
    // backgroundColor: 'rgba(255,255,255,0.9)',
    // borderRadius: 8,
    overflow: "hidden",
  },
  imageContentContainer2: {
    position: "relative",
    width: "100%",
    height: "100%",
    // top: '5%',
    right: "40.2%",
    zIndex: 1,
    // backgroundColor: 'rgba(255,255,255,0.9)',
    // borderRadius: 8,
    overflow: "hidden",
  },
  uploadedImage: {
    width: "50%",
    height: "50%",
  },
  noFrameText: {
    textAlign: "center",
    marginTop: 120,
    color: "#666",
    fontSize: 16,
  },
  controlsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: b1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonText: {
    // color: '#fff',
    fontWeight: "600",
  },
  infoButtonContainer: {
    width: "100%",
    marginVertical: 15,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenFrame: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
  },
  fullScreenContent: {
    position: "absolute",
    width: "10%",
    height: "21%",
    top: "15%",
    right: "5%",
    zIndex: 1,
    // backgroundColor: 'rgba(255,255,255,0.9)',
    // borderRadius: 8,
    overflow: "hidden",
  },
  fullScreenIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    zIndex: 2,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 3,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  fullScreenButton: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
