import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import MainText from '../components/topText';
import Search from './components/search';
import BucketListComponent from './components/bucketListComponent';
import TabBar from '../components/tabBar';
import { FontAwesome5 } from '@expo/vector-icons';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function SelectBucketList() {
    const router = useRouter();

    const [params, setParams] = React.useState({ route: '', text: '' });

    const handleUpload = (route: string, text: string) => {
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
                        <ScrollView bounces={false} style={{ height: 300 }} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}>
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
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Health"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Work"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Family"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Health"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Work"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Family"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Health"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Work"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Family"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Health"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Work"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    IconName='locked'
                                    onPress={handleUpload}
                                />
                                <BucketListComponent
                                    showIcon={true}
                                    showText={true} // Ensure showText is true when showIcon is true
                                    // text="Family"
                                    route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                    image={require('../../../assets/images/Group 1508.png')}
                                    onPress={handleUpload}
                                    IconName='locked'
                                />                          
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/BucketList/paymentMethod')}>
                        <View style={styles.bucketContainer2}>
                            <View style={styles.overlay}>
                                <View style={styles.icon}>
                                    <FontAwesome5 name={"crown"} size={16} color="rgba(255, 255, 0, 1)" />
                                </View>
                                <Text style={styles.premium}>Premium</Text>
                            </View>
                            <Text style={styles.textBig}>Tool Kit Lists</Text>
                            <ScrollView bounces={false} style={{ height: 300 , maxWidth:400, width:"100%" }} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Evacuation Kit"
                                        route="/BucketList/bucketLists"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Estate Planning"
                                        route="/BucketList/memory"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Depression Recovery"
                                        route="/BucketList/thoughts"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Earthquake kit"
                                        route="/BucketList/bucketLists"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Will"
                                        route="/BucketList/memory"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Dating list"
                                        route="/BucketList/thoughts"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Fire/ flood kit"
                                        route="/BucketList/bucketLists"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Financial Plan"
                                        route="/BucketList/memory"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Young Parents'"
                                        route="/BucketList/thoughts"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Job Loss"
                                        route="/BucketList/bucketLists"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Pet Emergency"
                                        route="/BucketList/memory"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="College Preparation"
                                        route="/BucketList/thoughts"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Digital Security"
                                        route="/BucketList/bucketLists"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Medical Emergency"
                                        route="/BucketList/memory"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={false}
                                        showText={true}
                                        text="Job Search"
                                        route="/BucketList/thoughts"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Health"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Work"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Family"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Health"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Work"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Family"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Health"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Work"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Family"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />                          
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Health"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Work"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        IconName='locked'
                                        onPress={handleUpload}
                                    />
                                    <BucketListComponent
                                        showIcon={true}
                                        showText={true} // Ensure showText is true when showIcon is true
                                        // text="Family"
                                        route="/BucketList/paymentMethod" // Set route to "/BucketList/paymentMethod"
                                        image={require('../../../assets/images/Group 1508.png')}
                                        onPress={handleUpload}
                                        IconName='locked'
                                    />                          
                                </View>
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
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
        width: "100%", // Ensure the width is 100% for all screens
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 20,
        maxWidth: 360, // Ensure the content does not expand beyond this width
    },
    bucketContainer2: {
        width: "100%", // Ensure the width is 100% for all screens
        backgroundColor: "#F7F5FA",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginTop: 20,
        position: 'relative',
        paddingHorizontal:22,
        maxWidth: 360, // Ensure the content does not expand beyond this width
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(138, 138, 138, 0.6)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    icon: {
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 3,
        marginHorizontal: 10
    },
    textBig: {
        fontWeight: "bold",
        fontSize: 23,
        paddingVertical: 10
    },
    bucketContainerText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
        alignItems: "center",
    },
    BucketText: {
        fontWeight: "700",
        width: 112,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
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
