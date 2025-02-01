import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import AncestorsComponent from './components/ancestorsComponent';
import TabBar from '../components/tabBar';
import MainButton from '../components/button';
import { useRouter } from 'expo-router';
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function AddFamilyTree() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>

                <MainText
                    title={'Create Family Tree'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    <Text style={styles.seeAll}>See All</Text>
                    <View style={styles.btns}>
                        <LinearGradient
                            colors={[b1, b2]}
                            style={styles.gradient}
                        >
                            <Text style={styles.activeText}>Paternal Family Tree</Text>
                        </LinearGradient>
                        <View style={styles.inactive}>
                            <TouchableOpacity
                                onPress={() => router.push('/Dearly Department/familyTree')}
                            >
                                <Text style={styles.inactiveText}>Maternal Family Tree</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.centerView}>
                        <Image source={require('../../../assets/images/familyTree.png')} style={styles.img} />
                        <Text style={styles.text}>Your Memory Boards Appear Here</Text>
                    </View>

                </View>
                <View style={styles.endView}>
                    <MainButton title={"Add Family Member"} onPress={() => router.push('/Dearly Department/dearlyDepartmentForm')} />

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
        paddingTop: 30,
        zIndex: 10,
        marginTop: -35,
        justifyContent: "flex-start"
    },
    img: {
        width: 124,
        height: 124
    },
    text: {
        fontSize: 16,
        paddingTop: 15,
        fontWeight: "600"
    },
    seeAll: {
        alignSelf: "flex-end",
        paddingRight: 20,
        color: "rgba(67, 67, 67, 1)"
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
        alignSelf: "center"
    },
    gradient: {
        width: "51%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    inactive: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    activeText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000",
    },
    inactiveText: {
        fontSize: 12,
        fontWeight: "500",

    },
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },

});
