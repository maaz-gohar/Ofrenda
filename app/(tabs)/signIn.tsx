import React, { useState, useEffect } from 'react';
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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from './components/input';
import MainButton from './components/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from './components/topText';
import { useRouter } from 'expo-router';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function SignIn({ segment }) {
    const [value, setValue] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordTooShort, setIsPasswordTooShort] = useState(false);

    useEffect(() => {
        if (value.length < 7) {
            setIsPasswordTooShort(true);
        } else {
            setIsPasswordTooShort(false);
        }
    }, [value]);

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title="Sign In"
                    showIcon={true}
                    navigation={segment}
                />
                <View style={[styles.main]}>
                    <View>
                        <View style={styles.btns}>
                            <View style={styles.inactive}>
                                <TouchableOpacity
                                    onPress={() => router.push('/signUp')}
                                >
                                    <Text style={styles.inactiveText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <LinearGradient
                                colors={[b1, b2]}
                                style={styles.gradient}
                            >
                                <Text style={styles.activeText}>Login</Text>
                            </LinearGradient>
                        </View>

                        <FloatingLabelInput placeholder="Email Address" iconName="envelope-o" iconType='FontAwesome' />
                        <FloatingLabelInput
                            placeholder="Create Password"
                            iconName="lock-closed-outline"
                            eyeIcon={true}
                            value={value}
                            onChangeText={setValue}
                            secureTextEntry={!isPasswordVisible}
                        />
                        {isPasswordTooShort && (
                            <TouchableOpacity

                                onPress={() => router.push('/forgotPassword')}
                            >
                                <View style={styles.forgetPassword}>
                                    <Text>Forget Password?</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={styles.endView}>
                    <MainButton title="Login" />
                    <Text >Do you already have an account?
                        <TouchableOpacity
                            onPress={() => router.push('/signUp')}
                        >
                            <Text style={styles.signInText}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
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
        justifyContent: "space-between"
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
        alignSelf: "center",
        padding: 6
    },
    gradient: {
        width: "51%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
    },
    inactive: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
    },
    activeText: {
        fontSize: 16,
        color: "#000",
    },
    inactiveText: {
        fontSize: 16,
        color: "#FFC70B",
    },

    forgetPassword: {
        alignSelf: "flex-end",
        paddingLeft: 20,
        marginTop: 10,
    },

    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },

    signInText: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
        marginLeft: 3,
        marginBottom: -3
    },


});
