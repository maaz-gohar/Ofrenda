import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import BucketListComponent from "@/components/bucket-list/bucket-list-component";
import MainText from "@/components/auth/top-text";
import Search from "@/components/bucket-list/search";

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function SelectBucketList() {
  const router = useRouter();

  const [params, setParams] = React.useState({ route: "", text: "" });

  const handleUpload = (route: string, text: string) => {
    setParams({ route, text });
    router.push({
      pathname: route,
      params: { text }, // Pass the title as a query parameter
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <MainText
          gradientColor={[b1, b2]}
          title={"Bucket Lists & Memories"}
          showIcon={true}
          setting={true}
        />
        <View style={[styles.main]}>
          <Search />
          <View style={styles.bucketContainer}>
            <View style={styles.bucketContainerText}>
              <Text style={styles.BucketText}>BucketList</Text>
              <Text style={styles.BucketText}>Memories</Text>
              <Text style={styles.BucketText}>Thoughts & Notes</Text>
            </View>
            <ScrollView
              bounces={false}
              style={{ height: 300 }}
              nestedScrollEnabled={true}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Destinations"
                  route="/bucket-list/bucket-lists"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/bucket-lists", "Destinations")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Kindergarten"
                  route="/bucket-list/memory"
                  image={require("@/assets/images/Group 1508.png")}
                  IconName="locked"
                  onPress={() =>
                    handleUpload("/bucket-list/memory", "Kindergarten")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Politics"
                  route="/bucket-list/thoughts"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/thoughts", "Politics")
                  }
                />
              </View>

              {/* Second Row */}
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Activities"
                  route="/bucket-list/bucket-lists"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/bucket-lists", "Activities")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Junior School"
                  route="/bucket-list/memory"
                  image={require("@/assets/images/Group 1508.png")}
                  IconName="locked"
                  onPress={() =>
                    handleUpload("/bucket-list/memory", "Junior School")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Religion"
                  route="/bucket-list/thoughts"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/thoughts", "Religion")
                  }
                />
              </View>

              {/* Third Row */}
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Restaurants"
                  route="/bucket-list/bucket-lists"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/bucket-lists", "Restaurants")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Best Friends"
                  route="/bucket-list/memory"
                  image={require("@/assets/images/Group 1508.png")}
                  IconName="locked"
                  onPress={() =>
                    handleUpload("/bucket-list/memory", "Best Friends")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Friendship"
                  route="/bucket-list/thoughts"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/thoughts", "Friendship")
                  }
                />
              </View>

              {/* Fourth Row */}
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Holidays"
                  route="/bucket-list/bucket-lists"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/bucket-lists", "Holidays")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="College Days"
                  route="/bucket-list/memory"
                  image={require("@/assets/images/Group 1508.png")}
                  IconName="locked"
                  onPress={() =>
                    handleUpload("/bucket-list/memory", "College Days")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Music"
                  route="/bucket-list/thoughts"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() => handleUpload("/bucket-list/thoughts", "Music")}
                />
              </View>
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Recipes"
                  route="/bucket-list/bucket-lists"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/bucket-lists", "Recipes")
                  }
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Music"
                  route="/bucket-list/memory"
                  image={require("@/assets/images/Group 1508.png")}
                  IconName="locked"
                  onPress={() => handleUpload("/bucket-list/memory", "Music")}
                />
                <BucketListComponent
                  showIcon={false}
                  showText={true}
                  text="Social Media"
                  route="/bucket-list/thoughts"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/thoughts", "Social Media")
                  }
                />
              </View>
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Holidays"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Holidays")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="College Days"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "College Days")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Music"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Music")
                  }
                />
              </View>
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Holidays"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Holidays")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="College Days"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "College Days")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Music"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Music")
                  }
                />
              </View>
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Holidays"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Holidays")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="College Days"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "College Days")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Music"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Music")
                  }
                />
              </View>
              <View style={styles.row}>
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Holidays"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Holidays")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="College Days"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "College Days")
                  }
                />
                <BucketListComponent
                  showIcon={true}
                  showText={false}
                  IconName="locked"
                  text="Music"
                  route="/bucket-list/payment-method"
                  image={require("@/assets/images/Group 1508.png")}
                  onPress={() =>
                    handleUpload("/bucket-list/payment-method", "Music")
                  }
                />
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/BucketList/paymentMethod")}
          >
            <View style={styles.bucketContainer2}>
              {/* <View style={styles.overlay}>
                                <View style={styles.icon}>
                                    <FontAwesome5 name={"crown"} size={16} color="rgba(255, 255, 0, 1)" />
                                </View>
                                <Text style={styles.premium}>Premium</Text>
                            </View> */}
              <Text style={styles.textBig}>Tool Kit Lists</Text>
              <ScrollView
                bounces={false}
                style={{ height: 300, maxWidth: 400, width: "100%" }}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={false}
                    showText={true}
                    IconName="locked"
                    text="Evacuation Kit"
                    route="/bucket-list/natural-disaster"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/natural-disaster", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Estate Planning"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Depression Recovery "
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Earthquake kit"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Will"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Dating list "
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Fire/ flood kit"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Financial Plan"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Young Parents"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text=" Job Loss"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Pet Emergency "
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="College Preparation"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Digital Security"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Medical Emergency"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={true}
                    IconName="locked"
                    text="Job Search"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Digital Security"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Medical Emergency"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Job Search"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
                <View style={styles.row}>
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Digital Security"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Holidays")
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Medical Emergency"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload(
                        "/bucket-list/payment-method",
                        "College Days"
                      )
                    }
                  />
                  <BucketListComponent
                    showIcon={true}
                    showText={false}
                    IconName="locked"
                    text="Job Search"
                    route="/bucket-list/payment-method"
                    image={require("@/assets/images/Group 1508.png")}
                    onPress={() =>
                      handleUpload("/bucket-list/payment-method", "Music")
                    }
                  />
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
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
  bucketContainer: {
    width: "100%",
    backgroundColor: "#F7F5FA",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    maxWidth: 360,
  },
  bucketContainer2: {
    width: "100%",
    backgroundColor: "#F7F5FA",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    position: "relative",
    paddingHorizontal: 22,
    maxWidth: 360,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "rgba(138, 138, 138, 0.6)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  textBig: {
    fontWeight: "bold",
    fontSize: 23,
    paddingVertical: 10,
  },
  bucketContainerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignItems: "center",
  },
  BucketText: {
    fontWeight: "700",
    width: 112,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  premium: {
    fontWeight: "bold",
    fontSize: 30,
  },
  row: {
    flexDirection: "row",
    marginVertical: 0,
  },
});
