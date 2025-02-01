import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

const DearlyDepartmentFormComponent = ({ name, onPress, iconType = 'Ionicons', iconName, value, setValue }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={name}
                placeholderTextColor="#858383"
                value={value}
                onChangeText={setValue}
                style={styles.textInput}
                onPress={onPress}
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
        width: "93%",
        flexDirection: "row",
    },
    textInput: {
        flex: 1,
        color: "#000",
    },
    icon: {
        alignSelf: "center",
        paddingRight: 3,
    },
});

export default DearlyDepartmentFormComponent;
