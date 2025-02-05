import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text
} from 'react-native';
import MainText from '../components/topText';
import { useSearchParams } from 'expo-router/build/hooks';
import TabBar from '../components/tabBar';

export default function DisplayData() {
    const searchParams = useSearchParams();
    const worked = searchParams.get('worked');
    const health = searchParams.get('health');
    const memory = searchParams.get('memory');
    const hobbies = searchParams.get('hobbies');
    const dob = searchParams.get('dob');
    const dod = searchParams.get('dod');
    const noteableContribution = searchParams.get('noteableContribution');
    const movie = searchParams.get('movie');
    const food = searchParams.get('food');

    // noteableContribution,
    // movie,
    // food

    console.log(worked,
        memory,
        health,
        hobbies,
        dob,
        dod,
        noteableContribution,
        movie,
        food)

    let parsedHobbies = [];
    try {
        if (hobbies) {
            // Check if hobbies is already an array
            if (Array.isArray(hobbies)) {
                parsedHobbies = hobbies;
            } else {
                parsedHobbies = JSON.parse(hobbies);
            }
        }
    } catch (error) {
        console.error("Error parsing hobbies:", error);
    }
    // Join hobbies with commas
    const hobbiesString = parsedHobbies.join(', ');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Dearly Departed'} showIcon={true} setting={true} />

                <View style={[styles.main]}>
                    <ImageBackground
                        source={require('../../../assets/images/Group 2092.png')}
                        style={styles.bg}
                        resizeMode="contain"
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

                            <Text style={styles.boldText}>Favorite pastimes</Text>
                            <Text style={styles.normalText}>
                                {parsedHobbies.length > 0 ? hobbiesString : 'No hobbies selected'}
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
        marginTop: -25,
    },
    bg: {
        width: "100%",
        aspectRatio: 0.65,
        paddingTop: 25,
        alignItems: "center",
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
        paddingTop: 10,
        alignSelf: "center"
    },
    normalText: {
        fontWeight: "500",
        marginTop: 5,
        paddingHorizontal: 40,
        textAlign: "center"
    }
});