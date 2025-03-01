import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import MainText from '../components/topText';
import Search from './components/search';
import BucketListComponent from './components/bucketListComponent';
import TabBar from '../components/tabBar';
import { FontAwesome5 } from '@expo/vector-icons';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function SelectBucketListPremium() {
    const router = useRouter();

    const [params, setParams] = React.useState({ route: '', text: '' });

    const handleUpload = (route, text) => {
        setParams({ route, text });
        router.push({
            pathname: route,
            params: { text } // Pass the title as a query parameter
        });
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <MainText
                    gradientColor={[b1, b2]}
                    title={'Bucket Lists & Memories'}
                    showIcon={true}
                    setting={true}
                />
                <View style={[styles.main]}>
                    <Search />
                    <View style={styles.bucketContainer}>
                        <View style={styles.bucketContainerText}>
                            <Text style={styles.BucketText}>BucketList</Text>
                            <Text style={styles.BucketText}>Memories</Text>
                            <Text style={styles.BucketText}>Thoughts & Notes</Text>
                        </View>
                    <ScrollView bounces={false} style={{ height: 300 }}>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Destinations"
                                route="/BucketList/bucketLists"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Kindergarten"
                                route="/BucketList/memory"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Politics"
                                route="/BucketList/thoughts"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Activities"
                                route="/BucketList/bucketLists"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Junior school"
                                route="/BucketList/memory"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Religion"
                                route="/BucketList/thoughts"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Restaurants"
                                route="/BucketList/bucketLists"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Best friends "
                                route="/BucketList/memory"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Friendship"
                                route="/BucketList/thoughts"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Holidays"
                                route="/BucketList/bucketLists"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="College days"
                                route="/BucketList/memory"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Music"
                                route="/BucketList/thoughts"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Recipes"
                                route="/BucketList/bucketLists"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Music"
                                route="/BucketList/memory"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={false}
                                showText={true}
                                text="Social Media"
                                route="/BucketList/thoughts"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={true}
                                showText={true}

                                // text="Health"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                                IconName='locked'
                            />
                            <BucketListComponent
                                showIcon={true}
                                showText={true}

                                // text="Work"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                IconName='locked'
                                showText={true}
                                // text="Family"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={true}
                                showText={true}
                                IconName='locked'
                                // text="Health"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Work"
                                route="/BucketList/paymentMethod"
                                showText={true}
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Family"
                                route="/BucketList/paymentMethod"
                                showText={true}
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                                IconName='locked'
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={true}
                                IconName='locked'
                                // text="Health"
                                showText={true}
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Work"
                                route="/BucketList/paymentMethod"
                                showText={true}
                                image={require('../../../assets/images/Group 1508.png')}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Family"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                showText={true}
                                onPress={handleUpload}
                                IconName='locked'
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={true}
                                IconName='locked'
                                showText={true}
                                // text="Health"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Work"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                showText={true}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Family"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                showText={true}
                                onPress={handleUpload}
                                IconName='locked'
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <BucketListComponent
                                showIcon={true}
                                IconName='locked'
                                // text="Health"
                                showText={true}
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Work"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                showText={true}
                                IconName='locked'
                                onPress={handleUpload}
                            />
                            <BucketListComponent
                                showIcon={true}
                                // text="Family"
                                route="/BucketList/paymentMethod"
                                image={require('../../../assets/images/Group 1508.png')}
                                onPress={handleUpload}
                                showText={true}
                                IconName='locked'
                            />
                        </View>
                    </ScrollView>
                    </View>
                    <View style={styles.bucketContainer2}>

                        <Text style={styles.textBig}>Tool Kit Lists</Text>
                        <View style={styles.premiumContainer}>
                        </View>
                        <ScrollView bounces={false} style={{ height: 300 }}>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={false}
                                    showText={true}
                                    text="Evacuation Kit"
                                    route="/BucketList/naturalDisaster"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Estate Planning"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Depression Recovery"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Earthquake kit"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Will"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Dating list"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    IconName='locked'
                                    showIcon={true}
                                    showText={true}
                                    text="Fire/ flood kit"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Financial Plan"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Young Parents'"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Job Loss"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Pet Emergency"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="College Preparation"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Digital Security"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Medical Emergency"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true}
                                    text="Job Search"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    text="Health"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    text="Work"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Family"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Health"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    text="Work"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Family"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Health"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Work"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Family"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    IconName='locked'
                                    // showText={true}
                                    // text="Health"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Work"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Family"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Health"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Work"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    // showText={true}
                                    IconName='locked'
                                    text="Family"
                                    route="/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                />                          
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <TabBar />
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
    bucketContainer: {
        width: "95%",
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        padding: 10,
        marginTop: 20
    },
    bucketContainer2: {
        width: "95%",
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        padding: 10,
        marginTop: 20,
        position: 'relative',
    },
    textBig: {
        fontWeight: "bold",
        fontSize: 23,
        paddingVertical: 10
    },
    bucketContainerText: {
        flexDirection: "row",
        // width: "100%",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    BucketText: {
        fontWeight: "700",
        width: 120,
        textAlign: "center"
    },
    premiumContainer: {
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    premium: {
        fontWeight: "bold",
        fontSize: 30,

    }
});
