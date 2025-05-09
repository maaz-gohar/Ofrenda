import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import MainText from '../../../components/auth/top-text';
import FloatingLabelInput from '../../../components/auth/input';
import DropdownComponent from '../../../components/auth/dropdown';
import { useLocalSearchParams, useRouter } from 'expo-router';
import DatePickerComponent from '../../../components/dearly-departed/date-picker';
import MainButton from '../../../components/auth/button';
import { AntDesign } from '@expo/vector-icons';
import TabBar from '../../../components/auth/tab-bar';

type FormData = {
    name: string;
    selectedImage: string;
    relationship: string;
    ancestorRelationship: string;
    dob: string;
    dod: string;
    hobbies: string;
    memory: string;
    noteableContribution: string;
    food: string;
    movie: string;
    worked: string;
    health: string;
    selectedFoodImage: string;
    dynamicFields: Array<{ id: string; title: string; value: string }>;
};

export default function FamilyTreeForm() {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { control, handleSubmit, watch, setValue } = useForm<FormData>({
        defaultValues: {
            name: params.name?.toString() || '',
            selectedImage: params.selectedImage?.toString() || '',
            relationship: params.relationship?.toString() || '',
            ancestorRelationship: params.ancestorRelationship?.toString() || '',
            dob: params.dob?.toString() || 'Enter DOB',
            dod: params.dod?.toString() || 'Enter DOD',
            hobbies: params.hobbies?.toString() || '',
            memory: params.memory?.toString() || '',
            noteableContribution: params.noteableContribution?.toString() || '',
            food: params.food?.toString() || '',
            movie: params.movie?.toString() || '',
            worked: params.worked?.toString() || '',
            health: params.health?.toString() || '',
            selectedFoodImage: params.selectedFoodImage?.toString() || '',
            dynamicFields: params.dynamicFields 
                ? JSON.parse(params.dynamicFields.toString()).map((f: any) => ({ ...f, id: f.id || Date.now().toString() }))
                : [],
        }
    });

    const { fields, append } = useFieldArray({
        control,
        name: "dynamicFields"
    });

    const relationship = watch('relationship');

    const handleSave = (data: FormData) => {
        router.push({
            pathname: '/dearly-departed/family-succesful',
            params: {
                ...data,
                dynamicFields: JSON.stringify(data.dynamicFields),
                frameId: params.frameId,
                fromForm: 'true'
            }
        });
    };

    const handleImageUpload = () => {
        router.push({
            pathname: '/dearly-departed/upload-file',
            params: {
                ...watch(),
                dynamicFields: JSON.stringify(watch('dynamicFields')),
                frameId: params.frameId,
                redirectTo: '/dearly-departed/dearly-department-form'
            }
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
                    <Text style={styles.title}>Add Family Member</Text>

                    {/* <ScrollView contentContainerStyle={styles.innerScrollContainer} bounces={false}> */}
                        <View style={styles.centeredField}>
                            <FloatingLabelInput
                                control={control}
                                name="name"
                                placeholder="Enter Name"
                                showLabel={false}
                            />

                            <FloatingLabelInput
                                control={control}
                                name="selectedImage"
                                placeholder="Upload Picture"
                                iconName="upload"
                                iconType="AntDesign"
                                onIconPress={handleImageUpload}
                                showLabel={false}
                                iconPosition='right'
                            />

                            <Controller
                                control={control}
                                name="relationship"
                                render={({ field: { onChange, value } }) => (
                                    <DropdownComponent
                                        placeholder="Select Relationship"
                                        onSelect={onChange}
                                        selectedValue={value}
                                    />
                                )}
                            />

                            {relationship === 'Ancestors' && (
                                <FloatingLabelInput
                                    control={control}
                                    name="ancestorRelationship"
                                    placeholder="Relationship with Ancestors"
                                    showLabel={false}
                                />
                            )}

                            <Controller
                                name="dob"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DatePickerComponent 
                                        placeholder="Enter DOB" 
                                        dob={value} 
                                        onDateChange={onChange} 
                                    />
                                )}
                            />
                            
                            <Controller
                                name="dod"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DatePickerComponent 
                                        placeholder="Enter DOD" 
                                        dob={value} 
                                        onDateChange={onChange} 
                                    />
                                )}
                            />

                            <FloatingLabelInput
                                control={control}
                                name="hobbies"
                                placeholder="Select Hobbies (Separated by ,)"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="memory"
                                placeholder="Favorite Memory"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="noteableContribution"
                                placeholder="Notable contributions"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="food"
                                placeholder="Favorite food, restaurants"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="movie"
                                placeholder="Favorite movie, band, book, author"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="worked"
                                placeholder="Worked as"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="health"
                                placeholder="Health Conditions"
                                showLabel={false}
                            />
                            
                            <FloatingLabelInput
                                control={control}
                                name="selectedFoodImage"
                                placeholder="Upload Food Picture"
                                iconName="plus"
                                iconType="AntDesign"
                                onIconPress={() => router.push('/dearly-departed/select-food')}
                                showLabel={false}
                            />
                            
                            {fields.map((field, index) => (
                                <View key={field.id}>
                                    <FloatingLabelInput
                                        control={control}
                                        name={`dynamicFields.${index}.title`}
                                        placeholder={`Title ${index + 1}`}
                                        showLabel={false}
                                    />
                                    <FloatingLabelInput
                                        control={control}
                                        name={`dynamicFields.${index}.value`}
                                        placeholder={`Value ${index + 1}`}
                                        showLabel={false}
                                    />
                                </View>
                            ))}

                            <TouchableOpacity 
                                onPress={() => append({ id: Date.now().toString(), title: '', value: '' })}
                                style={styles.addFieldButton}
                            >
                                <View style={styles.buttonContent}>
                                    <Text style={styles.addFieldText}>Add Another Field</Text>
                                    <AntDesign name='plus' size={14} color="#858383" />
                                </View>
                            </TouchableOpacity>
                            
                            <MainButton 
                                title={"Add Family Member"} 
                                onPress={handleSubmit(handleSave)} 
                            />
                        </View>
                    {/* </ScrollView> */}
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
        paddingBottom: 30,
        alignItems: 'center',
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
        width: '100%',
        alignItems: 'center',
    },
});