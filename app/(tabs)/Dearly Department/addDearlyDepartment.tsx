import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,

} from 'react-native';
import { FontAwesome, Ionicons, Entypo, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";
import MainText from '../components/topText';
import AddDearlyDepartmentComponent from './components/dearlyDepartmentImage';
import MainButton from '../components/button';


// import MainText from './components/topText';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";

export default function AddDearlyDepartment() {
    // const { height, width } = Dimensions.get("window");


    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Select Image'}
                    showIcon={true}
                />

                <View style={[styles.main]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/1.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/2.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/3.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/4.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/5.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/6.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/7.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/8.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/9.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/10.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/11.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/12.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/13.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/14.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/15.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/16.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/17.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/18.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/19.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/20.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/21.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/22.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/23.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/24.jpg')}

                        />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/25.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/26.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/27.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/dearlyDepartment/28.jpg')}

                        />

                    </View>
                    <MainButton title={"Select"} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
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
});
