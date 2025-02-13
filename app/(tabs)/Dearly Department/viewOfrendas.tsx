import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Touchable,
    TouchableOpacity,
    Image,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import MainButton from '../components/button';
import { useRouter } from 'expo-router';
import Food from './components/food';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function ViewOfrendas() {
    // const { height, width } = Dimensions.get("window");
    const router = useRouter();

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Your Memory Boards'}
                    showIcon={true}
                    setting={true}
                />

                <View style={[styles.main]}>
                    <Image source={require('../../../assets/images/SelectOfrenda/3.png')} style={styles.img} resizeMode='cover' />
                    <View style={styles.rowText}>
                        <Text style={styles.bold}>Add Ancestor Favorite Food</Text>
                        <Text style={{ color: "rgba(67, 67, 67, 1)" }}>Unlock All</Text>
                    </View>
                    <View style={styles.food}>
                        <Food
                            imagePath={require('../../../assets/images/foodItem/1.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/2.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/3.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/4.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/5.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/6.png')}
                        />
                    </View>
                    <View style={styles.food}>
                        <Food
                            imagePath={require('../../../assets/images/foodItem/1.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/2.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/3.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/4.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/5.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/6.png')}
                        />
                    </View>
                    <View style={styles.food}>
                        <Food
                            imagePath={require('../../../assets/images/foodItem/1.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/2.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/3.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/4.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/5.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/6.png')}
                        />
                    </View>
                    <View style={styles.food}>
                        <Food
                            imagePath={require('../../../assets/images/foodItem/1.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/2.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/3.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/4.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/5.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/6.png')}
                        />
                    </View>
                    <View style={styles.food}>
                        <Food
                            imagePath={require('../../../assets/images/foodItem/1.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/2.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/3.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/4.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/5.png')}
                        />
                        <Food
                            imagePath={require('../../../assets/images/foodItem/6.png')}
                        />
                    </View>
                </View>
            </ScrollView>
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
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
    },
    img: {
        height: 173,
        width: "90%",
        borderRadius: 16
    },
    rowText: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        paddingVertical: 20
    },
    bold: {
        fontWeight: "600",
        fontSize: 16
    },
    food: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        paddingTop: 10
    }

});


