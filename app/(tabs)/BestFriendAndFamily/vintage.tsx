import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import TabBar from '../components/tabBar';
import CollegeDesignComponent from './components/collegeDesignComponent';
import FrameComponent from '../Dearly Department/components/frameComponent';
import { useRouter } from 'expo-router';
import Wrapper from '../wrapper';
// import CollegeDesignComponent from './components/CollegeDesignComponent';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function Vinatge() {
    // export default function SelectFrames(props) {
    // console.log(props)
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Best Friends and Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />
<Wrapper>
                {/* <View style={styles.main}> */}
                    <Text style={styles.title}>Select Collage Design</Text>

                    {/* Collage Selection Options */}
                    {/* <View style={styles.selectionContainer}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={[b1, b2]}
                                style={styles.gradient}>
                                <Text style={styles.optionText}>Classic</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionText}>Vintage</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionText}>Modern</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} bounces={false} >
                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                            <FrameComponent text="Classic" onPress={() => router.push('/BestFriendAndFamily/selectFrames')} />
                            <FrameComponent text="Vintage" isGradient={true} onPress={() => router.push('/BestFriendAndFamily/vintage')} />
                            <FrameComponent text="Modern" onPress={() => router.push('/BestFriendAndFamily/modern')} />


                        </View>
                    </ScrollView>

                    <Text>Vintage Screen</Text>
                    {/* <View style={styles.collageContainer}>

                        <View style={styles.collageRow}>

                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college1.jpg')}

                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college1.jpg')}

                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college1.jpg')}

                            />
                        </View>


                        <View style={styles.collageRow}>
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college1.jpg')}

                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                        </View>


                        <View style={styles.collageRow}>
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                        </View>

              
                        <View style={styles.collageRow}>
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                            <CollegeDesignComponent
                                imagePath={require('../../../assets/images/BestFriend/college2.jpg')}
                                showIcon={true}
                            />
                        </View>
                    </View> */}
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
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        paddingVertical: 30,
        marginTop: -35,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    selectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    gradient: {
        borderRadius: 250,
        marginHorizontal: 5,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
    optionContainer: {
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 250,
        marginHorizontal: 5,
    },
    optionText: {
        fontWeight: "600",
        fontSize: 16,
    },
    collageContainer: {
        marginTop: 20,
    },
    collageRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
});

