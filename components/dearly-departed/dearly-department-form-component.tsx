import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Controller, FieldValues } from 'react-hook-form';

interface DearlyDepartmentFormProps {
    control: any; // react-hook-form control prop
    name: string;
    onPress?: () => void;
    iconType?: 'Ionicons' | 'FontAwesome' | 'MaterialIcons' | 'AntDesign';
    iconName?: keyof typeof Ionicons.glyphMap | keyof typeof FontAwesome.glyphMap | keyof typeof MaterialIcons.glyphMap | keyof typeof AntDesign.glyphMap;
    placeholder?: string;
    rules?: any; // Validation rules for React Hook Form
}

const DearlyDepartmentFormComponent: React.FC<DearlyDepartmentFormProps> = ({
    control,
    name,
    onPress = () => {},
    iconType = 'Ionicons',
    iconName = 'add' as keyof typeof Ionicons.glyphMap,
    placeholder = 'Enter hobbies',
    rules = {},
}) => {
    const [error, setError] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor="#858383"
                            value={value}
                            onChangeText={onChange}
                            style={[styles.textInput, error && styles.errorInput]}
                            multiline
                            maxLength={1000} // Optional character limit
                        />
                    </>
                )}
            />

            {iconType === 'Ionicons' ? (
                <TouchableOpacity onPress={onPress}>
                    <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={20} color="#858383" style={styles.icon} />
                </TouchableOpacity>
            ) : iconType === 'FontAwesome' ? (
                <TouchableOpacity onPress={onPress}>
                    <FontAwesome name={iconName as keyof typeof FontAwesome.glyphMap} size={20} color="#858383" style={styles.icon} />
                </TouchableOpacity>
            ) : iconType === 'MaterialIcons' ? (
                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons name={iconName as keyof typeof MaterialIcons.glyphMap} size={20} color="#858383" style={styles.icon} />
                </TouchableOpacity>
            ) : iconType === 'AntDesign' ? (
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name={iconName as keyof typeof AntDesign.glyphMap} size={20} color="#858383" style={styles.icon} />
                </TouchableOpacity>
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
        alignContent: 'center',
        width: '93%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    textInput: {
        flex: 1,
        color: '#000',
        textAlign: 'left',
        textAlignVertical: 'center',
        alignContent: 'center',
    },
    icon: {
        alignSelf: 'center',
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
    },
});

export default DearlyDepartmentFormComponent;
