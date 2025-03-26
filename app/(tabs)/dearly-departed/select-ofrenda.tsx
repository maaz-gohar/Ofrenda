import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../../components/auth/top-text';
import AncestorsComponent from '../../../components/dearly-departed/ancestors-component';
import TabBar from '../../../components/auth/tab-bar';
import MainButton from '../../../components/auth/button';
import AncestorsImage from '../../../components/dearly-departed/ancestors-image';
import { useRouter } from 'expo-router';
import FrameComponent from '../../../components/dearly-departed/frame-component';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function SelectOfredna() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Dearly Departed'}
                    showIcon={true}
                    setting={true}
                />

                <View style={[styles.main]}>
                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>Select Memory Boards</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} bounces={false}>
                        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                            <FrameComponent text="Ofrenda" isGradient={true} onPress={() => router.push('/dearly-departed/select-ofrenda')} />
                            <FrameComponent text="Elegant" onPress={() => router.push('/dearly-departed/elegant')} />
                            <FrameComponent text="Indian" onPress={() => router.push('/dearly-departed/indian')} />
                            <FrameComponent text="Scandinavian" />
                            <FrameComponent text="Chinese" />
                            <FrameComponent text="Japanese" />
                            <FrameComponent text="Modernist" />
                            <FrameComponent text="Another Mexican style" />
                            <FrameComponent text="Glass photo frames " />
                            <FrameComponent text="Classical Christian altar" />
                            <FrameComponent text="Hebrew altar" />
                            <FrameComponent text="Wall photo frames" />
                        </View>
                    </ScrollView>

                    <View style={styles.ancestorsRow}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                        />
                    </View>
                    <View style={styles.ancestorsRow}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}
                        />
                    </View>
                    <View style={styles.ancestorsRow}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}
                        />
                    </View>
                    <View style={styles.ancestorsRow}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}
                        />
                    </View>
                </View>
            </ScrollView>
            <TabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollViewContainer: {
        // flexGrow: 1,
        backgroundColor: "#fff",
    },
    main: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
        paddingHorizontal:10
    },
    text: {
        fontSize: 16,
        paddingTop: 15,
        color: "#7d7d7d",
    },
    gradient: {
        borderRadius: 250,
        marginHorizontal: 5,
    },
    scrollContainer1: {
        height: 40,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 250,
        marginHorizontal: 5,
    },
    ancestorsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        // marginTop: 20,
    },
});