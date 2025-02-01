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
import DatePickerComponent from '../Dearly Department/components/datePicker';
import MainButton from '../components/button';
import DearlyDepartmentFormComponent from '../Dearly Department/components/dearlyDepartmentFormComponent';
import TabBar from '../components/tabBar';
import { useRouter } from 'expo-router';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function SelectCollegeDesign() {
    const [profession, setProfession] = useState('');
    const [dob, setDob] = useState('Enter DOB');
    const [dynamicFields, setDynamicFields] = useState([]); // State to manage dynamic fields

    const handleSave = () => {
        console.log({
            profession,
            dob,
        });
        // Add your save logic here
    };

    const addAnotherField = () => {
        setDynamicFields([...dynamicFields, { id: dynamicFields.length }]); // Add a new field with a unique id
    };

    const router = useRouter();

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
                    title={'BFF'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                <View style={styles.main}>
                    <Text style={styles.title}>Select Collage Design</Text>
                    <DearlyDepartmentFormComponent name="Enter Friend Name" />
                    <DearlyDepartmentFormComponent
                        name="Upload Picture"
                        iconName="upload"
                        iconType="AntDesign"
                        onPress={() => router.push('/BestFriendAndFamily/uploadFiles')}
                    />

                    <DatePickerComponent placeholder="Enter DOB" onDateChange={setDob} />
                    <DearlyDepartmentFormComponent
                        name="Profession"
                        value={profession}
                        setValue={setProfession}
                    />
                    <DearlyDepartmentFormComponent name="Add Social Media URL" iconName={'link'} />

                    {dynamicFields.map((field, index) => (
                        <DearlyDepartmentFormComponent
                            key={field.id}
                            name={`Dynamic Field ${index + 1}`} // Give a unique name for each field
                        />
                    ))}

                    <TouchableOpacity onPress={addAnotherField} style={styles.addFieldButton}>
                        <Text style={styles.addFieldText}>Add Another Field</Text>
                    </TouchableOpacity>
                    <MainButton title={"Add BFF"} onPress={handleSave} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                </View>
            </ScrollView>
            <TabBar />
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
    addFieldButton: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: b1,
        borderRadius: 5,
    },
    addFieldText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
    },
});
