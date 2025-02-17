import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MainText from '../components/topText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MainButton from '../components/button';
import TabBar from '../components/tabBar';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BffViewInformation() {

    const { height, width } = Dimensions.get('window')

    const router = useRouter();
    const params = useLocalSearchParams();

    const [fullScreen, setFullScreen] = useState(false)

    const ToggleFullScreen = () => {
        setFullScreen(!fullScreen)
    }

    if (fullScreen) {
        return (
            <View style={[styles.fullScreenContainer, { height, width }]}>
                <Image
                    source={require('../../../assets/images/BestFriend/college1.jpg')}
                    style={styles.fullScreenImage}
                />
                <TouchableOpacity
                    onPress={ToggleFullScreen}
                    style={[styles.icon, styles.fullScreenIcon]}
                >
                    <MaterialIcons name='fullscreen-exit' size={24} color={"#fff"} />
                </TouchableOpacity>
            </View>
        );


    }

    const handleViewDetails = () => {
        const forwardParams = {
            profession: params.profession,
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
            pathname: '/BestFriendAndFamily/displayData',
            params: forwardParams
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Best Friends and Family'} showIcon={true} setting={true} gradientColor={[b1, b2]} />

                <View style={[styles.main]}>
                    <View style={styles.imgcover}>
                        <Image source={require('../../../assets/images/BestFriend/college1.jpg')} style={styles.img} />
                        <TouchableOpacity
                            onPress={() => router.push('/BestFriendAndFamily/bffViewInformationLandscape')}
                            style={styles.icon}
                        >
                            <MaterialIcons name='crop-rotate' size={20} color={"#fff"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ToggleFullScreen} style={[styles.icon, styles.fullScreenButton]}>
                            <MaterialIcons name='fullscreen' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbtn}>
                        <View>
                            <TouchableOpacity

                                style={styles.bg}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", width: "60%", justifyContent: "space-between" }}>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Cast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Print</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: "95%" }}>
                            <MainButton title={"View Information"} onPress={handleViewDetails} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                        </View>

                    </View>
                </View>
            </ScrollView >
            <TabBar />
        </View >
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
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
    },
    imgcover: {
        width: "90%",
        height: 282,
        borderRadius: 8,
        borderWidth: 3,
        position: 'relative',
    },
    img: {
        flex: 1,
        width: "100%",
        borderRadius: 4
    },
    icon: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: "50%",
        padding: 5
    },
    subbtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 20
    },
    bg: {
        backgroundColor: "rgba(94, 164, 253, 1)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 250
    },
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    fullScreenImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        transform: [{ rotate: '90deg' }],

    },
    fullScreenIcon: {
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
    },
    rotateIcon: {
        top: 10,
        right: 10,
    },
    fullScreenButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 5,
        borderRadius: 50,
        width: 35
    },
});
