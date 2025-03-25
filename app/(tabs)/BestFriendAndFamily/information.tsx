import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MainText from '../components/topText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MainButton from '../components/button';
import InfoComponent from '../Dearly Department/components/infoComponent';
import Wrapper from '../components/wrapper';


const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function ViewInformation() {
    const router = useRouter();

    const handlePress = () => {
        router.push('/BestFriendAndFamily/displayData')
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText title={'Information'} showIcon={true} setting={true} gradientColor={[b1, b2]} />

                {/* <View style={[styles.main]}> */}
                    <Wrapper>
                    <View style={styles.imgcover}>
                        <Image source={require('../../../assets/images/BestFriend/college1.jpg')} style={styles.img} />

                    </View>

                    <View style={styles.info}>
                        <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"abcd"} onPress={handlePress} />
                        <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"abcd"} onPress={handlePress} />
                        <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"abcd"} onPress={handlePress} />
                        <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"abcd"} onPress={handlePress} />
                        <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"abcd"} onPress={handlePress} />
                        {/* <InfoComponent imagePath={require('../../../assets/images/ancestors1.png')} title={"jgggjhjhg"} /> */}
                    </View>

                    {/* <View style={{ width: "45%" }}>
                        <MainButton title={"View Information"} onPress={() => router.push('/Dearly Department/addFamilyTree')} />
                    </View> */}
                {/* </View> */}
                </Wrapper>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
    },
    imgcover: {
        width: "90%",
        height: 290,
        borderRadius: 8,
        borderWidth: 3,
        position: 'relative',
    },
    img: {
        flex: 1,
        width: "100%",
        borderRadius: 4
    },
    info: {
        width: "90%",
        paddingVertical: 20
    }

});
