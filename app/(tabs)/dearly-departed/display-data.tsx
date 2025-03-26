import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
    Share,
    TouchableOpacity
} from 'react-native';
import MainText from '../../../components/auth/top-text';
import { useSearchParams } from 'expo-router/build/hooks';
import TabBar from '../../../components/auth/tab-bar';
import { Ionicons } from '@expo/vector-icons';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";


export default function DisplayData() {
    const searchParams = useSearchParams();
    const worked = searchParams.get('worked');
    const name = searchParams.get('name');
    const health = searchParams.get('health');
    const memory = searchParams.get('memory');
    const hobbies = searchParams.get('hobbies');
    const dob = searchParams.get('dob');
    const dod = searchParams.get('dod');
    const noteableContribution = searchParams.get('noteableContribution');
    const movie = searchParams.get('movie');
    const food = searchParams.get('food');
    const dynamicFields = searchParams.get('dynamicFields');
    const relationship = searchParams.get('relationship');
    const ancestorRelationship = searchParams.get('ancestorRelationship');
    const parsedDynamicFields = dynamicFields ? JSON.parse(dynamicFields) : [];



    console.log(worked,
        memory,
        health,
        hobbies,
        dob,
        dod,
        noteableContribution,
        movie,
        food)

    // let parsedHobbies = [];
    // try {
    //     if (hobbies) {
    //         // Check if hobbies is already an array
    //         if (Array.isArray(hobbies)) {
    //             parsedHobbies = hobbies;
    //         } else {
    //             parsedHobbies = JSON.parse(hobbies);
    //         }
    //     }
    // } catch (error) {
    //     console.error("Error parsing hobbies:", error);
    // }
    // Join hobbies with commas
    // const hobbiesString = parsedHobbies.join(', ');

        const handleShare = async () => {
            try {
                const result = await Share.share({
                    message: `Check out my Ancestors details:\n\nName: ${name}\nDOB: ${dob}\nHobbies: ${hobbies}\nRelationship: ${relationship}\nFavorite Movie: ${movie}\nHealth Conditions: ${health}\nNotable Contributions: ${noteableContribution}\n\nShared via Ofrenda App`,
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
                if (error instanceof Error) {
                    alert(error.message);
                } else {
                    alert('An unknown error occurred.');
                }
            }
        };
    

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Dearly Departed'} showIcon={true} setting={true} />

                <View style={[styles.main]}>
                    <View style={styles.bgContain}>

                        <ImageBackground
                            source={require('../../../assets/images/Group 2092.png')}
                            style={styles.bg}
                            resizeMode="stretch"
                        >
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.granded}>Grandad</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ paddingHorizontal: 4, fontWeight: "700" }}>BORN</Text>
                                    <Text>{dob}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ paddingHorizontal: 4, fontWeight: "700" }}>DIED</Text>
                                    <Text>{dod}</Text>
                                </View>

                                <Text style={styles.boldText}>Name</Text>
                                <Text style={styles.normalText}>{name}</Text>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    {/* Display Relationship */}
                                    {relationship && (
                                        <>
                                            <Text style={styles.boldText}>Relationship</Text>
                                            <Text style={styles.normalText}>{relationship}</Text>
                                        </>
                                    )}

                                    {/* Display Relationship with Ancestors */}
                                    {ancestorRelationship && (
                                        <>
                                            <Text style={styles.boldText}>Relationship with Ancestors</Text>
                                            <Text style={styles.normalText}>{ancestorRelationship}</Text>
                                        </>
                                    )}

                                    {/* Other fields */}
                                </View>
                                <Text style={styles.boldText}>Hobbies</Text>
                                <Text style={styles.normalText}>
                                    {hobbies}
                                    {/* {parsedHobbies.length > 0 ? hobbiesString : 'No hobbies selected'} */}
                                </Text>

                                <Text style={styles.boldText}>Worked As</Text>
                                <Text style={styles.normalText}>{worked}</Text>

                                <Text style={styles.boldText}>Notable contributions</Text>
                                <Text style={styles.normalText}>{noteableContribution}</Text>

                                <Text style={styles.boldText}>Favorite food, restaurants</Text>
                                <Text style={styles.normalText}>{food}.</Text>

                                <Text style={styles.boldText}>Favorite movie, band, book, author</Text>
                                <Text style={styles.normalText}>{movie}</Text>

                                <Text style={styles.boldText}>Health Conditions</Text>
                                <Text style={styles.normalText}>{health}</Text>

                                <Text style={styles.boldText}>Favorite Memory</Text>
                                <Text style={styles.normalText}>{memory}</Text>

                                {parsedDynamicFields.length > 0 && (
                                    <View>
                                        {parsedDynamicFields.map((field:any, index:number) => (
                                            <View key={index}>
                                                <Text style={styles.boldText}>{field.title}</Text>
                                                <Text style={styles.normalText}>{field.value}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </ImageBackground>
                    </View>
                    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                <Ionicons name="share-social" size={24} color="white" />
                <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
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
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        paddingTop: 30,
        marginTop: -35,
        width: "100%",

    },
    bgContain: {

        width: "90%",
        // marginVertical: 20, // Add vertical margin
    },
    bg: {
        width: "100%",
        minHeight: 500,
        paddingVertical: 50,
        alignItems: "center",
        alignSelf: "center",
        // paddingHorizontal: 10
    },
    granded: {
        fontSize: 40,
        fontFamily: "Cochin",
        fontWeight: "500",
        // paddingTop: 40,
    },
    boldText: {
        fontSize: 25,
        fontFamily: "Cochin",
        fontWeight: "700",
        paddingTop: 10,
        alignSelf: "center",
        // paddingHorizontal: 10
        width: 300,
        textAlign: "center"
    },
    normalText: {
        fontWeight: 500,
        marginTop: 5,
        paddingHorizontal: 30,
        textAlign: "center"
    },
    social: {
        flexDirection: "row",
        paddingTop: 10,
        // marginBottom: 50,
    },
    greybg: {
        margin: 4,
        backgroundColor: "rgba(228, 228, 228, 1)",
        height: 30,
        width: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 10
        // paddingBottom: 10
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