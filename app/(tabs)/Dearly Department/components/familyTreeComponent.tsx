import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";


export default function FamilyTreeComponent({ imagePath, name }) {

    return (
        <View style={styles.container}>
            <Image
                source={imagePath}
                style={styles.image}
            />
            <ImageBackground
                source={require('../../../../assets/images/bg.png')}
                style={styles.gradient}
            >

                <Text style={{ fontWeight: "500", fontSize: 10 }}>{name}</Text>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        width: "20%",
    },
    image: {
        height: 60,
        width: 50,
        // paddingBottom: 10
        marginBottom: 5,
        borderRadius: 4
    },
    gradient: {
        paddingVertical: 2,
        paddingHorizontal: 13
    }
});
