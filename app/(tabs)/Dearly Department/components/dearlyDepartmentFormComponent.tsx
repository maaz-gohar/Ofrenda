import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

const DearlyDepartmentFormComponent = ({ name, onPress, iconType = 'Ionicons', iconName, value, setValue }) => {
    const [error, setError] = useState(null);

    const handleHobbyChange = (text) => {
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
                onPress={onPress}
                multiline
                maxLength={1000} // Optional character limit
            />
            {iconType === 'Ionicons' ? (
                <Ionicons name={iconName} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'FontAwesome' ? (
                <FontAwesome name={iconName} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'MaterialIcons' ? (
                <MaterialIcons name={iconName} size={14} color="#858383" style={styles.icon} />
            ) : iconType === 'AntDesign' ? (
                <AntDesign name={iconName} size={14} color="#858383" style={styles.icon} />
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
