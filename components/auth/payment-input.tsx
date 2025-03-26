import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    Image,
    TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PaymentInputProps {
    placeholder: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
    imageSources?: { uri: string }[];
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
    secureTextEntry?: boolean;
    maxLength?: number;
}

const PaymentInput: React.FC<PaymentInputProps> = ({
    placeholder,
    icon,
    imageSources = [],
    keyboardType = 'default',
    secureTextEntry = false,
    maxLength,
}) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const animatedLabel = new Animated.Value(value ? 1 : 0);

    useEffect(() => {
        Animated.timing(animatedLabel, {
            toValue: isFocused || value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const handleTextChange = (text:string) => {
        if (keyboardType === 'numeric') {
            const cleanInput = text.replace(/\s+/g, '').replace(/[^0-9]/g, '');
            if (cleanInput.length <= 16) {
                const formattedCardNumber = cleanInput
                    .replace(/(.{4})(?=.)/g, '$1 ')
                    .trim();
                setValue(formattedCardNumber);
            }
        } else {
            setValue(text);
        }
    };

    const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
        position: 'absolute',
        left: 20, // Position label at the left
        top: animatedLabel.interpolate({
            inputRange: [0, 2],
            outputRange: [15, 0], // Adjust the vertical position
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
            <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
            <TextInput
                value={value}
                onChangeText={handleTextChange}
                style={[styles.input, { width: screenWidth - 30 }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardType={keyboardType}
                maxLength={maxLength || 19}
                secureTextEntry={secureTextEntry}
            />
            <View style={styles.iconContainer}>
                {icon && (
                    <Ionicons
                        name={icon}
                        size={24}
                        color="#797979"
                        style={styles.icon}
                    />
                )}
                {imageSources.length > 0 &&
                    imageSources.map((source, index) => (
                        <Image
                            key={index}
                            source={source}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#C2C2C2',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row',
        right: 10,
        top: 13,
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    image: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 40,
        color: '#000',
        width: '100%',
        textAlign: 'left',
    },
});

export default PaymentInput;
