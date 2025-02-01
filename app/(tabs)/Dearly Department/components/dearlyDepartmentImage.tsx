import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function AddDearlyDepartmentComponent({ imagePath }) {
    const [showIcon, setShowIcon] = useState(false);

    const toggleIcon = () => {
        setShowIcon((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main} onPress={toggleIcon}>
                {showIcon && (
                    <Fontisto name="check" size={5} color={"#fff"} style={styles.icon} />
                )}
                <Image source={imagePath} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        width: "20%",
    },
    image: {
        height: 80,
        width: 80,
    },
    icon: {
        padding: 5,
        backgroundColor: "rgba(16, 247, 78, 1)",
        position: "absolute",
        left: 29,
        top: 3,
        zIndex: 1,
    },
});
