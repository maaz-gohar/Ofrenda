import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    Share
} from 'react-native';
import MainText from '../components/topText';
import { useSearchParams } from 'expo-router/build/hooks';
import TabBar from '../components/tabBar';
import Wrapper from '../wrapper';
import { Ionicons } from '@expo/vector-icons';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function DisplayData() {
    const searchParams = useSearchParams();
    const Profession = searchParams.get('profession') || 'Not provided';
    const dob = searchParams.get('dob') || 'Not provided';
    const food = searchParams.get('food');
    const name = searchParams.get('name');
    const noteableContribution = searchParams.get('noteableContribution');
    const movie = searchParams.get('movie');
    const favFood = searchParams.get('favFood');
    const health = searchParams.get('health');
    const dynamicFields = searchParams.get('dynamicFields');
    const parsedDynamicFields = dynamicFields ? JSON.parse(dynamicFields) : [];
    const facebook = searchParams.get('facebook');
    const instagram = searchParams.get('instagram');
    const twitter = searchParams.get('twitter');
    const tiktok = searchParams.get('tiktok');

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `Check out my Best Friend and Family details:\n\nName: ${name}\nDOB: ${dob}\nProfession: ${Profession}\nFavorite Food: ${favFood}\nFavorite Movie: ${movie}\nHealth Conditions: ${health}\nNotable Contributions: ${noteableContribution}\n\nShared via Ofrenda App`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Best Friends and Family'} showIcon={true} setting={true} gradientColor={[b1, b2]} />
                <Wrapper>
                    <View style={styles.bgContain}>
                        <ImageBackground
                            source={require('../../../assets/images/Group 2093.png')}
                            style={styles.bg}
                            resizeMode="stretch"
                        >
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.granded}>Friend</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ paddingHorizontal: 4, fontWeight: "700" }}>BORN</Text>
                                    <Text>{dob}</Text>
                                </View>

                                <Text style={styles.boldText}>Name</Text>
                                <Text style={styles.normalText}>{name}</Text>

                                <Text style={styles.boldText}>Favorite pastimes</Text>
                                <Text style={styles.normalText}>{food}</Text>

                                <Text style={styles.boldText}>Profession</Text>
                                <Text style={styles.normalText}>{Profession}</Text>

                                <Text style={styles.boldText}>Notable Contributions</Text>
                                <Text style={styles.normalText}>{noteableContribution}</Text>

                                <Text style={styles.boldText}>Favorite food, restaurants</Text>
                                <Text style={styles.normalText}>{favFood}</Text>

                                <Text style={styles.boldText}>Favorite movie, band, book, author</Text>
                                <Text style={styles.normalText}>{movie}</Text>

                                <Text style={styles.boldText}>Health conditions</Text>
                                <Text style={styles.normalText}>{health}</Text>

                                {parsedDynamicFields.length > 0 && (
                                    <View>
                                        {parsedDynamicFields.map((field, index) => (
                                            <View key={index}>
                                                <Text style={styles.boldText}>{field.title}</Text>
                                                <Text style={styles.normalText}>{field.value}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                                <Text style={styles.boldText}>Social media</Text>
                                <View style={styles.social}>
                                    {facebook && (
                                        <View style={styles.greybg}>
                                            <Image
                                                source={require('../../../assets/images/logos_facebook.png')}
                                            />
                                        </View>
                                    )}
                                    {instagram && (
                                        <View style={styles.greybg}>
                                            <Image
                                                source={require('../../../assets/images/Group.png')}
                                            />
                                        </View>
                                    )}
                                    {twitter && (
                                        <View style={styles.greybg}>
                                            <Image
                                                source={require('../../../assets/images/prime_twitter.png')}
                                            />
                                        </View>
                                    )}
                                    {tiktok && (
                                        <View style={styles.greybg}>
                                            <Image
                                                source={require('../../../assets/images/logos_tiktok-icon.png')}
                                            />
                                        </View>
                                    )}
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                <Ionicons name="share-social" size={24} color="white" />
                <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
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
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        paddingTop: 30,
        marginTop: -35,
        width: "100%",
    },
    bgContain: {
        width: "90%",
    },
    bg: {
        width: "100%",
        minHeight: 500,
        paddingVertical: 50,
        alignItems: "center",
        alignSelf: "center",
    },
    granded: {
        fontSize: 40,
        fontFamily: "Cochin",
        fontWeight: "500",
    },
    boldText: {
        fontSize: 25,
        fontFamily: "Cochin",
        fontWeight: "700",
        paddingTop: 10,
        alignSelf: "center",
        width: 300,
        textAlign: "center",
    },
    normalText: {
        fontWeight: 500,
        marginTop: 5,
        paddingHorizontal: 30,
        textAlign: "center",
    },
    social: {
        flexDirection: "row",
        paddingTop: 10,
    },
    greybg: {
        margin: 4,
        backgroundColor: "rgba(228, 228, 228, 1)",
        height: 30,
        width: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: b1,
        padding: 10,
        borderRadius: 5,
        width:"90%",
        margin: 20,
    },
    shareButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
    },
});