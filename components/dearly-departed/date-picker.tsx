import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

interface DatePickerComponentProps {
  placeholder: string;
  dob: string;
  onDateChange: (date: string) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  placeholder,
  dob,
  onDateChange,
}) => {
    const [date, setDate] = useState(new Date()); // Initialize with the current date
    const [show, setShow] = useState(false);
    const [displayText, setDisplayText] = useState(dob || placeholder); // Start with placeholder

  const onChange = (event: any, selectedDate: Date | undefined) => {
    if (event.type === "dismissed") {
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
      onDateChange(formattedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true); // Show the date picker directly on click
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showDatepicker}>
        <Text
          style={[
            styles.name,
            displayText === placeholder && styles.placeholder,
          ]}
        >
          {displayText}
        </Text>
        {show && (
          <DateTimePicker
            value={date} // Display the current date
            mode="date"
            is24Hour={true}
            display={Platform.OS === "ios" ? "default" : "calendar"}
            onChange={onChange}
            style={styles.datePicker}
            minimumDate={new Date(1900, 0, 1)}
            maximumDate={new Date(2100, 11, 31)}
          />
        )}
        <MaterialIcons
          name="date-range"
          size={24}
          color="#999999"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "93%",
    alignSelf: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#c2c2c2",
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 47,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#333333",
    fontSize: 16,
    flex: 1, // Allow text to take available space
  },
  placeholder: {
    color: "#999999",
  },
  icon: {
    marginLeft: 10,
  },
  datePicker: {
    width: "100%",
    backgroundColor: "white",
  },
});

export default DatePickerComponent;
