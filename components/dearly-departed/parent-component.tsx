import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AddDearlyDepartmentComponent from './dearly-department-image';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ParentComponentProps {
    onImageSelect?: (index: number) => void;
    selectedImageIndex?: number;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ onImageSelect, selectedImageIndex }) => {
    const images = [
        require('../../assets/images/food/1.png'),
        require('../../assets/images/food/2.png'),
        require('../../assets/images/food/3.png'),
        require('../../assets/images/food/4.png'),
        require('../../assets/images/food/5.png'),
        require('../../assets/images/food/6.png'),
        require('../../assets/images/food/7.png'),
        require('../../assets/images/food/8.png'),
        require('../../assets/images/food/9.png'),
        require('../../assets/images/food/10.png'),
        require('../../assets/images/food/1.png'),
        require('../../assets/images/food/2.png'),
        require('../../assets/images/food/3.png'),
        require('../../assets/images/food/4.png'),
        require('../../assets/images/food/5.png'),
        require('../../assets/images/food/6.png'),
        require('../../assets/images/food/7.png'),
        require('../../assets/images/food/8.png'),
        require('../../assets/images/food/9.png'),
        require('../../assets/images/food/10.png'),
        require('../../assets/images/food/1.png'),
        require('../../assets/images/food/2.png'),
        require('../../assets/images/food/3.png'),
        require('../../assets/images/food/4.png'),
        require('../../assets/images/food/5.png'),
        require('../../assets/images/food/6.png'),
        require('../../assets/images/food/7.png'),
        require('../../assets/images/food/8.png'),
        require('../../assets/images/food/9.png'),
        require('../../assets/images/food/10.png'),
        
    ];

    const router = useRouter();

    return (
        <View style={styles.gridContainer}>
            {images.map((imagePath, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => router.push('payment-method')} 
                    style={styles.imageWrapper}
                >
                    <AddDearlyDepartmentComponent
                        imagePath={imagePath}
                        isSelected={selectedImageIndex === index}
                        onSelect={() => onImageSelect && onImageSelect(index)}
                    />
                    <View style={styles.lockIconContainer}>
                        <FontAwesome name="lock" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    imageWrapper: {
        position: 'relative',
        margin: 5,
    },
    lockIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -12 }, { translateY: -12 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 12,
        padding: 4,
    },
});

export default ParentComponent;