import React, { useState, useCallback } from 'react';
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
import MainText from '../components/topText';
import MainButton from '../components/button';
import { router, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import Wrapper from '../wrapper';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function UploadFiles() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const params = useLocalSearchParams();

    useFocusEffect(
        useCallback(() => {
            console.log("Received params in UploadFiles screen:", params);
        }, [params])
    );

    const SelectImage = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync();

            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error taking photo:', error);
        }
    };

    const PickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    const handleUploadComplete = () => {
        if (selectedImage) {
            const forwardParams = {
                name: params.name,
                profession: params.profession,
                dob: params.dob,
                noteableContribution: params.noteableContribution,
                movie: params.movie,
                favFood: params.favFood,
                health: params.health,
                food: params.food,
                selectedImage: selectedImage, // Ensure this is correctly set
                dynamicFields: params.dynamicFields,
                facebook: params.facebook,
                instagram: params.instagram,
                twitter: params.twitter,
                tiktok: params.tiktok,
            };

            router.push({
                pathname: '/BestFriendAndFamily/selectCollegeDesign',
                params: forwardParams,
            });
        }
    };
    // profession: params.profession,
    // name: params.name,
    // dob: params.dob,
    // food: params.food,
    // selectedImage: selectedImage, // Use the selected image here
    // friendName: params.friendName,
    // dynamicFields: params.dynamicFields,
    // noteableContribution: params.noteableContribution,
    // movie: params.movie,
    // favFood: params.favFood,
    // health: params.health,
    // facebook: params.facebook,
    // instagram: params.instagram,
    // twitter: params.twitter,
    // tiktok: params.tiktok

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Best Friends and Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                {/* <View style={styles.main}> */}
                <Wrapper>
                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>Upload File Or Take Photos</Text>
                    <View style={styles.contentStyle}>
                        <TouchableOpacity>
                            <View style={styles.TextContainer}>
                                <Text style={{ fontWeight: "500" }}>View Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.TextContainer}>
                                <Text style={{ fontWeight: "500" }}>Upload Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.uploadContainer}>
                            <View style={styles.SelectPhoto}>
                                <TouchableOpacity onPress={PickImage}>
                                    <View>
                                        <LinearGradient
                                            colors={[b1, b2]}
                                            style={styles.gradient}
                                        >
                                            <MaterialIcons name='photo-library' size={37} color={"rgba(86, 86, 86, 1)"} />
                                        </LinearGradient>
                                        <Text style={{ alignSelf: "center", paddingTop: 10 }}>Select Photo</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={SelectImage}>
                                    <View>
                                        <LinearGradient
                                            colors={[b1, b2]}
                                            style={styles.gradient}
                                        >
                                            <Ionicons name='camera-outline' size={37} color={"rgba(86, 86, 86, 1)"} />
                                        </LinearGradient>
                                        <Text style={{ alignSelf: "center", paddingTop: 10 }}>Take Photo</Text>
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
                                shadowColor='rgba(94, 164, 253, 1)'
                                disabled={!selectedImage}
                            />
                        </View>
                    </View>
                {/* </View> */}
                </Wrapper>
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
    contentStyle: {
        borderRadius: 10,
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "rgba(217, 217, 217, 0.8)",
        paddingVertical: 30,
    },
    TextContainer: {
        backgroundColor: "#fff",
        marginBottom: 30,
        borderRadius: 250,
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
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