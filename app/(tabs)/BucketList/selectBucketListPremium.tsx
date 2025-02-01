import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import MainText from '../components/topText';
import Search from './components/search';
import BucketListComponent from './components/bucketListComponent';
import TabBar from '../components/tabBar';
import { FontAwesome5 } from '@expo/vector-icons';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function SelectBucketListPremium() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    gradientColor={[b1, b2]}
                    title={'Bucket Lists & Memories'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    <Search />
                    <View style={styles.bucketContainer}>
                        <View style={styles.bucketContainerText}>
                            <Text style={styles.BucketText}>BucketList</Text>
                            <Text style={styles.BucketText}>Memories</Text>
                            <Text style={styles.BucketText}>Thoughts & Notes</Text>
                        </View>
                        <BucketListComponent showIcon={false} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"plus-a"} />
                    </View>
                    <View style={styles.bucketContainer2}>

                        <Text style={styles.textBig}>Tool Kit Lists</Text>
                        <View style={styles.premiumContainer}>
                        </View>
                        <BucketListComponent IconName={"locked"} showText={true} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
                        <BucketListComponent IconName={"locked"} />
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
    bucketContainer: {
        width: "95%",
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        padding: 10,
        marginTop: 20
    },
    bucketContainer2: {
        width: "95%",
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        padding: 10,
        marginTop: 20,
        position: 'relative',
    },
    textBig: {
        fontWeight: "bold",
        fontSize: 23,
        paddingVertical: 10
    },
    bucketContainerText: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    BucketText: {
        fontWeight: "700",
        width: 120,
        textAlign: "center"
    },
    premiumContainer: {
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    premium: {
        fontWeight: "bold",
        fontSize: 30,

    }
});
