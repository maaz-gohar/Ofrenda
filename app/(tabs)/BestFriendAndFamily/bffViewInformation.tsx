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
import MainText from '../components/topText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MainButton from '../components/button';
import TabBar from '../components/tabBar';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BffViewInformation() {
    const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));
    const router = useRouter();
    const params = useLocalSearchParams();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        // Check initial orientation and set isLandscape state
        const initialOrientation = screenDimensions.width > screenDimensions.height;
        setIsLandscape(initialOrientation);

        // Add listener for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setScreenDimensions(window);
            setIsLandscape(window.width > window.height);
        });

        // Unlock orientation when the component mounts to allow manual rotation
        ScreenOrientation.unlockAsync();

        // Cleanup listener on unmount
        return () => {
            subscription?.remove();
            // Lock back to portrait mode when the component unmounts (optional)
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        };
    }, []);

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

        console.log("Forwarding params to DisplayData:", forwardParams);

        router.push({
            pathname: '/BestFriendAndFamily/displayData',
            params: forwardParams
        });
    };

    const enterFullScreen = async () => {
        // Lock the screen to landscape mode when entering full-screen
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        setIsLandscape(true);
    };

    const exitFullScreen = async () => {
        // Lock the screen back to portrait mode when exiting full-screen
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        setIsLandscape(false);
    };

    // Display full-screen image view in landscape mode
    if (isLandscape) {
        return (
            <View style={[styles.fullScreenContainer, { height: screenDimensions.height, width: screenDimensions.width }]}>
                <Image
                    source={require('../../../assets/images/BestFriend/college1.jpg')}
                    style={[
                        styles.fullScreenImage,
                        {
                            width: screenDimensions.width,
                            height: screenDimensions.height,
                        }
                    ]}
                    resizeMode="contain" // Use "contain" to fit the image within the screen
                />
                <TouchableOpacity
                    onPress={exitFullScreen} // Exit landscape mode and return to portrait
                    style={[styles.icon, styles.fullScreenIcon]}
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

                <View style={[styles.main]}>
                    <View style={styles.imgcover}>
                        <Image
                            source={require('../../../assets/images/BestFriend/college1.jpg')}
                            style={styles.img}
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            onPress={enterFullScreen} // Enter landscape mode
                            style={[styles.icon, styles.fullScreenButton]}
                        >
                            <MaterialIcons name='fullscreen' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbtn}>
                        <View>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionButtonsContainer}>
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
    icon: {
        position: "absolute",
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
        width: "60%",
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
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    fullScreenIcon: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        zIndex: 2,
    },
    fullScreenButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 5,
        borderRadius: 50,
        width: 35,
    },
    viewInfoContainer: {
        flexDirection: 'row',
    },
    buttonWrapper: {
        width: "95%",
    },
});