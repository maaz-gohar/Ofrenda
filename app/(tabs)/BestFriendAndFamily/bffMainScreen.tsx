import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
// import MainText from '../components/topText';
// import AncestorsComponent from './components/ancestorsComponent';
import TabBar from '../components/tabBar';
import { useRouter } from 'expo-router';
import AncestorsComponent from '../Dearly Department/components/ancestorsComponent';
import MainText from '../components/topText';
import Wrapper from '../wrapper';
// import MainText from './components/topText';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BFFMainScreen() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();


    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>

                <MainText
                    title={'Best Friends and Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />
                {/* <View style={[styles.main]}> */}
        <Wrapper>
                    <AncestorsComponent imagePath={require('../../../assets/images/BestFriend/ViewCollege.png')}
                        text={"View Collage"}
                        onPress={() => router.push('/BestFriendAndFamily/selectFrames')} />

                    <AncestorsComponent imagePath={require('../../../assets/images/bff.jpg')}
                        text={"View Information"}
                        onPress={() => router.push('/BestFriendAndFamily/information')} />
</Wrapper>
                {/* </View> */}
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
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },


});
