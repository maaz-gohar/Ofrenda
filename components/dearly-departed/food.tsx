import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface FoodProps {
    imagePath: any;
}

export default function Food({ imagePath }: FoodProps) {
    const [showIcon, setShowIcon] = useState(false);

    const toggleIcon = () => {
        setShowIcon((prev) => !prev);
    };

    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main} onPress={toggleIcon}>
                {showIcon && (
                    <Fontisto name="check" size={5} color={"#fff"} style={styles.icon} />
                )}
                <Image source={imagePath} style={styles.image} />
            </TouchableOpacity>
            {/* <View style={styles.addDearly}> */}
            <TouchableOpacity>
                <Fontisto name="locked" size={16} color={"#000"} style={styles.icon} />

            </TouchableOpacity>
        </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // padding: 1,
        borderRadius: 100,
        backgroundColor: "rgba(232, 232, 232, 1)"
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        width: "13%",
    },
    image: {
        height: 30,
        width: 30,
    },
    icon: {
        padding: 5,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "absolute",
        bottom: -13,
        left: -15,
        zIndex: 1,
        alignSelf: "center",
        borderRadius: 5
    },

});
