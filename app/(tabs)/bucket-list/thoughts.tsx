import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import MainText from '../../../components/auth/top-text';
import Search from '../../../components/bucket-list/search';
import BucketListComponent from '../../../components/bucket-list/bucket-list-component';
import TabBar from '../../../components/auth/tab-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import Inputs from '../../../components/bucket-list/inputs';
import BottomIcons from '../../../components/bucket-list/bottom-icons';
import MainButton from '../../../components/auth/button';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Thoughts() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                    <MainText
                        gradientColor={[b1, b2]}
                        title={'Thoughts & Notes'}
                        showIcon={true}
                        setting={true}
                    />
                    <View style={[styles.main]}>
                        <Search />
                        <Inputs />

                    </View>
                    {/* <View style={styles.endView}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/Frame.png')} style={{ marginRight: 10 }} />
                        <Image source={require('../../../assets/images/Frame1.png')} />
                    </View>
                    <Image source={require('../../../assets/images/dot.png')} />

                </View> */}
                    {/* <BottomIcons /> */}
                    {/* <MainButton
                        title="Make Payment"
                        // onPress={() => router.push('/BucketList/selectBucketListPremium')}
                        gradientColor={[b1, b2]}
                        shadowColor='#f8deff'
                    /> */}
                </ScrollView>
                <TabBar />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        paddingTop: 30,
        zIndex: 10,
        marginTop: -35,
        justifyContent: "flex-start"
    },
    endView: {
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },

});
