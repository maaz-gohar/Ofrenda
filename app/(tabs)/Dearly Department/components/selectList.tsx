import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const SelectList = ({ setSelected }) => {
    const data = [
        { key: 1, value: 'Hobby One' },
        { key: 2, value: 'Hobby Two' },
        { key: 3, value: 'Hobby Three' },
        { key: 4, value: 'Hobby Four' },
        { key: 5, value: 'Hobby Five' },
        { key: 6, value: 'Hobby Six' },
        { key: 7, value: 'Hobby Seven' },
    ];

    const handleSelect = (val) => {
        console.log("Selected Values:", val);
        if (Array.isArray(val)) {
            setSelected(val);
        } else {
            console.error("Invalid value received:", val);
        }
    };

    return (
        <View style={styles.container}>
            <MultipleSelectList
                data={data}
                setSelected={setSelected}
                onSelect={handleSelect}
                save="value"
                placeholder="Select hobbies"
                boxStyles={styles.boxStyles}
                dropdownStyles={styles.dropdownStyles}
                inputStyles={styles.inputStyles}
                checkBoxStyles={styles.checkBoxStyles}
                checkBoxStylesChecked={styles.checkBoxStylesChecked}
                badgeStyles={styles.badgeStyles}
                badgeTextStyles={styles.badgeTextStyles}
                defaultOption={{ key: '', value: 'Select hobbies' }}
                labelStyles={styles.hiddenLabel}
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
        alignSelf: 'center',
        zIndex: 1,
        marginBottom: -10,
    },
    boxStyles: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 12,
        minHeight: 50,
        backgroundColor: 'white',
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
        zIndex: 1000,
    },
    inputStyles: {
        fontSize: 16,
        color: '#999999',
        textAlign: 'left',
        paddingVertical: 4,
        width: '100%',
        flex: 0,
    },
    checkBoxStyles: {
        borderColor: '#c2c2c2',
        borderRadius: 4,
        height: 20,
        width: 20,
        backgroundColor: 'white',
    },
    checkBoxStylesChecked: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
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
        backgroundColor: '#e8e8e8',
        borderRadius: 15,
        marginRight: 5,
        marginBottom: 5,
    },
    badgeTextStyles: {
        fontSize: 14,
        color: '#666666',
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
        borderColor: '#c2c2c2',
        transform: [{ rotate: '45deg' }],
        marginTop: -5,
        position: 'absolute',
        right: 10,
    },
});

export default SelectList;