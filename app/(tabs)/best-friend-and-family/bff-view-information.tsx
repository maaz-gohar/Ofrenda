import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import MainText from '../../../components/auth/top-text';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MainButton from '../../../components/auth/button';
import TabBar from '../../../components/auth/tab-bar';
import Wrapper from '../../../components/auth/wrapper';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BffViewInformation() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [isLandscape, setIsLandscape] = useState(false);

    // // Function to handle orientation changes
    const updateOrientation = async () => {
        const orientationInfo = await ScreenOrientation.getOrientationAsync();
        const isLandscape =
            orientationInfo === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
            orientationInfo === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

        setIsLandscape(isLandscape);
        if (isLandscape) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        } else {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
        }
        await setTimeout(async () => {
            await ScreenOrientation.unlockAsync();
       }, 3000);
    };

    useEffect(() => {
        ScreenOrientation.unlockAsync();

        // Listen for orientation changes
        const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
            const isLandscape =
                event.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
                event.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
            setIsLandscape(isLandscape);
        });

        // Cleanup listener on unmount
        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            ScreenOrientation.removeOrientationChangeListener(subscription)};
    }, [ScreenOrientation]);

    const handleViewDetails = () => {
        const forwardParams = {
            profession: params.profession,
            dob: params.dob,
            name: params.name,
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

        router.push({
            pathname: '/best-friend-and-family/display-data',
            params: forwardParams
        });
    };

    // Display full-screen image view in landscape mode
    if (isLandscape) {
        return (
            <View style={styles.fullScreenContainer}>
                <Image
                    source={require('../../../assets/images/BestFriend/college1.jpg')}
                    style={styles.fullScreenImage}
                    resizeMode="contain"
                />
                <TouchableOpacity
                    onPress={updateOrientation}
                    style={styles.fullScreenIcon}
                >
                    <MaterialIcons name='fullscreen-exit' size={24} color={"#fff"} />
                </TouchableOpacity>
            </View>
        );
    }

    // Display normal page in portrait mode
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Best Friend And Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                {/* <View style={styles.main}> */}
                <Wrapper>
                    
                    <View style={styles.imgcover}>
                        <Image
                            source={require('../../../assets/images/BestFriend/college1.jpg')}
                            style={styles.img}
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            onPress={updateOrientation}
                            style={styles.fullScreenButton}
                        >
                            <MaterialIcons name='fullscreen' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbtn}>
                        {/* <View> */}
                        <View style={styles.actionButtonsContainer}>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        {/* </View> */}
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
                    <View style={styles.viewInfoContainer}>
                        <View style={styles.buttonWrapper}>
                            <MainButton
                                title={"View Information"}
                                onPress={handleViewDetails}
                                gradientColor={[b1, b2]}
                                shadowColor='rgba(94, 164, 253, 1)'
                            />
                        </View>
                    </View>
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
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
        overflow: 'hidden',
    },
    img: {
        flex: 1,
        width: "100%",
        borderRadius: 4,
    },
    fullScreenButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 50,
        padding: 5,
    },
    subbtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 20,
    },
    actionButtonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    bg: {
        backgroundColor: b1,
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 250,
    },
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: '100%',
        height: '100%',
    },
    fullScreenIcon: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        borderRadius: 50,
    },
    viewInfoContainer: {
        flexDirection: 'row',
    },
    buttonWrapper: {
        width: "95%",
    },
});