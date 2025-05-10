import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../../components/auth/top-text';
import TabBar from '../../../components/auth/tab-bar';
import CollegeDesignComponent from '../../../components/best-friend-and-family/college-design-component';
import FrameComponent from '../../../components/dearly-departed/frame-component';
import { useRouter } from 'expo-router';
import Wrapper from '../../../components/auth/wrapper';
// import CollegeDesignComponent from './components/CollegeDesignComponent';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function SelectFrames() {
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
                    <Text style={styles.title}>Select Collage Design</Text>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} bounces={false} >
                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                            <FrameComponent text="Classic" isGradient={true} onPress={() => router.push('/best-friend-and-family/select-frames')} />
                            <FrameComponent text="Vintage" onPress={() => router.push('/best-friend-and-family/vintage')} />
                            <FrameComponent text="Modern" onPress={() => router.push('/best-friend-and-family/modern')} />
                        </View>
                    </ScrollView>

                    {/* Collage Design Options */}
                    <View style={styles.collageContainer}>
                        {/* First Row */}
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

                        {/* Second Row */}
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

                        {/* Third Row */}
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

                        {/* Fourth Row */}
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
        backgroundColor: "#fff",
    },
    scrollViewContainer: {
        // flexGrow: 1,
        backgroundColor: "#fff",
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
        // marginBottom: 10,
    },
});

