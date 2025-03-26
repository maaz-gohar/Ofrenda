import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface AncestorsComponentProps {
    imagePath: any; 
    text: string;
    onPress: () => void;
}

export default function AncestorsComponent({ imagePath, text, onPress }: AncestorsComponentProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.main}>
            <Image source={imagePath} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
                <Octicons name="pencil" size={14} color="#000" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 232,
        width: "95%",
        borderWidth: 1,
        borderColor: "#C2C2C2",
        borderRadius: 15,
        alignItems: "center",
        marginTop: 15,
        overflow: 'hidden',
    },
    image: {
        height: 175,
        width: "100%",
    },
    textContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: "600",
    },
});
