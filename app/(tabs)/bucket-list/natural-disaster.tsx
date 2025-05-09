import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';
import MainText from '../../../components/auth/top-text';
import Search from '../../../components/bucket-list/search';
import MainButton from '../../../components/auth/button';
import TabBar from '../../../components/auth/tab-bar';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function NaturalDisaster() {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();

    const { control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            question1: '',
            question2: '',
            checkboxOptions: [] as string[],
            radioOption: null as string | null,
        }
    });

    const checkboxOptions: string[] = ['Option 01', 'Option 02', 'Option 03', 'Option 04'];
    const radioOptions = ['Option 01', 'Option 02'];

    const selectedCheckboxes = watch('checkboxOptions');
    const selectedRadio = watch('radioOption');

    const toggleCheckbox = (option: string) => {
        const newValue = selectedCheckboxes?.includes(option)
            ? selectedCheckboxes.filter((item: string) => item !== option)
            : [...(selectedCheckboxes || []), option];
        setValue('checkboxOptions', newValue);
    };

    const handleRadioSelect = (option: string) => {
        setValue('radioOption', option);
    };

    const onSubmit = (data: any) => {
        console.log(data);
        router.push('/bucket-list/select-bucket-list-premium');
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    title={'Natural Disaster'}
                    showIcon={true}
                    gradientColor={[b1, b2]}
                    setting={true}
                />
                <View style={styles.main}>
                    <Search />

                    <Text style={styles.question}>Question 01?</Text>
                    <Controller
                        control={control}
                        name="question1"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Your Answer"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    <View style={styles.separator} />

                    <Text style={styles.question}>Question 02?</Text>
                    <Controller
                        control={control}
                        name="question2"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Your Answer"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    <View style={styles.separator} />

                    <Text style={styles.question}>Question 03?</Text>
                    <View style={styles.checkboxContainer}>
                        <View style={styles.innerPlan}>
                            {checkboxOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.checkboxRow}
                                    onPress={() => toggleCheckbox(option)}
                                >
                                    <View style={styles.checkbox}>
                                        {selectedCheckboxes?.includes(option) && (
                                            <FontAwesome name="check" size={10} color="black" />
                                        )}
                                    </View>
                                    <Text style={[
                                        styles.optionText,
                                        selectedCheckboxes?.includes(option) && styles.boldText
                                    ]}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <Text style={styles.question}>Question 04?</Text>
                    <View style={styles.checkboxContainer}>
                        <View style={styles.innerPlan}>
                            {radioOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.radioRow}
                                    onPress={() => handleRadioSelect(option)}
                                >
                                    <View style={styles.radioOuter}>
                                        {selectedRadio === option && <View style={styles.radioInner} />}
                                    </View>
                                    <Text style={[
                                        styles.optionText,
                                        selectedRadio === option && styles.boldText
                                    ]}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <MainButton title='Submit' onPress={handleSubmit(onSubmit)} gradientColor={[b1, b2]} shadowColor='#f8deff' />
                </View>
            </ScrollView>
            <TabBar />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingTop: 30,
        zIndex: 10,
        marginTop: -35,
        paddingHorizontal: 20,
        justifyContent: "flex-start"
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',
        marginBottom: 15
    },
    question: {
        fontWeight: "500",
        fontSize: 20,
        alignSelf: "flex-start",
        paddingBottom: 15
    },
    input: {
        width: '100%',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "dotted",
        borderRadius: 10,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    innerPlan: {
        width: "100%",
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'black',
    },
    optionText: {
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
