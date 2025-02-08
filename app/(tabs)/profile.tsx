import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Image,
    Modal,
    Button
} from 'react-native';
import { MaterialIcons, Ionicons, Octicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import FloatingLabelInput from './components/input';
import MainButton from './components/button';
import MainText from './components/topText';
import InfoComponent from './components/infoComponent';
import TabBar from './components/tabBar';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const CloseModal = () => setModalVisible(false);

    const SelectImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
        CloseModal();
    };

    const PickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
        CloseModal();
    };

    const RemoveImage = () => {
        setProfileImage(null);
        CloseModal();
    };

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title="Profile" showIcon={true} setting={true} />
                <View style={styles.main}>
                    <Image
                        source={
                            profileImage
                                ? { uri: profileImage }
                                : require('../../assets/images/profile1.jpg')
                        }
                        style={styles.img}
                    />
                    <View >
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <LinearGradient colors={[b1, b2]} style={styles.gradient}>
                                <Octicons name="pencil" size={18} color="#000" style={styles.icon} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FloatingLabelInput placeholder="First Name" iconName="person-outline" />
                        <FloatingLabelInput placeholder="Last Name" iconName="person-outline" />
                        <FloatingLabelInput placeholder="Email Address" iconName="envelope-o" iconType="FontAwesome" />
                        <InfoComponent name="Birth" iconName={"calendar-outline"} arrow={true} />
                        <InfoComponent name="Gender" iconName={"male-female"} arrow={true} />
                        <InfoComponent name="Setting" iconName={"settings-outline"} arrow={true} />
                        <InfoComponent name="Logout" iconName={"logout"} iconType='MaterialIcons' onPress={() => router.push('/')} />
                    </View>
                </View>
                <View style={styles.endView}>
                    <MainButton title="Change Password" showIcon={true} />
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={CloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={PickImage}>
                                <View style={styles.modalOption}>
                                    <LinearGradient colors={[b1, b2]} style={styles.optionGradient}>
                                        <MaterialIcons name="photo-library" size={37} color={"rgba(86, 86, 86, 1)"} />
                                    </LinearGradient>
                                    <Text style={styles.optionText}>Select Photo</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={SelectImage}>
                                <View style={styles.modalOption}>
                                    <LinearGradient colors={[b1, b2]} style={styles.optionGradient}>
                                        <Ionicons name="camera-outline" size={37} color={"rgba(86, 86, 86, 1)"} />
                                    </LinearGradient>
                                    <Text style={styles.optionText}>Take Photo</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={RemoveImage}>
                                <View style={styles.modalOption}>
                                    <LinearGradient colors={[b1, b2]} style={styles.optionGradient}>
                                        <MaterialIcons name="delete" size={37} color={"rgba(86, 86, 86, 1)"} />
                                    </LinearGradient>
                                    <Text style={styles.optionText}>Remove Photo</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={CloseModal}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TabBar />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingTop: 30,
        marginTop: -15
    },
    img: {
        height: 120,
        width: 120,
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 60,
        marginTop: -90,
    },
    gradient: {
        borderRadius: 50,
        position: "absolute",
        bottom: 0,
        left: 25,
    },
    icon: {
        padding: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        width: "80%",
        alignItems: "center",
    },
    modalOption: {
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 15
    },
    optionGradient: {
        padding: 15,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    optionText: {
        marginTop: 10,
        textAlign: "center",
    },
    endView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    closeButton: {
        backgroundColor: '#FFC70B',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 10,
    },
    closeButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
});