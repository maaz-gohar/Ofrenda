import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

interface DatePickerComponentProps {
    placeholder: string;
    onDateChange: (date: string) => void; // New prop for handling date change
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ placeholder, onDateChange }) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [displayText, setDisplayText] = useState(placeholder);

    const onChange = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShow(false);
            return;
        }

        if (selectedDate) {
            setShow(false);
            setDate(selectedDate);

            // Format the date
            const day = selectedDate.getDate().toString();
            const month = (selectedDate.getMonth() + 1).toString();
            const year = selectedDate.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            setDisplayText(formattedDate);
            onDateChange(formattedDate); // Call the new prop to pass the date back
        }
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={showDatepicker}
            >
                <Text style={[
                    styles.name,
                    displayText === placeholder && styles.placeholder
                ]}>
                    {displayText}
                </Text>
                <MaterialIcons
                    name="date-range"
                    size={24}
                    color="#999999"
                    style={styles.icon}
                />
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                    style={styles.datePicker}
                    minimumDate={new Date(1900, 0, 1)}
                    maximumDate={new Date(2100, 11, 31)}
                />
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "93%",
        alignSelf: 'center',
    },
    button: {
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 47,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: '#333333',
        fontSize: 16,
        // paddingLeft: 10,
    },
    placeholder: {
        color: '#999999',
    },
    icon: {
        alignSelf: "center",
        // paddingRight: 3
    },
    datePicker: {
        width: '100%',
        backgroundColor: 'white',
    }
});

export default DatePickerComponent;