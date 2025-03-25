import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
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
    onPress?: (route: string, text: string) => void; 
}

export default function BucketListComponent({ showIcon = true, IconName, showText = false, text, onPress, image}: BucketListComponentProps) {
    const router = useRouter();

    // Helper function to handle navigation
    const handlePress = () => {
        const targetRoute = text === 'Natural Disaster' ? '/BucketList/naturalDisaster' : onPress;
        router.push(`${targetRoute}?text=${encodeURIComponent(text || '')}`);
    };

    const renderContent = () => {
        return (
            <>
                {showText && <Text style={styles.BucketText}>{text}</Text>}
                {showIcon && IconName && <Fontisto name={IconName} size={14} color={"#000"} style={styles.icon} />}
            </>
        );
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            disabled={showIcon && !showText}
        >
            <View style={styles.itemContainer}>
                <Image
                    source={image}
                    resizeMode='contain'
                />
                {renderContent()}
            </View>
        </TouchableOpacity>
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
    bucketContainer: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        position: 'relative', // Ensure the icon and text are positioned relative to this container
    },
    icon: {
        zIndex: 2, // Ensure the icon is above the text
        alignSelf: "center",
        position: "absolute",
        top: 5,
    },
    BucketText: {
        zIndex: 1, // Ensure the text is below the icon
        fontWeight: "700",
        width: 100,
        textAlign: "center",
        position: "absolute",
        fontSize: 10,
        top: 6,
    }
});