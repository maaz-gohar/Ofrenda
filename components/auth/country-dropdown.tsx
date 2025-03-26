import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Mexico', value: '1' },
    { label: 'India', value: '2' },
    { label: 'China', value: '3' },
    { label: 'Japan', value: '4' },
    { label: 'Scandinavia', value: '5' },
];

const CountryDropdown = ({ placeholder = 'Select item' }) => {
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#c2c2c2' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                   
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 15,
    },
    dropdown: {
        height: 50,
        borderColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        width: '93%',
        alignSelf: 'center',
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999999',
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default CountryDropdown;
