import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Touchable,
    TouchableOpacity,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import MainButton from '../components/button';
import { router } from 'expo-router';
import TabBar from '../components/tabBar';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function UploadFiles() {
    // const { height, width } = Dimensions.get("window");

    // const [image, setImage] = useState<string | null>(null);
    const SelectImage = async () => {

        await ImagePicker.requestCameraPermissionsAsync();

        let result = ImagePicker.launchCameraAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
    }
    const PickImage = async () => {

        // await ImagePicker.requestCameraPermissionsAsync();

        let result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
    }



    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'BFF'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                <View style={[styles.main]}>
                    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>Upload File Or Take Photos</Text>
                    <View style={styles.contentStyle}>
                        <TouchableOpacity>
                            <View style={styles.TextContainer}>
                                <Text style={{ fontWeight: "500" }}>View Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.TextContainer}>
                                <Text style={{ fontWeight: "500" }}>Uplaod Photo</Text>
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
                                        <Text style={{ alignSelf: "center", paddingTop: 10 }}>Select Photo</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <MainButton title={"Uploaded Photo"} onPress={() => router.push('/BestFriendAndFamily/bffViewInformation')} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />

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
        marginTop: -25,
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

});


