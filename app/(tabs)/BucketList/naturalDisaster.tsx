import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import { useRouter } from 'expo-router';
import Search from './components/search';
import MainButton from '../components/button';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function NaturalDisaster() {
    const { height, width } = Dimensions.get("window");
    const router = useRouter();


    const [checkedItems, setCheckedItems] = useState([false, false, false, false]);
    const [selectedRadio, setSelectedRadio] = useState(null);


    const toggleCheckbox = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };


    const handleRadioSelect = (index) => {
        setSelectedRadio(index);
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

                    <TextInput
                        placeholder='Your Answer'
                        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                        style={styles.input}
                    />

                    <View style={styles.separator} />
                    <Text style={styles.question}>Question 02?</Text>

                    <TextInput
                        placeholder='Your Answer'
                        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                        style={styles.input}
                    />

                    <View style={styles.separator} />

                    <Text style={styles.question}>Question 03?</Text>
                    <View style={styles.checkboxContainer}>
                        <View style={styles.innerPlan}>
                            {['Option 01', 'Option 02', 'Option 03', 'Option 04'].map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.checkboxRow}
                                    onPress={() => toggleCheckbox(index)}
                                >
                                    <View style={styles.checkbox}>
                                        {checkedItems[index] && (
                                            <FontAwesome name="check" size={10} color="black" />
                                        )}
                                    </View>
                                    <Text style={[
                                        styles.optionText,
                                        checkedItems[index] && styles.boldText
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
                            {['Option 01', 'Option 02'].map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.radioRow}
                                    onPress={() => handleRadioSelect(index)}
                                >
                                    <View style={styles.radioOuter}>
                                        {selectedRadio === index && (
                                            <View style={styles.radioInner} />
                                        )}
                                    </View>
                                    <Text style={[
                                        styles.optionText,
                                        selectedRadio === index && styles.boldText
                                    ]}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <MainButton title='Submit' onPress={() => router.push('/BucketList/selectBucketListPremium')} gradientColor={[b1, b2]} shadowColor='#f8deff' />
                </View>
            </ScrollView>
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
        marginTop: -15,
        paddingHorizontal: 20,
        justifyContent: "flex-start"
    },
    input: {
        height: 50,
        fontSize: 16,
        alignSelf: "flex-start"
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