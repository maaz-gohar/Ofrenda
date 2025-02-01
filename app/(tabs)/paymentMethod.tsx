import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image
} from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from './components/input';
import MainButton from './components/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from './components/topText';
import { useRouter } from 'expo-router';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";


export default function PaymentMethod() {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Payment Method'}
                    description={'Select payment method or add new payment method'}
                    showIcon={true}
                />
                <View style={[styles.main, { height, width }]}>
                    <View style={styles.addNewCard}>
                        <LinearGradient
                            colors={[b1, b2]}
                            style={styles.gradient}
                        >
                            <FontAwesome6 name='plus' color="#000" size={16} />
                        </LinearGradient>
                        <Text>Add New Card</Text>
                    </View>

                    <View style={styles.details}>
                        <View style={styles.imgText}>
                            <Image
                                source={require('../../assets/images/mastercard.png')}
                                style={styles.imagecard}
                            />
                            <View style={{ paddingLeft: 20, justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Mastercard</Text>
                                <Text>Debit Card **** 6518</Text>
                            </View>
                        </View>
                        <View style={styles.backicon}>
                            <FontAwesome name='angle-right' color="#000" size={16} />
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.imgText}>
                            <Image
                                source={require('../../assets/images/visa.png')}
                                style={styles.imagevisa}
                            />
                            <View style={{ paddingLeft: 20, justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Mastercard</Text>
                                <Text>Debit Card **** 6518</Text>
                            </View>
                        </View>
                        <View style={styles.backicon}>
                            <FontAwesome name='angle-right' color="#000" size={16} />
                        </View>
                    </View>
                    {/* <Text style={styles.otherMethod}>Other Method</Text> */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginTop: -15,
        justifyContent: "flex-start"
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
        marginTop: 20
    },
    gradient: {
        height: 40,
        width: 40,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    },
    imgText: {
        flexDirection: "row"
    },
    cardText: {
        fontWeight: "500",
        fontSize: 16
    },
    details: {
        backgroundColor: "#FED859",
        height: 90,
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        width: "90%",
        marginTop: 20,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    imagecard: {
        width: 55,
        height: 43,
    },
    imagevisa: {
        width: 63,
        height: 20,
        alignSelf: "center"
    },
    backicon: {
        height: 26,
        width: 26,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: "50%"
    },
    otherMethod: {
        fontWeight: "800",
        paddingVertical: 20,
        fontSize: 18,
        alignSelf: "flex-start",
        paddingLeft: 20
    }
});
