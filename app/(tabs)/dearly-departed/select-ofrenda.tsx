import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AncestorsImage from '../../../components/dearly-departed/ancestors-image';
import MainText from '../../../components/auth/top-text';
import TabBar from '../../../components/auth/tab-bar';
import useFrameCounts from '../../../hooks/useFrameCounts';
import FrameComponent from '@/components/dearly-departed/frame-component';

export default function SelectOfrenda() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { frameCounts, decrementCount } = useFrameCounts();
    const [frameImages, setFrameImages] = useState<Record<number, string[]>>({});
    const [selectedFrame, setSelectedFrame] = useState<number | null>(null);

    useEffect(() => {
        const loadSelectedFrame = async () => {
            try {
                const stored = await AsyncStorage.getItem('selectedFrame');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    setSelectedFrame(parsed.frameId);
                }
            } catch (error) {
                console.error('Error loading selected frame:', error);
            }
        };

        loadSelectedFrame();
    }, []);

    const frames = [
        { id: 1, image: require('../../../assets/images/frames/frame1.png'), name: 'frame1' },
        { id: 2, image: require('../../../assets/images/frames/frame2.png'), name: 'frame2' },
        { id: 3, image: require('../../../assets/images/frames/frame3.png'), name: 'frame3' },
        { id: 4, image: require('../../../assets/images/frames/frame4.png'), name: 'frame4' },
        { id: 5, image: require('../../../assets/images/frames/frame5.png'), name: 'frame5' },
        { id: 6, image: require('../../../assets/images/frames/frame6.png'), name: 'frame6' },
        { id: 7, image: require('../../../assets/images/frames/frame7.png'), name: 'frame7' },
        { id: 8, image: require('../../../assets/images/frames/frame8.png'), name: 'frame8' },
        { id: 9, image: require('../../../assets/images/frames/frame9.png'), name: 'frame9' },
        { id: 10, image: require('../../../assets/images/frames/frame10.png'), name: 'frame10' },
        { id: 11, image: require('../../../assets/images/frames/frame11.png'), name: 'frame11' },
        { id: 12, image: require('../../../assets/images/frames/frame12.png'), name: 'frame12' },
        { id: 13, image: require('../../../assets/images/frames/frame13.png'), name: 'frame13' },
        { id: 14, image: require('../../../assets/images/frames/frame14.png'), name: 'frame14' },
        { id: 15, image: require('../../../assets/images/frames/frame15.png'), name: 'frame15' },
        { id: 16, image: require('../../../assets/images/frames/frame16.png'), name: 'frame16' },
    ];

    const handleFrameSelect = async (frameId: number, frameName: string) => {
        const dataToStore = {
            frameId,
            frameName,
        };
        await AsyncStorage.setItem('selectedFrame', JSON.stringify(dataToStore));
        setSelectedFrame(frameId);
    };

    const handleFormNavigate = async (frameId: number, frameName: string) => {
        await AsyncStorage.setItem('selectedFrame', JSON.stringify({
            frameId,
            frameName,
            imageUri: frames.find(f => f.id === frameId)?.image
        }));

        router.push({
            pathname: '/dearly-departed/dearly-department-form',
            params: {
                ...params,
                frameId: frameId.toString(),
                frameImage: frames.find(f => f.id === frameId)?.image,
                existingImages: JSON.stringify(frameImages[frameId] || [])
            },
        });
    };
    const handleImageUpload = (frameId: number, newImage: string) => {
        setFrameImages(prev => ({
            ...prev,
            [frameId]: [...(prev[frameId] || []), newImage],
        }));
        decrementCount(frameId);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                <MainText title="Select Ofrenda" showIcon={true} setting={true} />
                <View style={styles.main}>
                    <Text style={styles.headerText}>Choose a Frame</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ paddingHorizontal: 20 }} bounces={false} >
                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                            <FrameComponent text="Ofrenda" isGradient={true} onPress={() => router.push('/dearly-departed/select-ofrenda')} />
                            <FrameComponent text="Elegant" onPress={() => router.push('/dearly-departed/elegant')} />
                            <FrameComponent text="Indian" onPress={() => router.push('/dearly-departed/indian')} />
                            <FrameComponent text="Scandinavian" />
                            <FrameComponent text="Chinese" />
                            <FrameComponent text="Japanese" />
                            <FrameComponent text="Modernist" />
                            <FrameComponent text="Another Mexican style" />
                            <FrameComponent text="Glass photo frames " />
                            <FrameComponent text="Classical Christian altar" />
                            <FrameComponent text="Hebrew altar" />
                            <FrameComponent text="Wall photo frames" />
                            {/* <View style={styles.scrollContainer}>
                                                <Text style={{ fontWeight: "600", fontSize: 16 }}>More</Text>
                                            </View> */}


                        </View>
                    </ScrollView>
                    <View style={styles.gridContainer}>
                        {frames.map((frame) => (
                            <AncestorsImage
                                key={frame.id}
                                imagePath={frame.image}
                                frameId={frame.id}
                                remainingSubmissions={frameCounts[frame.id]}
                                onFormNavigate={() => handleFormNavigate(frame.id, frame.name)}
                                uploadedImages={frameImages[frame.id] || []}
                                onImageUpload={(img) => handleImageUpload(frame.id, img)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <TabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    main: {
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingTop: 30,
        marginTop: -35,
        width: "100%"
    }
});
