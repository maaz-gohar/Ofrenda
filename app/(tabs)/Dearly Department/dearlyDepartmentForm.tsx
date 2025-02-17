import React, { useEffect, useState } from 'react';
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
import { router, useLocalSearchParams } from 'expo-router';
import DatePickerComponent from './components/datePicker';
import MainButton from '../components/button';
import FrameComponent from './components/frameComponent';
import { AntDesign } from '@expo/vector-icons';
import TabBar from '../components/tabBar';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function DearlyDepartmentForm() {

    const params = useLocalSearchParams();

    useEffect(() => {
        if (params.selectedImage) {
            setSelectedImage(params.selectedImage.toString())
        }
    }, [params])

    const [worked, setWorked] = useState('');
    const [memory, setMemory] = useState('');
    const [health, setHealth] = useState('');
    const [noteableContribution, setNoteableContribution] = useState('');
    const [movie, setMovie] = useState('');
    const [food, setFood] = useState('');
    const [dob, setDob] = useState('Enter DOB');
    const [dod, setDod] = useState('Enter DOD');
    const [hobbies, setHobbies] = useState('');
    // const [ancestors, setAncestors] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [dynamicFields, setDynamicFields] = useState([]);
    const [relationship, setRelationship] = useState('');
    const [ancestorRelationship, setAncestorRelationship] = useState('');


    console.log(hobbies, "navigating to Granded data ")


    const [selectedFoodImage, setSelectedFoodImage] = useState('');

    // Update useEffect to handle food image selection from params
    useEffect(() => {
        if (params.selectedImage) {
            setSelectedImage(params.selectedImage.toString());
        }
        if (params.selectedFoodImage) {
            setSelectedFoodImage(params.selectedFoodImage.toString());
        }
    }, [params]);

    // Update handleSave to include selectedFoodImage
    const handleSave = () => {
        router.push({
            pathname: '/Dearly Department/successfully',
            params: {
                worked,
                memory,
                health,
                hobbies: JSON.stringify(hobbies),
                dob,
                dod,
                noteableContribution,
                movie,
                food,
                dynamicFields: JSON.stringify(dynamicFields),
                selectedFoodImage, // Add this to save the selected food image
                relationship,
                ancestorRelationship,
            },
        });
    };



    const addAnotherField = () => {
        setDynamicFields([...dynamicFields, { id: dynamicFields.length, title: '', value: '' }]);
    };

    const handleFieldChange = (index, field, value) => {
        const updatedFields = dynamicFields.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setDynamicFields(updatedFields);
    };

    console.log("sending end ", hobbies)

    // console.log(hobbies)

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

                    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} bounces={false} >
                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                            <FrameComponent text="Ofrenda" isGradient={true} onPress={() => router.push('/Dearly Department/selectOfrenda')} />
                            <FrameComponent text="Elegant" onPress={() => router.push('/Dearly Department/elegant')} />
                            <FrameComponent text="Indian" onPress={() => router.push('/Dearly Department/indian')} />
                            <FrameComponent text="Scandinavian" />
                            <FrameComponent text="Chinese" />
                            <FrameComponent text="Japanese" />
                            <FrameComponent text="Modernist" />
                            <FrameComponent text="Another Mexican style" />
                            <FrameComponent text="Glass photo frames " />
                            <FrameComponent text="Classical Christian altar" />
                            <FrameComponent text="Hebrew altar" />
                            <FrameComponent text="Wall photo frames" />
                            {/* <View style={styles.scrollContainer}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>More</Text>
                        </View> */}


                        </View>
                    </ScrollView>

                    <DearlyDepartmentFormComponent name="Enter Name" />
                    <DearlyDepartmentFormComponent
                        name="Upload Picture"
                        iconName="upload"
                        iconType="AntDesign"
                        value={selectedImage}
                        onPress={() => router.push('/Dearly Department/uploadFile')}
                    />

                    <DropdownComponent
                        placeholder="Select Relationship"
                        onSelect={(value) => setRelationship(value)}
                    />

                    {/* Conditionally render "Relationship with Ancestors" field */}
                    {relationship === 'Ancestors' && (
                        <DearlyDepartmentFormComponent
                            name="Relationship with Ancestors"
                            value={ancestorRelationship}
                            setValue={setAncestorRelationship}
                        />
                    )}

                    <DatePickerComponent placeholder="Enter DOB" onDateChange={setDob} />
                    <DatePickerComponent placeholder="Enter DOD" onDateChange={setDod} />


                    {/* Pass setHobbies to SelectList */}
                    {/* <SelectList setSelected={setHobbies} /> */}

                    <DearlyDepartmentFormComponent
                        name="Select Hobbies (Separated by ,)"
                        value={hobbies}
                        setValue={setHobbies}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite Memory"
                        value={memory}
                        setValue={setMemory}
                    />
                    <DearlyDepartmentFormComponent
                        name="Notable contributions"
                        value={noteableContribution}
                        setValue={setNoteableContribution}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite food, restaurants"
                        value={food}
                        setValue={setFood}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite movie, band, book, author"
                        value={movie}
                        setValue={setMovie}
                    />
                    <DearlyDepartmentFormComponent
                        name="Worked as"
                        value={worked}
                        setValue={setWorked}
                    />
                    <DearlyDepartmentFormComponent
                        name="Health Conditions"
                        value={health}
                        setValue={setHealth}
                    />
                    <DearlyDepartmentFormComponent
                        name="Upload Food Picture"
                        iconName="plus"
                        iconType="AntDesign"
                        value={selectedFoodImage} // Add state for this: const [selectedFoodImage, setSelectedFoodImage] = useState('');
                        onPress={() => router.push('/Dearly Department/selectFood')}
                    />
                    {dynamicFields.map((field, index) => (
                        <View key={field.id}>
                            <DearlyDepartmentFormComponent
                                name={`Title ${index + 1}`}
                                value={field.title}
                                setValue={(value) => handleFieldChange(index, 'title', value)}
                                placeholder="Title"
                                style={styles.titleField}
                            />
                            <DearlyDepartmentFormComponent
                                name={`Value ${index + 1}`}
                                value={field.value}
                                setValue={(value) => handleFieldChange(index, 'value', value)}
                                style={styles.valueField}
                            />
                        </View>
                    ))}

                    <TouchableOpacity onPress={addAnotherField} style={styles.addFieldButton}>
                        <View style={styles.buttonContent}>
                            <Text style={styles.addFieldText}>Add Another Field</Text>
                            <AntDesign name='plus' size={14} color="#858383" />
                        </View>
                    </TouchableOpacity>
                    <MainButton title={"Add Ancestor"} onPress={handleSave} />
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
        marginTop: -35,
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
    addFieldText: {
        color: "#9D9D9D",
        fontWeight: "600",
        marginRight: 5,
    },
    titleField: {
        borderWidth: 0,
        fontWeight: 'bold',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addFieldButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 250,
        width: "93%",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        height: 47,
        justifyContent: "center",
    },
});
