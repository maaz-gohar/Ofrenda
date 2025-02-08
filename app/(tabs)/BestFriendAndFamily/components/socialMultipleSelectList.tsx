import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';

const SocialMultipleSelectList = ({ setSelected }) => {
    const navigation = useNavigation();

    // Custom component for the list item
    const CustomOption = ({ item }) => (
        <View style={[styles.optionContainer, { backgroundColor: item.bgColor }]}>
            <Image
                source={item.image}
                style={styles.optionImage}
                resizeMode="contain"
            />
            <Text style={styles.optionText}>{item.label}</Text>
        </View>
    );

    const data = [
        {
            key: '1',
            value: <CustomOption item={{
                image: require('../../../../assets/images/Group.png'),
                bgColor: 'rgba(228, 228, 228, 1)',
                // label: 'Option 1'
            }} />,
            label: 'Option 1'
        },
        {
            key: '2',
            value: <CustomOption item={{
                image: require('../../../../assets/images/Group.png'),
                bgColor: 'rgba(228, 228, 228, 1)',
                // label: 'Option 2'
            }} />,
            label: 'Option 2'
        },
        {
            key: '3',
            value: <CustomOption item={{
                image: require('../../../../assets/images/Group.png'),
                bgColor: 'rgba(228, 228, 228, 1)',
                // label: 'Option 3'
            }} />,
            label: 'Option 3'
        },
        {
            key: '4',
            value: <CustomOption item={{
                image: require('../../../../assets/images/Group.png'),
                bgColor: 'rgba(228, 228, 228, 1)',
                // label: 'Option 4'
            }} />,
            label: 'Option 4'
        },
    ];

    return (
        <View style={styles.container}>
            <MultipleSelectList
                setSelected={setSelected}
                data={data}
                save="label"
                placeholder="Select Options"
                boxStyles={styles.boxStyles}
                dropdownStyles={styles.dropdownStyles}
                inputStyles={styles.inputStyles}
                checkBoxStyles={styles.checkBoxStyles}
                checkBoxStylesChecked={styles.checkBoxStylesChecked}
                badgeStyles={styles.badgeStyles}
                badgeTextStyles={styles.badgeTextStyles}
                defaultOption={{ key: '', value: 'Select Options' }}
                labelStyles={styles.hiddenLabel}
                onSelect={() => { }}
                search={false}
                checkbox={true}
                arrowicon={<View style={styles.arrow} />}
                checkicon={<View style={styles.checkIcon} />}
                disabledCheckBoxStyles={{ backgroundColor: "#000" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '93%',
        marginBottom: -10,
        alignSelf: 'center',
        zIndex: 1,
    },
    boxStyles: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 25,
        paddingHorizontal: 10,
        minHeight: 48,
        alignSelf: "center"
    },
    dropdownStyles: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 10,
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        maxHeight: 200,
        overflow: 'hidden'
    },
    inputStyles: {
        fontSize: 16,
        color: '#999999',
        textAlign: 'left',
        alignSelf: "center"
    },
    checkBoxStyles: {
        borderColor: '#c2c2c2',
        borderRadius: 4,
        height: 20,
        width: 20,
        backgroundColor: 'white',
    },
    checkBoxStylesChecked: {
        backgroundColor: 'rgba(112, 172, 248, 1)',
        borderColor: 'rgba(112, 172, 248, 1)',
        borderRadius: 4,
        height: 20,
        width: 20,
    },
    checkIcon: {
        width: 12,
        height: 8,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'white',
        transform: [{ rotate: '-45deg' }],
        position: 'absolute',
        top: 4,
        left: 4,
    },
    badgeStyles: {
        backgroundColor: 'rgba(228, 228, 228, 1)',
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 4,
        margin: 2,
    },
    badgeTextStyles: {
        fontSize: 14,
        color: '#000000',
    },
    hiddenLabel: {
        height: 0,
        margin: 0,
        padding: 0,
        display: 'none',
    },
    arrow: {
        width: 8,
        height: 8,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        justifyContent: "center",
        alignSelf: "center",
        borderColor: '#c2c2c2',
        transform: [{ rotate: '45deg' }],
        marginTop: -5,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 4,
        // width: '100%',
    },
    optionImage: {
        width: 20,
        height: 20,
        borderRadius: 20,
        // marginRight: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#000000',
    }
});

export default SocialMultipleSelectList;