import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, Fontisto } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
// import MainText from '../components/topText';
// import AncestorsComponent from './components/ancestorsComponent';
import TabBar from '../components/tabBar';
import { useRouter } from 'expo-router';
import AncestorsComponent from '../Dearly Department/components/ancestorsComponent';
import MainText from '../components/topText';
import MainButton from '../components/button';
import Wrapper from '../components/wrapper';
// import MainText from './components/topText';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BffInformation() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>

                <MainText
                    title={'Create Information'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />
                {/* <View style={[styles.main]}> */}
<Wrapper>

                    <View style={styles.icon}>
                        <Fontisto name='info' size={110} color={"#000"} />
                    </View>
                    <Text style={styles.messageText}>Your Information Appear Here</Text>
                    <MainButton title={"Add Information"} onPress={() => router.push('/(tabs)/BestFriendAndFamily/bffForm')} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                {/* </View> */}
                </Wrapper>
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
        justifyContent: "center"
    },
    successText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 30,
    },
    gradient: {
        borderRadius: "50%",
        marginBottom: 40
    },
    icon: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 7,
        borderRadius: "50%"

    },
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },


});
