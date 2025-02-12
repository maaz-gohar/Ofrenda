import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import AncestorsComponent from './components/ancestorsComponent';
import TabBar from '../components/tabBar';
import MainButton from '../components/button';
import { useRouter } from 'expo-router';
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function FamilyTreeBoard() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>

                <MainText
                    title={'Relationship Tree'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    <MaterialCommunityIcons name='family-tree' size={40} color={'#7d7d7d'} />
                    <Text style={styles.text}>Your Family Tree Boards Appear Here</Text>
                </View>
                <View style={styles.endView}>
                    <MainButton title={"Add Relationship Tree"} onPress={() => router.push('/Dearly Department/selectOfrenda')} />

                </View>
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
    text: {
        fontSize: 16,
        paddingTop: 15,
        color: "#7d7d7d"
    },
    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },

});
