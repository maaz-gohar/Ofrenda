import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Button,
    TouchableWithoutFeedback,

} from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function CollegeDesignComponent({ imagePath, showIcon = false, value }) {
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
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Image source={imagePath} style={styles.modalImage} />
                                <Text style={styles.modalText}>Add Picture in Frame</Text>
                                <View style={styles.addDearly}>
                                    <TouchableOpacity
                                        onPress={() => router.push('/BestFriendAndFamily/selectCollegeDesign')}
                                    >
                                        <AntDesign name="pluscircleo" size={24} color="#5ea4fd" />
                                    </TouchableOpacity>
                                </View>
                                {/* <Text style={styles.modalText}>Add Picture in Frame</Text> */}
                                {/* <View style={styles.addDearly}>
                            <TouchableOpacity
                                onPress={() => router.push('/Dearly Department/dearlyDepartmentForm')}
                            >
                                <AntDesign name="pluscircleo" size={24} color="#5ea4fd" />
                            </TouchableOpacity>
                        </View> */}
                                {/* <Button title="Close" onPress={closeModal} /> */}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
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
