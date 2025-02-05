import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';

const SelectList = ({ setSelected }) => {
    // const [selected, setSelected] = useState([]);
    const navigation = useNavigation();

    const data = [
        { key: 1, value: 'Food One' },
        { key: 2, value: 'Food Two' },
        { key: 3, value: 'Food Three' },
        { key: 4, value: 'Food Four' },
        { key: 5, value: 'Food Five' },
        { key: 6, value: 'Food Six' },
        { key: 7, value: 'Food Seven' },
    ];


    return (
        <View style={styles.container}>
            <MultipleSelectList
                setSelected={setSelected}
                data={data}
                save="value"
                placeholder="Favorite Food, Restaurants"
                boxStyles={styles.boxStyles}
                dropdownStyles={styles.dropdownStyles}
                inputStyles={styles.inputStyles}
                checkBoxStyles={styles.checkBoxStyles}
                checkBoxStylesChecked={styles.checkBoxStylesChecked}
                badgeStyles={styles.badgeStyles}
                badgeTextStyles={styles.badgeTextStyles}
                defaultOption={{ key: '', value: 'Favorite Food, Restaurants' }}
                labelStyles={styles.hiddenLabel}
                onSelect={() => { }}
                search={false}
                checkbox={true}
                arrowicon={<View style={styles.arrow} />}
                checkicon={<View style={styles.checkIcon} />}
                disabledCheckBoxStyles={{ backgroundColor: "#000" }}
            />
            {/* <Button title="Submit" onPress={handleNavigate} /> */}
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
        // paddingVertical: 12,
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
        backgroundColor: 'rgba(112, 172, 248, 1)',
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
});

export default SelectList;