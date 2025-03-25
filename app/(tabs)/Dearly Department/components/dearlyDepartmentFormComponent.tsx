import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

const DearlyDepartmentFormComponent: any = ({ 
    name = 'Enter hobbies', 
    onPress = () => {}, 
    iconType = 'Ionicons', 
    iconName = 'add' as keyof typeof Ionicons.glyphMap, 
    value = '', 
    setValue = (value: string) => {} 
}) => {
    const [error, setError] = useState<string | null>(null);

    const handleHobbyChange = (text: string) => {
        // Split hobbies by comma and filter empty strings
        const hobbies = text.split(',').map(h => h.trim()).filter(h => h);

        if (hobbies.length > 6) {
            // If exceeding limit, keep first 6 hobbies
            const limitedHobbies = hobbies.slice(0, 6).join(', ');
            setValue(limitedHobbies);
            setError('Maximum 6 Values allowed');
            return;
        }

        // Check if last character is comma
        const lastChar = text.slice(-1);
        if (hobbies.length === 6 && lastChar === ',') {
            setError('Maximum 6 Values reached');
            return;
        }

        setError(null);
        setValue(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={name}
                placeholderTextColor="#858383"
                value={value}
                onChangeText={handleHobbyChange}
                style={[styles.textInput, error && styles.errorInput]}
                multiline
                maxLength={1000} // Optional character limit
            />
            {iconType === 'Ionicons' ? (
                <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'FontAwesome' ? (
                <FontAwesome name={iconName as keyof typeof FontAwesome.glyphMap} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'MaterialIcons' ? (
                <MaterialIcons name={iconName as keyof typeof MaterialIcons.glyphMap} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'AntDesign' ? (
                <AntDesign name={iconName as keyof typeof AntDesign.glyphMap} size={14} color="#858383" style={styles.icon} />
            ) : null}

            {error && (
                <Text style={styles.errorText}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: "center",
        width: "93%",
        flexDirection: "row",
    },
    textInput: {
        flex: 1,
        color: "#000",
        textAlign: 'left',         // Left alignment
        textAlignVertical: 'center', // Vertical center
        // alignSelf:""
        alignContent: "center"

    },
    icon: {
        alignSelf: "center",
        paddingRight: 3,
    },
    errorText: {
        position: 'absolute',
        bottom: -18,
        left: 15,
        color: 'red',
        fontSize: 12,
    },
    errorInput: {
        borderColor: 'red',
    }
});

export default DearlyDepartmentFormComponent;
