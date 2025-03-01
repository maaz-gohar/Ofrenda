import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
} from 'react-native';
import MainText from '../components/topText';
import TabBar from '../components/tabBar';
import { useLocalSearchParams } from 'expo-router';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function DisplayData() {
    const params = useLocalSearchParams();
    const text = params.text || "Default Title"; // Fallback if text is not provided
    const notes = params.notes || "No notes available."; // Fallback if notes are not provided

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Bucket Lists & Memories'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                <View style={[styles.main]}>
                    <View style={styles.bgContain}>
                        <ImageBackground
                            source={require('../../../assets/images/Group 2094.png')}
                            style={styles.bg}
                            resizeMode="stretch"
                        >
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.granded}>{text}</Text>
                                <Text style={styles.boldText}>Notes</Text>
                                <Text style={styles.normalText}>{notes}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
            <TabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        paddingTop: 30,
        marginTop: -35,
        width: "100%",
    },
    bgContain: {
        width: "90%",
    },
    bg: {
        width: "100%",
        minHeight: 500,
        paddingVertical: 50,
        alignItems: "center",
        alignSelf: "center",
        // justifyContent:"center"
    },
    granded: {
        fontSize: 40,
        fontFamily: "Cochin",
        fontWeight: "500",
    },
    boldText: {
        fontSize: 25,
        fontFamily: "Cochin",
        fontWeight: "700",
        paddingTop: 10,
        alignSelf: "center",
        width: 300,
        textAlign: "center",
    },
    normalText: {
        fontWeight: "500",
        marginTop: 5,
        paddingHorizontal: 30,
        textAlign: "center",
    },
    social: {
        flexDirection: "row",
        paddingTop: 10,
    },
    greybg: {
        margin: 4,
        backgroundColor: "rgba(228, 228, 228, 1)",
        height: 30,
        width: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
});