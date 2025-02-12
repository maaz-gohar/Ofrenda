import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Modal,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function BottomIcons() {
    const [visibleModal, setVisibleModal] = useState(false);

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access camera is required!');
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            console.log('Photo Taken:', result.assets[0].uri);
        }
        setVisibleModal(false);
    };

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access gallery is required!');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            console.log('Image Selected:', result.assets[0].uri);
        }
        setVisibleModal(false);
    };

    return (
        <View style={styles.endView}>
            {/* Bottom Icons */}
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setVisibleModal(true)}>
                    <Image source={require('../../../../assets/images/Frame.png')} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisibleModal(true)}>
                    <Image source={require('../../../../assets/images/Frame1.png')} />
                </TouchableOpacity>
            </View>

            {/* Modal for Image Options */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <TouchableWithoutFeedback onPress={() => setVisibleModal(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select Image</Text>
                                <TouchableOpacity style={styles.option} onPress={openCamera}>
                                    <Ionicons name="camera" size={24} color="black" />
                                    <Text style={styles.optionText}>Take Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option} onPress={pickImage}>
                                    <Ionicons name="images" size={24} color="black" />
                                    <Text style={styles.optionText}>Choose Image</Text>
                                </TouchableOpacity>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    endView: {
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: "#FF3B30",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

