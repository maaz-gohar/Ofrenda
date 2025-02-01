import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import AncestorsComponent from './components/ancestorsComponent';
import TabBar from '../components/tabBar';
import MainButton from '../components/button';
import AncestorsImage from './components/ancestorsImage';
import { useRouter } from 'expo-router';
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function SelectOfredna() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Dearly Departed'}
                    showIcon={true}
                    setting={true}
                />

                <View style={[styles.main]}>
                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>Select Memory Boards</Text>
                    {/* <ScrollView contentContainerStyle={styles.horizontalScroll}> */}
                    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={[b1, b2]}
                                style={styles.gradient}
                            >
                                <View style={styles.scrollContainer1}>
                                    <Text style={{ fontWeight: "600", fontSize: 16, }}>Ofrenda</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.scrollContainer}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Elegant</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.scrollContainer}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Indian</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <View style={styles.scrollContainer}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>More</Text>
                        </View> */}


                    </View>
                    {/* </ScrollView> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                        // onPress={() => router.push('/Dearly Department/selectOfrenda')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}
                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}

                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/1.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/2.png')}
                            showIcon={true}

                        />
                        <AncestorsImage
                            imagePath={require('../../../assets/images/SelectOfrenda/3.png')}
                            showIcon={true}

                        />
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
        marginTop: -25,
    },
    text: {
        fontSize: 16,
        paddingTop: 15,
        color: "#7d7d7d",
    },
    gradient: {
        borderRadius: 250,
        marginHorizontal: 5,
    },
    scrollContainer1: {
        height: 40,
        // width: 120,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        height: 40,
        // width: 120,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 250,
        marginHorizontal: 5,
    },
});
