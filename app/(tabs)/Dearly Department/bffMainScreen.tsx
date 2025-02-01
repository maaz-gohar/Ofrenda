import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MainText from '../components/topText';
import { useRouter } from 'expo-router';
import MainButton from '../components/button';

export default function BffMainScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Memory Boards'} showIcon={true} setting={true} />

                <View style={[styles.main]}>
                    <View style={styles.imgcover}>
                        <Image source={require('../../../assets/images/SelectOfrenda/3.png')} style={styles.img} />
                        <TouchableOpacity
                            onPress={() => router.push('/Dearly Department/bffMainScreenLandScape')}
                            style={styles.icon}
                        >
                            <MaterialIcons name='crop-rotate' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbtn}>
                        <View>
                            <TouchableOpacity

                                style={styles.bg}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", width: "60%", justifyContent: "space-between" }}>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Cast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bg}>
                                <Text>Print</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: "55%" }}>
                            <MainButton title={"View Information"} onPress={() => router.push('/Dearly Department/displayData')} />
                        </View>
                        <View style={{ width: "45%" }}>
                            <MainButton title={"View Family Tree"} />
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
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
        marginTop: -25,
    },
    imgcover: {
        width: "90%",
        height: 223,
        borderRadius: 8,
        borderWidth: 3,
        position: 'relative',
    },
    img: {
        flex: 1,
        width: "100%",
    },
    icon: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: "50%",
        padding: 5
    },
    subbtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 20
    },
    bg: {
        backgroundColor: "rgba(255, 199, 11, 1)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 250
    }
});
