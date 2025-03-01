import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import MainText from '../components/topText';
import MainButton from '../components/button';
import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import TabBar from '../components/tabBar';
import Wrapper from '../wrapper';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function Successful() {

    const params = useLocalSearchParams();


    useEffect(() => {
        console.log("Received params in Successful screen:", params);
    }, [params]);

    const handleViewDetails = () => {
        const forwardParams = {
            profession: params.profession,
            name: params.name,
            dob: params.dob,
            food: params.food,
            selectedImage: params.selectedImage,
            friendName: params.friendName,
            dynamicFields: params.dynamicFields,
            noteableContribution: params.noteableContribution,
            movie: params.movie,
            favFood: params.favFood,
            health: params.health,
            facebook: params.facebook,
            instagram: params.instagram,
            twitter: params.twitter,
            tiktok: params.tiktok
        };

        console.log("Forwarding params to DisplayData:", forwardParams);

        router.push({
            pathname: '/BestFriendAndFamily/bffViewInformation',
            params: forwardParams
        });
    };


    return (
        <View style={styles.container}>
            <MainText title={'Best Friends and Family'} showIcon={true} setting={true} gradientColor={[b1, b2]} />
            {/* <View style={styles.main}> */}
            <Wrapper>
                <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                    <Ionicons name='checkmark-circle' size={97} color={"#fff"} />
                </LinearGradient>
                <Text style={styles.title}>Successfully Added</Text>
                <Text style={styles.description}>
                    Your BFF has been successfully added to your account.
                </Text>
                {/* Optional: Display some of the data to confirm it's there */}
                {params.friendName && (
                    <Text style={styles.dataConfirmation}>
                        Added {params.friendName} as BFF
                    </Text>
                )}
                <MainButton
                    title="View Collage"
                    onPress={handleViewDetails}
                    gradientColor={[b1, b2]}
                    shadowColor='rgba(94, 164, 253, 1)'
                />
            {/* </View> */}
            </Wrapper>
            <TabBar />
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
        marginTop: -35,
    },
    gradient: {
        borderRadius: 500,
        // padding: 20,
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
    dataConfirmation: {
        fontSize: 14,
        color: '#444',
        marginBottom: 20,
        fontStyle: 'italic'
    }
});