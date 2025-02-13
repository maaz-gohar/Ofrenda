import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
    Image
} from 'react-native';
import MainText from '../components/topText';
import { useSearchParams } from 'expo-router/build/hooks';
import TabBar from '../components/tabBar';
import MainButton from '../components/button';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function DisplayData() {
    const searchParams = useSearchParams();
    const Profession = searchParams.get('profession') || 'Not provided';
    const dob = searchParams.get('dob') || 'Not provided';
    const hobbies = searchParams.get('hobbies');
    const parsedHobbies = hobbies ? JSON.parse(hobbies) : [];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Best Friends and Family'} showIcon={true} setting={true} gradientColor={[b1, b2]} />

                <View style={[styles.main]}>
                    <ImageBackground
                        source={require('../../../assets/images/Group 2093.png')}
                        style={styles.bg}
                        resizeMode="contain"
                    >
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.granded}>Friend</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingHorizontal: 4, fontWeight: "700" }}>BORN</Text>
                                <Text>{dob}</Text>
                            </View>

                            <Text style={styles.boldText}>Favorite pastimes</Text>
                            {parsedHobbies.length > 0 ? (
                                parsedHobbies.map((hobby, index) => (
                                    <Text key={index} style={styles.normalText}>
                                        {hobby}
                                    </Text>
                                ))
                            ) : (
                                <Text style={styles.normalText}>No hobbies selected</Text>
                            )}

                            <Text style={styles.boldText}>Profession</Text>
                            <Text style={styles.normalText}>{Profession}</Text>

                            <Text style={styles.boldText}>Notable Contributions</Text>
                            <Text style={styles.normalText}>Designed Seascape bridge, wrote Guidebook of California Birds.</Text>

                            <Text style={styles.boldText}>Favorite food, restaurants</Text>
                            <Text style={styles.normalText}>Waygu burger, dark chocolates, Rhone wine, Citrus Sea Grill, Nobu Restaurant.</Text>

                            <Text style={styles.boldText}>Favorite movie, band, book, author</Text>
                            <Text style={styles.normalText}>Rolling Stones, The Godfather, Shakespeare.</Text>

                            <Text style={styles.boldText}>Health conditions</Text>
                            <Text style={styles.normalText}>Diabetes, Asthma.</Text>

                            <Text style={styles.boldText}>Social media</Text>
                            <View style={styles.social}>
                                <View style={styles.greybg}>
                                    <Image
                                        source={require('../../../assets/images/Group.png')}

                                    />
                                </View>
                                <View style={styles.greybg}>

                                    <Image
                                        source={require('../../../assets/images/logos_tiktok-icon.png')}

                                    />
                                </View>
                                <View style={styles.greybg}>

                                    <Image
                                        source={require('../../../assets/images/logos_facebook.png')}

                                    />
                                </View>
                                <View style={styles.greybg}>

                                    <Image
                                        source={require('../../../assets/images/prime_twitter.png')}

                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: "60%", alignSelf: "center" }}>
                            <MainButton
                                gradientColor={[b1, b2]}
                                shadowColor='rgba(94, 164, 253, 1)'
                                title={'View Collage'}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
            <TabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        paddingTop: 30,
        marginTop: -35,
    },
    bg: {
        width: "100%",
        aspectRatio: 0.65,
        paddingTop: 25,
        alignItems: "center",
        // justifyContent: "center"
    },
    granded: {
        fontSize: 40,
        fontFamily: "Cochin",
        fontWeight: "500"
    },
    boldText: {
        fontSize: 25,
        fontFamily: "Cochin",
        fontWeight: "700",
        paddingTop: 10

    },
    normalText: {
        fontWeight: 500,
        marginTop: 5,
        paddingHorizontal: 40,
        textAlign: "center"
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
        alignItems: "center"

    },

});
