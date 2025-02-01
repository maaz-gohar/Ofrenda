import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import DearlyDepartmentFormComponent from './components/dearlyDepartmentFormComponent';
import DropdownComponent from '../components/dropdown';
import SelectList from './components/selectList';
import { router } from 'expo-router';
import DatePickerComponent from './components/datePicker';
import MainButton from '../components/button';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function DearlyDepartmentForm() {
    const [worked, setWorked] = useState('');
    const [memory, setMemory] = useState('');
    const [health, setHealth] = useState('');
    const [dob, setDob] = useState('Enter DOB');
    const [dod, setDod] = useState('Enter DOD');
    const [hobbies, setHobbies] = useState([]);

    const handleSave = () => {
        router.push({
            pathname: '/Dearly Department/displayData',
            params: {
                worked,
                memory,
                health,
                hobbies: JSON.stringify(hobbies),
                dob,
                dod,
            },
        });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                bounces={false}
                keyboardShouldPersistTaps="handled"
            >
                <MainText
                    title={'Dearly Departed'}
                    showIcon={true}
                    setting={true}
                />

                <View style={styles.main}>
                    <Text style={styles.title}>Add dearly departed</Text>

                    <View style={styles.scrollOptions}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={[b1, b2]}
                                style={styles.gradient}
                            >
                                <View style={styles.scrollContainer1}>
                                    <Text style={styles.optionText}>Ofrenda</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.scrollContainer}>
                                <Text style={styles.optionText}>Elegant</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.scrollContainer}>
                                <Text style={styles.optionText}>Indian</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <DearlyDepartmentFormComponent name="Enter Name" />
                    <DearlyDepartmentFormComponent
                        name="Upload Picture"
                        iconName="upload"
                        iconType="AntDesign"
                        onPress={() => router.push('/Dearly Department/uploadFile')}
                    />
                    <DropdownComponent placeholder="Select Relation With Ancestor" />
                    <DatePickerComponent placeholder="Enter DOB" onDateChange={setDob} />
                    <DatePickerComponent placeholder="Enter DOD" onDateChange={setDod} />


                    {/* Pass setHobbies to SelectList */}
                    <SelectList setSelected={setHobbies} />

                    <DearlyDepartmentFormComponent
                        name="Favorite Memory"
                        value={memory}
                        setValue={setMemory}
                    />
                    <DearlyDepartmentFormComponent
                        name="Worked as"
                        value={worked}
                        setValue={setWorked}
                    />
                    <DearlyDepartmentFormComponent
                        name="Health"
                        value={health}
                        setValue={setHealth}
                    />
                    <DearlyDepartmentFormComponent
                        name="Upload Food Picture"
                        iconName="plus"
                        iconType="AntDesign"
                    />
                    <MainButton title={"Add Ancestor"} onPress={handleSave} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        paddingTop: 30,
        marginTop: -25,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    scrollOptions: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    gradient: {
        borderRadius: 250,
        marginHorizontal: 5,
    },
    scrollContainer1: {
        height: 40,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 250,
        marginHorizontal: 5,
    },
    optionText: {
        fontWeight: "600",
        fontSize: 16,
    },
});
