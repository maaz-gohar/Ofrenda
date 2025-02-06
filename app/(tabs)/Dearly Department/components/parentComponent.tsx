import React from 'react';
import { View } from 'react-native';
import AddDearlyDepartmentComponent from './dearlyDepartmentImage';

const ParentComponent = ({ onImageSelect, selectedImageIndex }) => {
    const images = [
        require('../../../../assets/images/food/1.png'),
        require('../../../../assets/images/food/2.png'),
        require('../../../../assets/images/food/3.png'),
        require('../../../../assets/images/food/4.png'),
        require('../../../../assets/images/food/5.png'),
        require('../../../../assets/images/food/6.png'),
        require('../../../../assets/images/food/7.png'),
        require('../../../../assets/images/food/8.png'),
        require('../../../../assets/images/food/9.png'),
        require('../../../../assets/images/food/10.png'),
        require('../../../../assets/images/food/1.png'),
        require('../../../../assets/images/food/2.png'),
        require('../../../../assets/images/food/3.png'),
        require('../../../../assets/images/food/4.png'),
        require('../../../../assets/images/food/5.png'),
        require('../../../../assets/images/food/6.png'),
        require('../../../../assets/images/food/7.png'),
        require('../../../../assets/images/food/8.png'),
        require('../../../../assets/images/food/9.png'),
        require('../../../../assets/images/food/10.png'),
        require('../../../../assets/images/food/1.png'),
        require('../../../../assets/images/food/2.png'),
        require('../../../../assets/images/food/3.png'),
        require('../../../../assets/images/food/4.png'),
        require('../../../../assets/images/food/5.png'),
        require('../../../../assets/images/food/6.png'),
        require('../../../../assets/images/food/7.png'),
        require('../../../../assets/images/food/8.png'),

        // ... rest of your images
    ];

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center" }}>
            {images.map((imagePath, index) => (
                <AddDearlyDepartmentComponent
                    key={index}
                    imagePath={imagePath}
                    isSelected={selectedImageIndex === index}
                    onSelect={() => onImageSelect(index)}
                />
            ))}
        </View>
    );
};

export default ParentComponent;