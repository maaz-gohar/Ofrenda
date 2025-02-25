import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, Dimensions } from 'react-native';
import PaymentInput from './components/paymentInput';
import MainButton from './components/button';
import DropdownComponent from './components/dropdown';
import MainText from './components/topText';
import { useRouter } from 'expo-router';
import CountryDropdown from './components/countryDropdown';

export default function AddCard() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // Adjust based on your layout
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <MainText title={'Add Card'} showIcon={true} />
                <View style={[styles.main]}>
                    <PaymentInput placeholder="Email Address" keyboardType="email-address" maxLength={225} />
                    <Text style={styles.card}>Card Information</Text>
                    <PaymentInput
                        placeholder="Card Number"
                        keyboardType="numeric"
                        maxLength={19}
                        imageSources={[
                            require('../../assets/images/mastercard.png'),
                            require('../../assets/images/visa.png'),
                        ]}
                    />
                    <PaymentInput
                        placeholder="CVC"
                        keyboardType="default"
                        secureTextEntry={true}
                        maxLength={3}
                        icon="card-outline"
                    />
                    <PaymentInput placeholder="Name on card" maxLength={225} />
                    <Text style={styles.card}>Country or Region</Text>
                    <CountryDropdown />
                    <PaymentInput placeholder="ZIP" maxLength={225} />
                </View>
                <View style={styles.endView}>
                    <MainButton title="Add Card" onPress={() => router.push('/paymentMethod')} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingTop: 30,
        zIndex: 10,
        marginTop: -15,
        justifyContent: "flex-start",
    },
    card: {
        paddingTop: 35,
        fontWeight: "500",
        fontSize: 12,
    },
    btn: {
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        marginBottom: 20,
        marginTop: 10,
        alignItems: "center",
    },
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff",
        width: "100%"
    },



});
