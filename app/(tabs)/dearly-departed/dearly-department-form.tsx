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
import MainText from '../../../components/auth/top-text';
import DearlyDepartmentFormComponent from '../../../components/dearly-departed/dearly-department-form-component';
import DropdownComponent from '../../../components/auth/dropdown';
import { useLocalSearchParams, useRouter } from 'expo-router';
import DatePickerComponent from '../../../components/dearly-departed/date-picker';
import MainButton from '../../../components/auth/button';
import FrameComponent from '../../../components/dearly-departed/frame-component';
import { AntDesign } from '@expo/vector-icons';
import TabBar from '../../../components/auth/tab-bar';
import { useRoute } from '@react-navigation/native';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function DearlyDepartmentForm() {
    const params = useLocalSearchParams();
    const router = useRouter();

    const [name, setName] = useState(params.name || '');
    const [worked, setWorked] = useState(params.worked || '');
    const [memory, setMemory] = useState(params.memory || '');
    const [health, setHealth] = useState(params.health || '');
    const [noteableContribution, setNoteableContribution] = useState(params.noteableContribution || '');
    const [movie, setMovie] = useState(params.movie || '');
    const [food, setFood] = useState(params.food || '');
    const [dob, setDob] = useState(params.dob as string || 'Enter DOB');
    const [dod, setDod] = useState(params.dod as string || 'Enter DOD');
    const [hobbies, setHobbies] = useState(params.hobbies || '');
    const [selectedImage, setSelectedImage] = useState(params.selectedImage || '');
    const [dynamicFields, setDynamicFields] = useState<{ id: number; title: string; value: string }[]>([]);
    const [relationship, setRelationship] = useState(params.relationship || '');
    const [ancestorRelationship, setAncestorRelationship] = useState(params.ancestorRelationship || '');
    const [selectedFoodImage, setSelectedFoodImage] = useState(params.selectedFoodImage || '');

    

    useEffect(() => {
        if (params.selectedImage) {
            setSelectedImage(params.selectedImage.toString());
        }
        if (params.selectedFoodImage) {
            setSelectedFoodImage(params.selectedFoodImage.toString());
        }
    }, [params]);

    const handleSave = () => {
        router.push({
            pathname: '/dearly-departed/successfully',
            params: {
                name,
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
                selectedFoodImage,
                relationship,
                ancestorRelationship,
            },
        });
    };

    const addAnotherField = () => {
        setDynamicFields([...dynamicFields , { id: dynamicFields.length, title: '', value: '' }]);
    };

    const handleFieldChange = (index: number, field: string, value: string) => {
        const updatedFields = dynamicFields.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setDynamicFields(updatedFields);
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

                    <ScrollView contentContainerStyle={styles.innerScrollContainer} bounces={false}>
                        {/* Frame Components */}
                        {/* (Your existing FrameComponent code here) */}

                        <View style={styles.centeredField}>
                            <DearlyDepartmentFormComponent name="Enter Name" value={name} setValue={setName} />
                            <DearlyDepartmentFormComponent
                                name="Upload Picture"
                                iconName="upload"
                                iconType="AntDesign"
                                value={selectedImage}
                                onPress={() => {
                                    console.log('Upload Picture pressed');
                                    router.push({
                                        pathname: '/dearly-departed/upload-file',
                                        params: {
                                            worked,
                                            name,
                                            memory,
                                            health,
                                            hobbies,
                                            dob,
                                            dod,
                                            noteableContribution,
                                            movie,
                                            food,
                                            relationship,
                                            ancestorRelationship,
                                            dynamicFields: JSON.stringify(dynamicFields),
                                            selectedImage,
                                        },
                                    });
                                }}
                            />

                            <DropdownComponent
                                placeholder="Select Relationship"
                                onSelect={(value:string) => setRelationship(value)}
                            />

                            {/* Conditionally render Relationship with Ancestors field */}
                            {relationship === 'Ancestors' && (
                                <DearlyDepartmentFormComponent
                                    name="Relationship with Ancestors"
                                    value={ancestorRelationship}
                                    setValue={setAncestorRelationship}
                                />
                            )}

                            <DatePickerComponent placeholder="Enter DOB" dob={dob} onDateChange={setDob} />
                            <DatePickerComponent placeholder="Enter DOD" dob={dod} onDateChange={setDod} />

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
                                value={selectedFoodImage}
                                onPress={() => router.push('/dearly-departed/select-food')}
                            />
                            {dynamicFields.map((field, index) => (
                                <View key={field.id}>
                                    <DearlyDepartmentFormComponent
                                        name={`Title ${index + 1}`}
                                        value={field.title}
                                        setValue={(value:string) => handleFieldChange(index, 'title', value)}
                                        placeholder="Title"
                                    />
                                    <DearlyDepartmentFormComponent
                                        name={`Value ${index + 1}`}
                                        value={field.value}
                                        setValue={(value:string) => handleFieldChange(index, 'value', value)}
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
    innerScrollContainer: {
        // paddingHorizontal: 20,
        paddingBottom: 30,
        alignItems: 'center', // Center all items in the inner scroll container
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
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
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addFieldText: {
        color: "#9D9D9D",
        fontWeight: "600",
        marginRight: 5,
    },
    centeredField: {
        width: '100%', // Ensure the fields take up full width
        alignItems: 'center', // Center the contents of this view
    },
});
