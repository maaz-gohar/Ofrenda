import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { useRouter } from 'expo-router';
import MainText from '../components/topText';
import Search from './components/search';
import BucketListComponent from './components/bucketListComponent';
import TabBar from '../components/tabBar';
import { FontAwesome5 } from '@expo/vector-icons';
import Inputs from './components/inputs';
import BottomIcons from './components/bottomIcons';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Memory() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    gradientColor={[b1, b2]}
                    title={'Memories'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    <Search />

                    <Inputs />
                </View>
            </ScrollView>
            <BottomIcons />
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
        marginTop: -25,
        justifyContent: "flex-start",
        width: "100%"
    },
    endView: {
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },

});
