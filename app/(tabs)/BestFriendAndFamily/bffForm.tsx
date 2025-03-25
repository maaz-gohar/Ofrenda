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
// import DearlyDepartmentFormComponent from './components/dearlyDepartmentFormComponent';
import DropdownComponent from '../components/dropdown';
import SelectList from './components/selectList';
import { router } from 'expo-router';
import DatePickerComponent from '../Dearly Department/components/datePicker';
import MainButton from '../components/button';
import DearlyDepartmentFormComponent from '../Dearly Department/components/dearlyDepartmentFormComponent';
import TabBar from '../components/tabBar';
import Wrapper from '../components/wrapper';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function BffForm() {
    const [worked, setWorked] = useState('');
    const [memory, setMemory] = useState('');
    const [health, setHealth] = useState('');
    const [dob, setDob] = useState('Enter DOB');
    const [hobbies, setHobbies] = useState([]);

    const handleSave = () => {
        router.push({
            pathname: '/BestFriendAndFamily/successful',
            params: {
                worked,
                memory,
                health,
                hobbies: JSON.stringify(hobbies),
                dob,
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
                    title={'Best Friends and Family'}
                    showIcon={true}
                    setting={true}
                    gradientColor={[b1, b2]}
                />

                {/* <View style={styles.main}> */}
                <Wrapper>
                    <Text style={styles.title}>Add Information</Text>

                    <DearlyDepartmentFormComponent name="Enter Friend Name" />

                    <DatePickerComponent placeholder="Enter DOB" dob={dob} onDateChange={setDob} />

                    {/* Pass setHobbies to SelectList */}
                    <SelectList setSelected={setHobbies} />

                    <DearlyDepartmentFormComponent
                        name="Profession"
                        value={memory}
                        setValue={() => setMemory('')}
                    />
                    <DearlyDepartmentFormComponent
                        name="Favorite Food, Restaurants"
                        value={worked}
                        setValue={() => (value: any) => setWorked(value)}
                    />
                    <DearlyDepartmentFormComponent
                        name="Add Social Media URL"
                        value={health}
                        setValue={() => (value: string) => setHealth(value)}
                        iconName="link"
                        iconType="AntDesign"
                    />
                    <DearlyDepartmentFormComponent
                        name="Add Another Field"
                        iconName="add"
                        iconType="AntDesign"
                    />
                    <MainButton title={"Submit Information"} onPress={handleSave} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                {/* </View>
                 */}
                 </Wrapper>
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
});
