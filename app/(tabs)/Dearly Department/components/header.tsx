import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const b1 = "#FFC70BE5";
const b2 = "#ffe9a1";
const bg = "rgba(0,0,0, 0.45)";

export default function Header({ title, name, showIcon = false, setting = false, description, descriptioncondition = false, gradientColors = ["#FFC70BE5", "#ffe9a1"] }) {
    const navigation = useNavigation();

    const handleGoBack = () => {
        router.push('/profile')
    };

    return (
        <LinearGradient colors={gradientColors} style={styles.gradient}>
            <View style={styles.main}>
                {showIcon && (
                    <TouchableOpacity
                        onPress={handleGoBack}
                        style={styles.iconContainer}
                    >
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name='person-circle-outline' size={25} color={"#ffffff"} style={{ marginRight: 5 }} />
                            <View>
                                <Text style={{ color: "white" }}>Welcome</Text>
                                <Text style={{ color: "white", fontWeight: "500" }}>{name},</Text>
                            </View>
                        </View>
                        {/* <FontAwesome name="angle-left" color={"#ffffff"} size={23} /> */}
                    </TouchableOpacity>
                )}
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.description}>{description}{descriptioncondition}</Text>
                </View>
                {setting && (
                    <TouchableOpacity
                        onPress={() => router.push('/setting')}
                        style={styles.iconContainer2}
                    >
                        <Ionicons name="settings-sharp" color={"#ffffff"} size={25} />
                    </TouchableOpacity>
                )}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: 240,
        // justifyContent: "center",
        paddingTop: 60
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: "800",
        fontSize: 24,
        fontFamily: "Manrope",
        marginTop: 20
    },
    iconContainer: {
        position: "absolute",
        left: 0,
        backgroundColor: bg,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderTopRightRadius: 36,
        borderBottomRightRadius: 36,
    },
    iconContainer2: {
        position: "absolute",
        right: 0,
        backgroundColor: bg,
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderTopLeftRadius: 36,
        borderBottomLeftRadius: 36,
    },
    description: {
        position: "relative",
        top: 35,
        fontWeight: "700",
        fontSize: 20
    }
});
