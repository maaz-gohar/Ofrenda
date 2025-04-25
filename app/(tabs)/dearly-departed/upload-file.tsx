import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../../../components/auth/top-text';
import MainButton from '../../../components/auth/button';
import { router, useLocalSearchParams } from 'expo-router';

const b1 = "#FFC70B";
const b2 = "#ffe9a1";

export default function UploadFile() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const params = useLocalSearchParams();

    const PickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
                console.log("Image picked:", result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    const SelectImage = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                console.log("Camera permission not granted");
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
                console.log("Photo taken:", result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error taking photo:', error);
        }
    };

    const handleUploadComplete = () => {
        if (!selectedImage) return;

        // Prevent repeated routing loops
        console.log("Navigating to form with image:", selectedImage);

        router.replace({
            pathname: '/dearly-departed/dearly-department-form',
            params: {
                ...params,
                selectedImage: selectedImage,
            }
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Dearly Departed'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                <View style={styles.main}>
                    <Text style={styles.headerText}>Upload File Or Take Photos</Text>
                    <View style={styles.contentStyle}>
                        <View style={styles.uploadContainer}>
                            <View style={styles.SelectPhoto}>
                                <TouchableOpacity onPress={PickImage}>
                                    <View>
                                        <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                            <MaterialIcons name='photo-library' size={37} color="#565656" />
                                        </LinearGradient>
                                        <Text style={styles.selectText}>Select Photo</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={SelectImage}>
                                    <View>
                                        <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                            <Ionicons name='camera-outline' size={37} color="#565656" />
                                        </LinearGradient>
                                        <Text style={styles.selectText}>Take Photo</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {selectedImage && (
                                <View style={styles.previewContainer}>
                                    <Image 
                                        source={{ uri: selectedImage }} 
                                        style={styles.previewImage} 
                                    />
                                </View>
                            )}

                            <MainButton
                                title={selectedImage ? "Use This Photo" : "Select a Photo"}
                                onPress={handleUploadComplete}
                                gradientColor={[b1, b2]}
                                disabled={!selectedImage}
                            />
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
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    contentStyle: {
        borderRadius: 10,
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "rgba(217, 217, 217, 0.8)",
        paddingVertical: 30,
    },
    uploadContainer: {
        padding: 30,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    SelectPhoto: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    gradient: {
        padding: 30,
        borderRadius: 50,
    },
    selectText: {
        alignSelf: "center",
        paddingTop: 10,
    },
    previewContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    previewImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
});
