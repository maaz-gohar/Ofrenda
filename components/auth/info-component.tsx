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

interface InfoComponentProps {
    name: string;
    iconType?: 'Ionicons' | 'FontAwesome' | 'MaterialIcons';
    iconName: 
        | keyof typeof Ionicons.glyphMap
        | keyof typeof FontAwesome.glyphMap
        | keyof typeof MaterialIcons.glyphMap;
    arrow?: boolean;
    onPress?: () => void;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ name, iconType = 'Ionicons', iconName, arrow = false, onPress }) => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.data}>
                    {iconType === 'Ionicons' ? (
                        <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={24} color="#888" style={styles.icon} />
                    ) : iconType === 'FontAwesome' ? (
                        <FontAwesome name={iconName as keyof typeof FontAwesome.glyphMap} size={24} color="#888" style={styles.icon} />
                    ) : iconType === 'MaterialIcons' ? (
                        <MaterialIcons name={iconName as keyof typeof MaterialIcons.glyphMap} size={24} color="#888" style={styles.icon} />
                    ) : null}
                    <Text style={styles.name}>{name}</Text>
                </View>
                {arrow && (
                    <TouchableOpacity>
                        <AntDesign name="right" size={15} color="#000" style={styles.arrow} />
                    </TouchableOpacity>
                )}

            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#F7F5FA',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 55,
        paddingVertical: 5,
        justifyContent: 'space-between',
        width: "100%",
        flexDirection: "row",
        // minWidth: 400
        // paddingHorizontal: 10,
    },
    data: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 10,
        color: '#FFC70B',
    },
    name: {
        // fontWeight: "500",
        paddingLeft: 50,
        paddingRight: 2,
        fontSize: 16,
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center"
    },
    arrow: {
        alignSelf: 'flex-end',
        backgroundColor: '#FFC70B',
        padding: 4,
        borderRadius: 40,
        position: 'absolute',
        bottom: 10,
    },
});

export default InfoComponent;
