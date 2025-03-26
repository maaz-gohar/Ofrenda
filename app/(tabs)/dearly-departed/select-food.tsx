import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import MainText from '../../../components/auth/top-text';
import MainButton from '../../../components/auth/button';
import ParentComponent from '../../../components/dearly-departed/parent-component';
import TabBar from '../../../components/auth/tab-bar';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function SelectFood() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // const handleImageSelect = (index) => {
    //     setSelectedImageIndex(index);
    // };

    // const handleConfirmSelection = () => {
    //     if (selectedImageIndex !== null) {
    //         // Create the image name based on the selected index
    //         const selectedImageName = `${selectedImageIndex + 1}.png`;

    //         // Navigate back to the form with the selected image
    //         router.push({
    //             pathname: '/paymentMethod',
    //             params: {
    //                 selectedFoodImage: selectedImageName
    //             }
    //         });
    //     }
    // };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Select Image'}
                    showIcon={true}
                    setting={true}
                />

                <View style={[styles.main]}>
                    <ParentComponent
                        // onImageSelect={handleImageSelect}
                        // selectedImageIndex={selectedImageIndex}
                    />
                    {/* <MainButton
                        title={"Select"}
                        onPress={handleConfirmSelection}
                        gradientColor={[b1, b2]}
                        disabled={selectedImageIndex === null}
                    /> */}
                </View>
            </ScrollView>
            <TabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    main: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        marginTop: -35,
    },
});