import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { goBack } from '@/utils';
import { useRootNavigationState, useRouter } from 'expo-router';

const b1 = "#FFC70BE5"; // Gradient color 1
const b2 = "#ffe9a1";   // Gradient color 2
const bg = "rgba(0,0,0, 0.45)"; // Background color for icons

export default function MainText({
    title,
    showIcon = false,
    setting = false,
    description,
    descriptioncondition = false,
    gradientColor = [b1, b2],
    navigation // Accept navigation as a prop
}) {
    // const { routes } = useRootNavigationState();
    // console.log(JSON.stringify(routes[0].state.history, null, 2))
    const router = useRouter();
    return (
        <LinearGradient colors={gradientColor} style={styles.gradient}>
            <View style={styles.main}>
                {showIcon && (
                    <TouchableOpacity
                        onPress={() => router.back()} // Use the handleGoBack function here
                        style={styles.iconContainer}
                        accessibilityLabel="Go back"
                    >
                        <Ionicons name="arrow-back" color={"#ffffff"} size={23} />
                    </TouchableOpacity>
                )}
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.description}>
                        {description}
                        {descriptioncondition}
                    </Text>
                </View>
                {setting && (
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('Settings')} // Navigate to the settings screen
                        onPress={() => router.push('/setting')}
                        style={styles.iconContainer2}
                        accessibilityLabel="Settings"
                    >
                        <Ionicons name="settings-sharp" color={"#ffffff"} size={23} />
                    </TouchableOpacity>
                )}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: 183,
        justifyContent: "center",
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
        marginTop: 15,
        width: 200,
        textAlign: "center"
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
        paddingVertical: 5,
        borderTopLeftRadius: 36,
        borderBottomLeftRadius: 36,
    },
    description: {
        position: "relative",
        top: 15,
        fontWeight: "400",
        fontSize: 16
    }
});
