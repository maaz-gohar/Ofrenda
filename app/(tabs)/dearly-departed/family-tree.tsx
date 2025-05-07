import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../../components/auth/top-text';
import AncestorsComponent from '../../../components/dearly-departed/ancestors-component';
import TabBar from '../../../components/auth/tab-bar';
import MainButton from '../../../components/auth/button';
import { useRouter } from 'expo-router';
import FamilyTreeComponent from '../../../components/dearly-departed/family-tree-component';
// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function FamilyTree() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>

                <MainText
                    title={'Create Family Tree'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    {/* <Text style={styles.seeAll}>See All</Text> */}

                    <View style={styles.btns}>
                        <View style={styles.inactive}>
                            <TouchableOpacity
                                onPress={() => router.push('/dearly-departed/add-family-tree')}
                            >
                                <Text style={styles.inactiveText}>Paternal Family Tree</Text>
                            </TouchableOpacity>
                        </View>
                        <LinearGradient
                            colors={[b1, b2]}
                            style={styles.gradient}
                        >
                            <Text style={styles.activeText}>Maternal Family Tree</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <View style={styles.centerView}>
                            <View style={styles.familyTree}>
                                <FamilyTreeComponent
                                    imagePath={require('../../../assets/images/familyTree/1.png')}
                                    name={"Name"}
                                />
                                <FamilyTreeComponent
                                    imagePath={require('../../../assets/images/familyTree/2.png')}
                                    name={"Name"}
                                />
                            </View>
                            <Image source={require('../../../assets/images/tree1.png')} style={styles.tree1} />
                            <View style={styles.subtree1}>
                                <View style={[styles.familyTree]}>
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/3.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/4.png')}
                                        name={"Name"}
                                    />
                                </View>
                                <View style={[styles.familyTree]}>
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/5.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/6.png')}
                                        name={"Name"}
                                    />
                                </View>
                            </View>
                            <View style={styles.subtree}>
                                <View style={[styles.familyTree]}>
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/7.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/8.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/9.png')}
                                        name={"Name"}
                                    />
                                </View>
                                <View style={[styles.familyTree]}>
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/10.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/11.png')}
                                        name={"Name"}
                                    />
                                    <FamilyTreeComponent
                                        imagePath={require('../../../assets/images/familyTree/12.png')}
                                        name={"Name"}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styles.endView}>
                    <MainButton title={"Add Family Member"} onPress={() => router.push('/dearly-departed/family-tree -form')} />

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
        paddingTop: 30,
        zIndex: 10,
        marginTop: -35,
        justifyContent: "flex-start"
    },
    img: {
        width: 124,
        height: 124
    },
    text: {
        fontSize: 16,
        paddingTop: 15,
        fontWeight: "600"
    },
    seeAll: {
        alignSelf: "flex-end",
        paddingRight: 20,
        color: "rgba(67, 67, 67, 1)"
    },
    btns: {
        borderWidth: 1,
        borderColor: "#FFC70B",
        width: "90%",
        borderRadius: 32,
        height: 55,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    gradient: {
        width: "51%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    inactive: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    activeText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000",
    },
    inactiveText: {
        fontSize: 12,
        fontWeight: "500",

    },
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    familyTree: {
        flexDirection: "row",
        paddingHorizontal: 20
    },

    endView: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        // marginBottom: 30,
        backgroundColor: "#ffffff"
    },
    subtree: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 20
    },
    subtree1: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "86%"
    },
    tree1: {
        width: "100%",
        aspectRatio: 1.8,
        resizeMode: "contain",

    },

});
