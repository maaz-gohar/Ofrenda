import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Animated,
} from 'react-native';
import MainText from '../components/topText';
import TabBar from '../components/tabBar';
import { LinearGradient } from 'expo-linear-gradient';
// import Header from './components/header';
import { useRouter } from 'expo-router';
import Header from '../Dearly Department/components/header';

const b1 = "rgba(188, 97, 213, 0.95)";
const b2 = "rgba(249, 244, 251, 0.95)";

export default function MainScreen() {
    const router = useRouter();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const startAnimation = () => {
            scaleAnim.setValue(1);
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleAnim, {
                        toValue: 1.05,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        startAnimation();
    }, [scaleAnim]);

    return (
        <View style={styles.container}>
            {/* <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}> */}
            {/* <Header
                    title={"Home"}
                    showIcon={true}
                    setting={true}
                    description={"Select One Free Option"}
                    name={"Anna"}
                /> */}
            <Header
                title={"Home"}
                showIcon={true}
                setting={true}
                description={"Select One Free Option"}
                name={"Anna"}
                gradientColors={["rgba(188, 97, 213, 0.8)", "rgba(249, 244, 251, 1)"]}
            />
            <View style={styles.main}>
                <View>
                    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <ImageBackground
                            source={require('../../../assets/images/home.png')}
                            style={styles.backgroundImage}
                            resizeMode="cover"
                        >
                            <View style={styles.overlay}>
                                <TouchableOpacity onPress={() => router.push('/Dearly Department/ancestorsMainScreen')}>
                                    <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                        <Text style={styles.text} numberOfLines={2}>
                                            Dearly Departed
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push('/BestFriendAndFamily/bffMainScreen')}>
                                    <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                        <Text style={styles.text} numberOfLines={2}>
                                            Best Friends
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.overlay2}>
                                <TouchableOpacity onPress={() => router.push('/BucketList/selectBucketList')}>
                                    <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                        <Text style={styles.text} numberOfLines={2}>
                                            Lists & Memories
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </Animated.View>
                </View>
            </View>
            {/* </ScrollView> */}
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
        backgroundColor: "#fff"
    },
    main: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginTop: -35
    },
    backgroundImage: {
        width: '100%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // marginTop: 30,
        marginLeft: 20
    },
    overlay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 50,
        marginBottom: 40,
        marginRight: 30
    },
    overlay2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginRight: 30
    },
    gradient: {
        borderRadius: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 133,
    },
    text: {
        color: '#000',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 20,
    },
});
