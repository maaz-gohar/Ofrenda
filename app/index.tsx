import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import MainButton from "../components/auth/button";

export default function HomeScreen() {
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.main, { height, width }]}>
        <ImageBackground
          source={require("../assets/images/auth/main_bg.jpg")}
          style={[styles.bg_main, { width }]}
          resizeMode="stretch"
        >
          <View style={styles.content}>
            <Text style={styles.text}>Create Your</Text>
            <Text style={styles.text}>Digital Memory Board</Text>
            <Text style={styles.text_small}>
              Invites users to engage in the process of creating their
              memorials.
            </Text>
            <MainButton
              title={"Get Started"}
              // onPress={() => router.push("(auth)/sign-in")}
              // onPress={() => router.push("(tabs)/dearly-departed/main-screen")}
              onPress={() =>
                router.push("(dearly-departed)/(home)/main-screen")
              }
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bg_main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text_small: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 40,
    width: "85%",
  },
});
