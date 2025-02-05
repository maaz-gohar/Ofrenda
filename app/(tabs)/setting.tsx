import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    Touchable,
    TouchableOpacity
} from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from './components/input';
import MainButton from './components/button';
import { LinearGradient } from "expo-linear-gradient";
import MainText from './components/topText';
import NotisficationContainer from './components/notisficationContainer';
import InfoComponent from './components/infoComponent';
import { TextInput } from 'react-native-gesture-handler';
import TabBar from './components/tabBar';
import { useRouter } from 'expo-router';


const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";


export default function Setting() {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Setting'}
                    setting={true}
                    showIcon={true}
                />
                <View style={[styles.main]}>
                    <View style={styles.searchContainer}>
                        <Ionicons name='search' size={17.33} color={"#FCC404"} style={{ paddingHorizontal: 20 }} />
                        <TextInput
                            placeholder='Search'
                            style={{ flex: 1 }}
                        />
                    </View>
                    <Text style={styles.text}>Account Information</Text>
                    <InfoComponent
                        name="Profile Edits"
                        iconName='person-outline'
                        arrow={true}
                    />
                    <InfoComponent
                        name="Privacy & Security"
                        iconName='privacy-tip'
                        iconType='MaterialIcons'
                        arrow={true}
                    />
                    <InfoComponent
                        name="Notifications"
                        iconName='notifications-active'
                        iconType='MaterialIcons'
                        arrow={true}
                    />

                    <Text style={styles.text}>Actions</Text>
                    <TouchableOpacity style={styles.container} onPress={() => router.push('/')}>
                        <View >
                            <Text style={styles.logout}>Log Out</Text>
                        </View>

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

    text: {
        alignSelf: "flex-start",
        fontWeight: "500",
        paddingLeft: 20,
        paddingTop: 30
    },
    container: {
        marginTop: 10,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#F7F5FA',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 50,
        paddingVertical: 5,
        justifyContent: 'space-between',
        width: "95%",
        flexDirection: "row",
        alignItems: "center"
    },
    searchContainer: {
        width: "95%",
        backgroundColor: "#F7F5FA",
        borderColor: "#C2C2C2",
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 12,
        flexDirection: "row"
    },
    logout: {
        color: "red",
        alignSelf: "center",
        textAlign: "left",
        fontWeight: "500",
        marginLeft: 10
    }
});
