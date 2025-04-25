import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import FloatingLabelInput from '../../components/auth/input';
import MainButton from '../../components/auth/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../components/auth/top-text';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function BasicPackage() {
    const { height, width } = Dimensions.get("window");


    return (

        <ScrollView contentContainerStyle={styles.scrollViewContainer}
            bounces={false}>
            <MainText
                title={'Basic Packages'}
            />
            <View style={[styles.main, { height, width }]}>
                <Text style={styles.Subscription}>
                    Select Subscription Plan
                </Text>

                <View style={styles.packagesContainer}>
                    <LinearGradient
                        colors={[b1, b2]}
                        style={styles.gradient}
                    // locations={[0, 0.9, 1]}
                    >
                        <View style={styles.containerTop}>
                            <FontAwesome5 name='crown' color="#000" size={16} style={styles.crownicon} />
                            <Text style={styles.toptext}><Text style={styles.zero}>$0/</Text>Monthly</Text>
                        </View>

                        <Text style={styles.basic}>Basic Plan</Text>
                        <View style={styles.mainContent}>
                            <View style={styles.content}>
                                <FontAwesome6 name='check' color="#000" size={16} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <FontAwesome6 name='check' color="#000" size={16} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                        </View>
                    </LinearGradient>

                </View>
                <View style={styles.packagesContainer}>
                    <LinearGradient
                        colors={[b1, b2]}
                        style={styles.gradient}
                    // locations={[0, 0.9, 1]}
                    >
                        <View style={styles.containerTop}>
                            <FontAwesome5 name='crown' color="#000" size={16} style={styles.crownicon} />
                            <Text style={styles.toptext}><Text style={styles.zero}>$25/</Text>Monthly</Text>
                        </View>

                        <Text style={styles.basic}>Basic Plan</Text>
                        <View style={styles.mainContent}>
                            <View style={styles.content}>
                                <FontAwesome6 name='check' color="#000" size={16} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <FontAwesome6 name='check' color="#000" size={16} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                            <View style={styles.content}>
                                <Entypo name='cross' color="#000" size={16} style={styles.icon} />
                                <Text style={styles.contentText}>Lorem Ipsum Text is dummy text</Text>
                            </View>
                        </View>
                    </LinearGradient>

                </View>


            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
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
        justifyContent: "flex-start"
    },
    Subscription: {
        fontWeight: "700",
        fontSize: 20,
        paddingVertical: 20
    },
    packagesContainer: {
        width: "90%",
        paddingVertical: 15

    },
    gradient: {
        width: "100%",
        paddingVertical: 15, // Adjust vertical padding
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",

    },
    containerTop: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    crownicon: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: "50%"
    },
    zero: {
        fontSize: 18
    },
    toptext: {
        fontSize: 14,
        fontWeight: "600"
    },
    basic: {
        fontWeight: "600",
        alignSelf: "flex-start",
        fontSize: 18,
        paddingLeft: 20,
        paddingVertical: 10
    },
    mainContent: {
        paddingTop: 10,
        alignSelf: "flex-start"
    },
    content: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        paddingLeft: 20,
        paddingTop: 5
    },
    contentText: {
        fontSize: 14,
        paddingHorizontal: 5

    },
    icon: {
        marginLeft: -3
    }

});
