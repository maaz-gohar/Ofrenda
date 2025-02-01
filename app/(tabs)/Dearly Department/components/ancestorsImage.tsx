import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Button,
} from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import LinearGradient from 'react-native-linear-gradient';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function AncestorsImage({ imagePath, showIcon = false, value }) {
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handlePress = () => {
        if (!showIcon) {
            setModalVisible(true);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    useEffect(() => {
        if (modalVisible) {
            setModalVisible(false);
        }
    }, [pathname]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.main}>
                {showIcon && (
                    <View style={styles.iconContainer}>
                        <Fontisto name="locked" size={16} color={"#000"} style={styles.icon} />
                    </View>
                )}
                <Image source={imagePath} style={styles.image} />

            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Image source={imagePath} style={styles.modalImage} />
                        <Text style={styles.modalText}>Add Dearly Departed</Text>
                        <View style={styles.addDearly}>
                            <TouchableOpacity
                                onPress={() => router.push('/Dearly Department/dearlyDepartmentForm')}
                            >
                                <AntDesign name="pluscircleo" size={24} color="rgba(255, 199, 11, 1)" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalText}>Add Food On Table</Text>
                        <View style={styles.addDearly}>
                            {/* <LinearGradient colors={[b1, b2]}> */}
                            <TouchableOpacity
                                onPress={() => router.push('/Dearly Department/dearlyDepartmentForm')}
                            >
                                <View>
                                    <AntDesign name="pluscircleo" size={24} color="rgba(255, 199, 11, 1)" />
                                </View>
                            </TouchableOpacity>
                            {/* </LinearGradient> */}
                        </View>
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal >
        </View >
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
        width: 110,
    },
    image: {
        borderRadius: 8,
        height: 109,
        width: 109,
    },
    iconContainer: {
        position: "absolute",
        top: 3,
        right: 3,
        zIndex: 1,
        backgroundColor: "rgba(217, 217, 217, 0.5)",
        borderRadius: 8,
        padding: 5,
    },
    icon: {
        zIndex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        borderWidth: 1,
        borderColor: "rgba(21, 21, 21, 1)",
        backgroundColor: "rgba(217, 217, 217, 0.9)",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
    },
    modalImage: {
        borderRadius: 8,
        height: 173,
        width: "100%",
        marginBottom: 15,
    },
    modalText: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 20,
        alignSelf: "flex-start",
    },
    addDearly: {
        backgroundColor: "rgba(118, 118, 118, 1)",
        padding: 30,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
});
