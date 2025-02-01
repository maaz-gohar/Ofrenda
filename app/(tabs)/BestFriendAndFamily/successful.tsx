import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import MainText from '../components/topText';
import MainButton from '../components/button';
import { useSearchParams } from 'expo-router/build/hooks';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function Successful() {
    const searchParams = useSearchParams();
    console.log("Search Params in Successful:", searchParams); // Check if params are received

    const handleViewDetails = () => {
        console.log("Navigating to DisplayData with params:", searchParams);
        router.push({
            pathname: '/BestFriendAndFamily/displayData',
            params: searchParams // Forward all params
        });
    };

    return (
        <View style={styles.container}>
            <MainText title={'BFF'} showIcon={true} setting={true} gradientColor={[b1, b2]} />
            <View style={styles.main}>
                <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                    <Ionicons name='checkmark-circle' size={97} color={"#fff"} />
                </LinearGradient>
                <Text style={styles.title}>Successfully Added</Text>
                <Text style={styles.description}>
                    Your BFF has been successfully added to your account.
                </Text>
                <MainButton title="View Details" onPress={handleViewDetails} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        marginTop: -25,
    },
    gradient: {
        borderRadius: "50%",
        marginBottom: 40
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 40,
        marginBottom: 30,
    },
});
