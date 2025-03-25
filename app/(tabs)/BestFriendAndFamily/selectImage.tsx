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
// import AddDearlyDepartmentComponent from './components/dearlyDepartmentImage';
import MainButton from '../components/button';

import AddDearlyDepartmentComponent from '../Dearly Department/components/dearlyDepartmentImage';
import Wrapper from '../components/wrapper';


// import MainText from './components/topText';

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

export default function SelectImage() {
    // const { height, width } = Dimensions.get("window");


    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}
                bounces={false}>
                <MainText
                    title={'Select Image'}
                    showIcon={true}
                    gradientColor={[b1, b2]}
                />
<Wrapper>
                {/* <View style={[styles.main]}> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/1.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/2.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/3.jpg')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 584.png')}
                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 585.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 586.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 587.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 588.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 589.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 590.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 591.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 592.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 593.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 594.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 595.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 596.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 597.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 598.png')}

                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 599.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 600.png')}

                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 601.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 602.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 603.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 604.png')}
                        />


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 605.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 606.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/Rectangle 607.png')}
                        />
                        <AddDearlyDepartmentComponent
                            imagePath={require('../../../assets/images/BestFriend/selectImage/1.jpg')}
                        />


                    </View>
                    <MainButton title={"Select"} gradientColor={[b1, b2]} shadowColor='rgba(94, 164, 253, 1)' />
                {/* </View> */}
                </Wrapper>
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
        marginTop: -35,
    },
});
