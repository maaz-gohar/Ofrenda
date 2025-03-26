import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

interface FloatingLabelInputProps {
    placeholder: string;
    iconName: string;
    iconType?: 'Ionicons' | 'FontAwesome' | 'MaterialIcons';
    eyeIcon?: boolean;
    arrow?: boolean;
    value?: string;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void;
    onEyeIconPress?: (isPasswordVisible: boolean) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
    placeholder,
    iconName,
    iconType = 'Ionicons',
    eyeIcon = null,
    arrow = false,
    onEyeIconPress,
}) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const animatedLabel = new Animated.Value(value ? 1 : 0);

    useEffect(() => {
        Animated.timing(animatedLabel, {
            toValue: isFocused || value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: 'absolute',
        left: 60,
        top: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [17, 10],
        }),
        fontSize: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: '#888',
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            {/* Icon */}
            {iconType === 'Ionicons' ? (
                <Ionicons name={iconName} size={24} color="#888" style={styles.icon} />
            ) : iconType === 'FontAwesome' ? (
                <FontAwesome name={iconName} size={24} color="#888" style={styles.icon} />
            ) : iconType === 'MaterialIcons' ? (
                <MaterialIcons name={iconName} size={24} color="#888" style={styles.icon} />
            ) : null}

            {/* Floating Label */}
            <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>

            {/* Input */}
            <TextInput
                value={value}
                onChangeText={setValue}
                style={[styles.input, { width: screenWidth - 60 }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={!!(eyeIcon && !isPasswordVisible)}
                maxLength={45}
            />

            {/* Eye Icon */}
            {eyeIcon && (
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => {
                        setIsPasswordVisible((prevState) => !prevState);
                        if (onEyeIconPress) {
                            onEyeIconPress(isPasswordVisible);
                        }
                    }}
                >
                    <Ionicons
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color="#888"
                    />
                </TouchableOpacity>
            )}

            {/* Arrow Icon */}
            {arrow && (
                <TouchableOpacity>
                    <AntDesign name="right" size={15} color="#000" style={styles.arrow} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#F7F5FA',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 55,
        paddingTop: 30,
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 20,
        color: '#FFC70B',
    },
    input: {
        paddingBottom: 7,
        flex: 1,
        fontSize: 16,
        paddingLeft: 50, // Adds space for the icon
        color: '#000',
        width: '100%',
        textAlignVertical: 'center', // Aligns text vertically in the middle
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 13,
    },
    arrow: {
        alignSelf: 'flex-end',
        backgroundColor: '#FFC70B',
        padding: 4,
        borderRadius: 40,
        position: 'absolute',
        bottom: 12,
    },
});

export default FloatingLabelInput;
