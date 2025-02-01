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

import { useRouter } from 'expo-router';

export default function BffMainScreenLandScape() {
    const router = useRouter();
    const { height, width } = Dimensions.get('window'); // Get screen dimensions

    return (
        <View style={[styles.container, { height, width }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <View style={styles.main}>
                    <View style={styles.imgcover}>
                        <Image source={require('../../../assets/images/SelectOfrenda/3.png')} style={styles.img} />
                        <TouchableOpacity
                            onPress={() => router.push('/DearlyDepartmentUser/bffMainScreen')}
                            style={styles.icon}
                        >
                            <MaterialIcons name='crop-rotate' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subbtn}>
                        <View>
                            <TouchableOpacity style={styles.bg}>
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
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '180%',
        height: '100%',
        borderWidth: 8,
        borderColor: "rgba(255, 199, 11, 1)",
        backgroundColor: "#fff"
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        transform: [{ rotate: '90deg' }],
    },
    imgcover: {
        width: '150%',
        aspectRatio: 16 / 9,
        borderRadius: 8,
        borderWidth: 3,
        overflow: 'hidden',
        position: 'relative',
    },
    img: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
        padding: 5,
    },
    subbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '140%',
        paddingVertical: 20,
    },
    bg: {
        backgroundColor: 'rgba(255, 199, 11, 1)',
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 50,
    },
});
