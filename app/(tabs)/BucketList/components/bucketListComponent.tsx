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
    IconName?: string;
    showText?: boolean;
}

export default function BucketListComponent({ showIcon = true, IconName, showText = false }: BucketListComponentProps) {
    const router = useRouter();

    // Helper function to handle navigation only when showIcon is false
    const handlePress = (route: string) => {
        if (!showIcon) {
            router.push(route);
        }
    };

    const renderContent = (index: number) => {
        if (index === 0) {
            if (showText) {
                return <Text style={styles.BucketText}>Natural Disaster</Text>;
            }
            if (showIcon) {
                return <Fontisto name={IconName} size={12} color={"#000"} style={styles.icon} />;
            }
        } else {
            if (showIcon) {
                return <Fontisto name={IconName} size={12} color={"#000"} style={styles.icon} />;
            }
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                bounces={false}
            >
                <View style={styles.bucketContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            if (showText) {
                                router.push('/BucketList/naturalDisaster');
                            } else if (!showIcon) {
                                router.push('/BucketList/bucketLists');
                            }
                        }}
                        disabled={showIcon && !showText}
                    >
                        <View style={styles.itemContainer}>
                            <Image
                                source={require('../../../../assets/images/Group 1508.png')}
                                resizeMode='contain'
                            />
                            {renderContent(0)}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            if (!showIcon) {
                                router.push('/BucketList/memory');
                            }
                        }}
                        disabled={showIcon}
                    >
                        <View style={styles.itemContainer}>
                            <Image
                                source={require('../../../../assets/images/Group 1508.png')}
                                resizeMode='contain'
                            />
                            {renderContent(1)}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            if (!showIcon) {
                                router.push('/BucketList/thoughts');
                            }
                        }}
                        disabled={showIcon}
                    >

                        <View style={styles.itemContainer}>
                            <Image
                                source={require('../../../../assets/images/Group 1508.png')}
                                resizeMode='contain'
                            />
                            {renderContent(2)}
                        </View>
                    </TouchableOpacity>
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
    },
    icon: {
        zIndex: 1,
        alignSelf: "center",
        position: "absolute",
        top: 5
    },
    BucketText: {
        fontWeight: "700",
        width: 100,
        textAlign: "center",
        position: "absolute",
        fontSize: 12,
        top: 6
    }
});