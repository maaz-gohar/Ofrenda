import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface BucketListComponentProps {
    showIcon?: boolean;
    IconName?: "search" | "anchor" | "bold" | "link" | "at" | "filter" | "medium" | "justify" | "key" | "map" | "code" | "picture" | "ruby" | "ellipse" | "line" | "stop" | "locked" | "android" | undefined;
    showText?: boolean;
    text?: string;
    route?: string;
    image: any;
    onPress?: () => void; // Optional custom logic
}

export default function BucketListComponent({
    showIcon = true,
    route,
    IconName,
    showText = false,
    text,
    onPress,
    image,
}: BucketListComponentProps) {
    const router = useRouter();

    // Helper function to handle navigation
    const handlePress = () => {
        if (onPress) {
            // If a custom onPress function is provided, call it
            onPress();
        } else if (route) {
            // Navigate to the specified route
            router.push({
                pathname: route,
                query: { text: text || '' }, // Pass the text as a query parameter
            });
        } else {
            console.warn('No route or onPress function provided for BucketListComponent.');
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.itemContainer}>
                <ImageBackground source={image} resizeMode="contain" style={styles.image}>
                    {showText && <Text style={styles.BucketText}>{text}</Text>}
                    {showIcon && IconName && (
                        <Fontisto name={IconName} size={14} color={"#000"} style={styles.icon} />
                    )}
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: 100,
        height: 40,
        borderRadius: 10,
        overflow: 'hidden', // Ensures content stays within the rounded corners
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
    },
    icon: {
        position: 'absolute', // Ensures the icon overlays the text
        top:6, // Vertically centers the icon
        left: 45,// Adjusts for the icon size
        alignSelf:"center"
    },
    BucketText: {
        fontSize: 8,
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute', // Ensures the text stays in place
        bottom: 23, // Positions the text at the bottom of the image
        color: '#000', // Ensures the text is visible
    },
});