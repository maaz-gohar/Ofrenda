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

export default function SelectFood() {
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
                            imagePath={require('../../../assets/images/food/1.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/2.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/3.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/4.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/5.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/6.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/7.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/8.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/9.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/10.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/1.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/4.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/1.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/2.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/10.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/7.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/6.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/9.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/8.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/3.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/5.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/6.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/7.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/8.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/1.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/3.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/4.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/food/10.png')}

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
