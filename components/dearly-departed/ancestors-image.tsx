import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import MainButton from '../auth/button';

interface AncestorsImageProps {
    imagePath: { uri: string };
    frameId: number;
    remainingSubmissions: number;
    onFormNavigate: (frameId: number) => void;
    hasSubmitted?: boolean | { [key: number]: boolean };
    setHasSubmitted?: (frameId: number) => void;
    uploadedImages?: string[];
    onImageUpload?: (img: string) => void;
}

const AncestorsImage: React.FC<AncestorsImageProps> = ({
    imagePath,
    frameId,
    remainingSubmissions,
    onFormNavigate,
    hasSubmitted,
    setHasSubmitted,
    
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    const params = useLocalSearchParams();

    const isLocked = remainingSubmissions <= 0;
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [modalShown, setModalShown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const isSubmitted = typeof hasSubmitted === 'object'
        ? hasSubmitted[frameId]
        : hasSubmitted;

    useEffect(() => {
        if (params?.selectedImage && !modalShown) {
            setModalShown(true);
            setShowModal(true);
        }
    }, [params?.selectedImage]);

    useEffect(() => {
        if (params.frameId === frameId.toString() && params.selectedImage) {
            const newImage = params.selectedImage.toString();
            setUploadedImages(prev => {
                if (!prev.includes(newImage)) {
                    return [...prev, newImage];
                }
                return prev;
            });
        }
    }, [params.selectedImage]);



    useEffect(() => {
        if (params.fromForm === 'true' && params.frameId === frameId.toString()) {
            setModalVisible(true);
            if (setHasSubmitted) {
                setHasSubmitted(frameId);
            }
        }
    }, [params.fromForm]);

    const handlePress = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handleViewDetails = () => {
        router.push({
            pathname: '/dearly-departed/successfully',
            params: {
                images: JSON.stringify(uploadedImages),
                frameId: frameId.toString(),
                selectedImage: params.selectedImage,
                selectedFrame: params.selectedFrame,
                frameImage: params.frameImage,
                worked: params.worked,
                name: params.name,
                memory: params.memory,
                health: params.health,
                hobbies: params.hobbies,
                dob: params.dob,
                dod: params.dod,
                noteableContribution: params.noteableContribution,
                movie: params.movie,
                food: params.food,
                relationship: params.relationship,
                ancestorRelationship: params.ancestorRelationship,
                dynamicFields: params.dynamicFields,
                // selectedImage: params.selectedImage
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.main}>
                {isLocked ? (
                    <View style={styles.iconContainer}>
                        <Fontisto name="locked" size={16} color="#000" />
                    </View>
                ) : (
                    <Text style={styles.remainingText}>{remainingSubmissions}</Text>
                )}
                <Image
                    source={imagePath}
                    style={[styles.image, isLocked && styles.lockedImage]}
                />
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent = {true}
                statusBarTranslucent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={closeModal}
                            >
                                <Ionicons name="close" size={24} color="#fff" />
                            </TouchableOpacity>

                            <Image
                                source={imagePath}
                                style={styles.modalFrameImage}
                            />

                            {/* {uploadedImages.length > 0 && (
                                <View style={styles.uploadedImageContainer}>
                                    <Text style={styles.uploadedImageTitle}>
                                        Memories ({uploadedImages.length})
                                    </Text>
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={styles.horizontalScroll}
                                    >
                                        {uploadedImages.map((uri, index) => (
                                            <View key={`${uri}-${index}`} style={styles.imageItem}>
                                                <Image
                                                    source={{ uri }}
                                                    style={styles.uploadedImage}
                                                    resizeMode="cover"
                                                />
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            )} */}

                            <Text style={styles.modalText}>Add Dearly Departed</Text>
                            <View style={styles.buttonGroup}>
                                <TouchableOpacity
                                    style={[styles.actionButton, isLocked && styles.disabledButton]}
                                    onPress={() => {
                                        if (!isLocked) {
                                            onFormNavigate(frameId);
                                            closeModal();
                                        }
                                    }}
                                    disabled={isLocked}
                                >
                                    <AntDesign
                                        name="pluscircleo"
                                        size={24}
                                        color={isLocked ? "#ccc" : "rgba(255, 199, 11, 1)"}
                                        style={styles.icon}
                                    />

                                    {isLocked && (
                                        <Text style={styles.lockedText}>
                                            {isSubmitted ? "View Memorial" : "Limit Reached"}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                                {uploadedImages.length > 0 && (
                                    <View style={styles.uploadedImageContainer}>
                                        {/* <Text style={styles.uploadedImageTitle}>
                                        Memories ({uploadedImages.length})
                                    </Text> */}
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            contentContainerStyle={styles.horizontalScroll}
                                        >
                                            {uploadedImages.map((uri, index) => (
                                                <View key={`${uri}-${index}`} style={styles.imageItem}>
                                                    <Image
                                                        source={{ uri }}
                                                        style={styles.uploadedImage}
                                                        resizeMode="cover"
                                                    />
                                                </View>
                                            ))}
                                        </ScrollView>
                                    </View>
                                )}
                            </View>
                            <Text style={styles.modalText}>Add Dearly Departed</Text>
                            <View style={styles.buttonGroup}>
                                <TouchableOpacity
                                    style={[styles.actionButton, isLocked && styles.disabledButton]}
                                    onPress={() => {
                                        if (!isLocked) {
                                            onFormNavigate(frameId);
                                            closeModal();
                                        }
                                    }}
                                    disabled={isLocked}
                                >
                                    <AntDesign
                                        name="pluscircleo"
                                        size={24}
                                        color={isLocked ? "#ccc" : "rgba(255, 199, 11, 1)"}
                                        style={styles.icon}
                                    />

                                </TouchableOpacity>
                            </View>

                            {/* {isSubmitted && ( */}
                            <MainButton
                                title="View Memorial"
                                onPress={handleViewDetails}
                                style={styles.memorialButton}
                            />
                            {/* )} */}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: 110,
        position: 'relative',
    },
    image: {
        borderRadius: 8,
        height: 100,
        width: 100,
    },
    lockedImage: {
        opacity: 0.6,
    },
    iconContainer: {
        position: 'absolute',
        top: 3,
        right: 3,
        zIndex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 8,
        padding: 5,
    },
    remainingText: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255, 199, 11, 0.8)',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        fontSize: 12,
        fontWeight: 'bold',
        zIndex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#151515',
        backgroundColor: 'rgba(217, 217, 217, 0.95)',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        position: 'relative',
        maxHeight: '80%',
    },
    modalFrameImage: {
        borderRadius: 8,
        height: 150,
        width: '100%',
        marginBottom: 15,
    },
    uploadedImageContainer: {
        width: 90,
        height: 90,
        marginBottom: 15,
        // borderWidth:2,
        borderRadius: 10,
        marginLeft: 10
    },
    horizontalScroll: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 8,
    },
    // imageItem: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 18,
    //     marginRight: 10,
    //     backgroundColor: '#fff',
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 4,
    //     elevation: 2,
    //     overflow: 'hidden',
    // },
    uploadedImage: {
        width: 90,
        height: 90,
        borderRadius: 8,
    },
    uploadedImageTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
        alignSelf: 'flex-start',
    },
    modalText: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    buttonGroup: {
        width: '100%',
        marginBottom: 20,
        flexDirection: "row"
    },
    actionButton: {
        backgroundColor: 'rgba(118, 118, 118, 1)',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: 90,
        height: 90,
        justifyContent: "center"
    },
    disabledButton: {
        backgroundColor: '#e0e0e0',
    },
    memorialButton: {
        marginTop: 20,
        width: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        padding: 5,
    },
    lockedText: {
        color: '#ff0000',
        fontSize: 12,
        marginTop: 5,
    },

});

export default AncestorsImage;
