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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import Wrapper from '../components/wrapper';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function SelectCollegeDesign() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Initialize state directly from params
    const [profession, setProfession] = useState(params.profession?.toString() || '');
    const [name, setName] = useState(params.name?.toString() || '');
    const [food, setFood] = useState(params.food ? JSON.parse(params.food.toString()) : []);
    const [noteableContribution, setNoteableContribution] = useState(params.noteableContribution?.toString() || '');
    const [movie, setMovie] = useState(params.movie?.toString() || '');
    const [favFood, setFavFood] = useState(params.favFood?.toString() || '');
    const [health, setHealth] = useState(params.health?.toString() || '');
    const [dob, setDob] = useState(params.dob?.toString() || 'Enter DOB');
    const [dynamicFields, setDynamicFields] = useState(params.dynamicFields ? JSON.parse(params.dynamicFields.toString()) : []);
    const [selectedImage, setSelectedImage] = useState(params.selectedImage?.toString() || '');
    const [facebook, setFacebook] = useState(params.facebook?.toString() || '');
    const [instagram, setInstagram] = useState(params.instagram?.toString() || '');
    const [twitter, setTwitter] = useState(params.twitter?.toString() || '');
    const [tiktok, setTiktok] = useState(params.tiktok?.toString() || '');

    const handleSave = () => {
        router.push({
            pathname: '/BestFriendAndFamily/successful',
            params: {
                name,
                profession,
                dob,
                noteableContribution,
                movie,
                favFood,
                health,
                food: JSON.stringify(food),
                selectedImage,
                dynamicFields: JSON.stringify(dynamicFields),
                facebook,
                instagram,
                twitter,
                tiktok,
            }
        });
    };

    const handleUploadImage = () => {
        // Pass all current state as params when navigating to uploadFiles
        router.push({
            pathname: '/BestFriendAndFamily/uploadFiles',
            params: {
                name,
                profession,
                dob,
                noteableContribution,
                movie,
                favFood,
                health,
                food: JSON.stringify(food),
                selectedImage,
                dynamicFields: JSON.stringify(dynamicFields),
                facebook,
                instagram,
                twitter,
                tiktok,
            }
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
                    title={'Best Friends and Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                {/* <View style={styles.main}> */}
                <Wrapper>
                    <Text style={styles.title}>Select Collage Design</Text>
                    <DearlyDepartmentFormComponent name="Enter Friend Name" value={name} setValue={setName} />
                    <DearlyDepartmentFormComponent
                        name="Upload Picture"
                        iconName="upload"
                        iconType="AntDesign"
                        value={selectedImage}
                        onPress={handleUploadImage} // Use handleUploadImage instead of inline function
                    />
                    <DatePickerComponent placeholder="Enter DOB" dob={dob} onDateChange={setDob} />
                    <DearlyDepartmentFormComponent
                        name="Favoraite Pastimes (Separated by ,)"
                        value={food}
                        setValue={setFood}
                    />
                    <DearlyDepartmentFormComponent
                        name="Profession"
                        value={profession}
                        setValue={setProfession}
                    />
                    <DearlyDepartmentFormComponent
                        name="Notable contributions"
                        value={noteableContribution}
                        setValue={setNoteableContribution}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite food, restaurants (Separated by ,)"
                        value={favFood}
                        setValue={setFavFood}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite movie, band, book, author "
                        value={movie}
                        setValue={setMovie}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favourite Bands"
                        value={health}
                        setValue={setHealth}
                    />
                    <DearlyDepartmentFormComponent name="Paste Facebook URL" iconName={'link'} value={facebook} setValue={setFacebook} />
                    <DearlyDepartmentFormComponent name="Paste Instagram URL" iconName={'link'} value={instagram} setValue={setInstagram} />
                    <DearlyDepartmentFormComponent name="Paste Twitter URL" iconName={'link'} value={twitter} setValue={setTwitter} />
                    <DearlyDepartmentFormComponent name="Paste Tiktok URL" iconName={'link'} value={tiktok} setValue={setTiktok} />

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
                    <MainButton title={"Add BFF"} onPress={handleSave} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                {/* </View> */}
                </Wrapper>
            </ScrollView>
            <TabBar />
        </KeyboardAvoidingView>
    );
}

// ... styles remain the same ...
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
    titleField: {
        borderWidth: 0,
        fontWeight: 'bold',
    },
});