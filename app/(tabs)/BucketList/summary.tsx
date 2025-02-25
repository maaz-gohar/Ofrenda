import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import MainButton from '../components/button';
import MainText from '../components/topText';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import TabBar from '../components/tabBar';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Summary() {
    // const { height, width } = Dimensions.get("window");
    const [isCheck, setIsCheck] = useState(false);

    const ToggleCheckBox = () => {
        setIsCheck(!isCheck);
    };

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText title="Summary" showIcon={true} setting={true} gradientColor={[b1, b2]} />
                <View style={[styles.main]}>
                    <View style={styles.plans}>
                        <View style={styles.innerPlan}>
                            <Text style={{ fontSize: 16 }}>Selected Package</Text>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>Basic Plan</Text>
                        </View>
                        <View style={styles.innerPlan}>
                            <Text style={{ fontSize: 16 }}>Package Starting Date</Text>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>31-Oct-2024</Text>
                        </View>
                        <View style={styles.innerPlan}>
                            <Text style={{ fontSize: 16 }}>Package End Date</Text>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>31-Nov-2024</Text>
                        </View>
                    </View>

                    <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                        <View style={styles.price}>
                            <Text style={styles.priceDetails}>Price Details</Text>
                            <Text style={{textAlign:"center", paddingBottom:20, width:300}}>Package includes 16 photo frames, 12 backgrounds, and 100 customizable lists for comprehensive creative projects.</Text>
                            <View style={styles.innerPlan}>
                                <Text style={{ fontSize: 16 }}>Package Price (Annual)</Text>
                                <Text style={{ fontWeight: "500", fontSize: 16 }}>USD 60.00</Text>
                            </View>
                            <View style={styles.innerPlan}>
                                <Text style={{ fontSize: 16 }}>Duration</Text>
                                <Text style={{ fontWeight: "500", fontSize: 16 }}>Monthly</Text>
                            </View>
                            <View style={styles.innerPlan}>
                                <Text style={{ fontSize: 16 }}>Tax (GST)</Text>
                                <Text style={{ fontWeight: "500", fontSize: 16 }}>USD 0</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    <View style={{ paddingHorizontal: 6 }}>
                        <View style={styles.innerPlan}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Total Payment</Text>
                            <Text style={{ fontWeight: "500", fontSize: 16 }}>USD 60.00</Text>
                        </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={ToggleCheckBox} style={styles.checkbox}>
                            {isCheck && (
                                <AntDesign name="check" color="#000" size={18} />
                            )}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>
                            Accept all terms & condition
                        </Text>
                    </View>
                </View>
                <View style={styles.endView}>
                    <MainButton
                        title="Make Payment"
                        onPress={() => router.push('/BucketList/selectBucketListPremium')}
                        gradientColor={[b1, b2]}
                        shadowColor='#f8deff'
                    />
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
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingTop: 30,
        zIndex: 10,
        marginTop: -15,
    },
    plans: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "dotted",
        borderRadius: 10,
        alignItems: "center",
        width: "90%",
        paddingVertical: 20,
    },
    gradient: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    price: {
        flexDirection: "column",
        borderRadius: 10,
        alignItems: "center",
        width: "90%",
        paddingVertical: 20,
    },
    innerPlan: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    priceDetails: {
        paddingTop: 10,
        paddingBottom: 15,
        fontSize: 22,
        fontWeight: "600"
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginVertical: 10,
        paddingLeft: 20,
    },
    checkbox: {
        marginHorizontal: 10,
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: "flex-start",
        // backgroundColor: "#000"
        
    },
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#ffffff"
    },
});
