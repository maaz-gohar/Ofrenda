import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from '../../components/auth/input';
import MainButton from '../../components/auth/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../components/auth/top-text';
import { useRouter } from 'expo-router';
import TabBar from '../../components/auth/tab-bar';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function PaymentMethod() {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    const [selectedPayment, setSelectedPayment] = useState<number | null>(null); // State to track selected payment

    // Function to handle payment selection
    const handlePaymentSelection = (amount:number) => {
        setSelectedPayment(amount);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Payment Method'}
                    showIcon={true}
                    gradientColor={[b1, b2]}
                    setting={true}
                />
                <View style={styles.main}>

                    <Text style={styles.paymentText}>Select payment method or add new payment method</Text>
                    <View style={styles.paymentContainer}>

                        <View style={styles.paymentButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.paymentButton, selectedPayment === 5 && styles.selectedPaymentButton]}
                                onPress={() => handlePaymentSelection(5)}
                            >
                                <Text style={styles.paymentButtonText}>$5.0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.paymentButton, selectedPayment === 10 && styles.selectedPaymentButton]}
                                onPress={() => handlePaymentSelection(10)}
                            >
                                <Text style={styles.paymentButtonText}>$10.0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.paymentButton, selectedPayment === 20 && styles.selectedPaymentButton]}
                                onPress={() => handlePaymentSelection(20)}
                            >
                                <Text style={styles.paymentButtonText}>$20.0</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {selectedPayment !== null && (
                        <View style={styles.selectedPaymentContainer}>
                            <Text style={styles.selectedPaymentText}>Selected Payment: ${selectedPayment.toFixed(1)}</Text>
                        </View>
                    )}

                    <TouchableOpacity style={styles.addNewCard} onPress={() => router.push('/add-card')}>
                        <View style={{ flexDirection: "row" }}>
                            <LinearGradient
                                colors={[b1, b2]}
                                style={styles.gradient}
                            >
                                <FontAwesome6 name='plus' color="#000" size={16} />
                            </LinearGradient>
                            <Text style={{ alignSelf: "center" }}>Add New Card</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/summary')}>
                        <LinearGradient
                            colors={[b1, b2]}
                            style={styles.details}
                        >
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
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/summary')}>
                        <LinearGradient
                            colors={[b1, b2]}
                            style={styles.details}
                        >
                            <View style={styles.imgText}>
                                <Image
                                    source={require('../../assets/images/visa.png')}
                                    style={styles.imagevisa}
                                />
                                <View style={{ paddingLeft: 20, justifyContent: "center" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 16 }}>Visa</Text>
                                    <Text>Debit Card **** 1234</Text>
                                </View>
                            </View>
                            <View style={styles.backicon}>
                                <FontAwesome name='angle-right' color="#000" size={16} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TabBar />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    paymentText: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        width: "85%",
        marginBottom: 10,
        // paddingTop:30
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
        justifyContent: "flex-start",
    },
    paymentContainer: {
        width: "90%",
        marginBottom: 20,
    },
    paymentButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    paymentButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedPaymentButton: {
        backgroundColor: "#FFC70BE5",
    },
    paymentButtonText: {
        fontSize: 16,
        fontWeight: "600",
    },
    selectedPaymentContainer: {
        width: "90%",
        paddingVertical: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    selectedPaymentText: {
        fontSize: 16,
        fontWeight: "600",
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
        marginTop: 20,
    },
    gradient: {
        height: 40,
        width: 40,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    imgText: {
        flexDirection: "row",
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
        paddingHorizontal: 20,
    },
    imagecard: {
        width: 55,
        height: 43,
    },
    imagevisa: {
        width: 63,
        height: 20,
        alignSelf: "center",
    },
    backicon: {
        height: 26,
        width: 26,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: 100,
    },
});