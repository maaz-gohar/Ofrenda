import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Updated import
import MainButton from './components/button';
import MainText from './components/topText';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Updated import

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function Congratulations() {
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
                <MainText title="Congratulations" />
                <View style={[styles.main]}>

                    <Image
                        source={require('../../assets/images/congratulation.png')}
                        style={styles.img}
                    />
                </View>
                <View style={styles.endView}>
                    <MainButton title="Explore App"
                        onPress={() => router.push('/Dearly Department/dearlyDepartmentForm')}
                    />
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
    },
    img: {
        height: "90%",
        width: "90%"
    },
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#ffffff",
        width: "100%"
    },
});
