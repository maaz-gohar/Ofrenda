import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState('main-screen');
    const [currentSection, setCurrentSection] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Determine which section we're in based on the pathname
        if (pathname.includes('dearly-departed')) {
            setCurrentSection('dearly-departed');
        } else if (pathname.includes('best-friend-and-family')) {
            setCurrentSection('best-friend-and-family');
        } else if (pathname.includes('bucket-list')) {
            setCurrentSection('bucket-list');
        }

        // Set active tab based on the current route
        if (pathname.includes('main-screen') || pathname === '/') {
            setActiveTab('main-screen');
        } else if (pathname.includes('notification')) {
            setActiveTab('notification');
        } else if (pathname.includes('profile')) {
            setActiveTab('profile');
        }
    }, [pathname]);

    const getActiveColor = () => {
        if (activeTab === 'main-screen') {
            switch (currentSection) {
                case 'best-friend-and-family':
                    return 'rgba(94, 164, 253, 1)';
                case 'bucket-list':
                    return 'rgba(188, 97, 213, 0.8)';
                default:
                    return '#FFC70B';
            }
        }
        return '#FFC70B';
    };

    const getMainScreenPath = () => {
        if (currentSection === 'dearly-departed') {
            return '../dearly-departed/main-screen';
        } else if (currentSection === 'best-friend-and-family') {
            return '../best-friend-and-family/main-screen';
        } else if (currentSection === 'bucket-list') {
            return '../bucket-list/main-screen';
        } else {
            return '../dearly-departed/main-screen'; // Default path
        }
    };

    const handleTabPress = async (tab: 'main-screen' | 'notification' | 'profile') => {
        // Immediately update the active tab state
        setActiveTab(tab);

        try {
            if (tab === 'main-screen') {
                await router.push(getMainScreenPath());
            } else if (tab === 'notification') {
                await router.push('/notification');
            } else if (tab === 'profile') {
                await router.push('/profile');
            }
        } catch (error) {
            console.error('Navigation error:', error);

            if (pathname.includes('main-screen') || pathname === '/') {
                setActiveTab('main-screen');
            } else if (pathname.includes('notification')) {
                setActiveTab('notification');
            } else if (pathname.includes('profile')) {
                setActiveTab('profile');
            }
        }
    };

    const isTabActive = (tabName: string) => {
        if (tabName === activeTab) return true;
        if (tabName === 'main-screen' && (pathname.includes('main-screen') || pathname === '/')) return true;
        if (tabName === 'notification' && pathname.includes('notification')) return true;
        if (tabName === 'profile' && pathname.includes('profile')) return true;
        return false;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.subContainer]}
                onPress={() => handleTabPress('main-screen')}>
                <View style={styles.tabContent}>
                    <Ionicons
                        name='home-outline'
                        size={24}
                        color={isTabActive('main-screen') ? getActiveColor() : '#484C52'}
                    />
                    <Text style={[
                        styles.text,
                        isTabActive('main-screen') && {
                            ...styles.activeText,
                            color: getActiveColor()
                        }
                    ]}>Home</Text>
                    {isTabActive('main-screen') && (
                        <View style={[
                            styles.activeIndicator,
                            { backgroundColor: getActiveColor() }
                        ]} />
                    )}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.subContainer]}
                onPress={() => handleTabPress('notification')}>
                <View style={styles.tabContent}>
                    <MaterialIcons
                        name='notifications-active'
                        size={24}
                        color={isTabActive('notification') ? '#FFC70B' : '#484C52'}
                    />
                    <Text style={[styles.text, isTabActive('notification') && styles.activeText]}>Notification</Text>
                    {isTabActive('notification') && <View style={styles.activeIndicator} />}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.subContainer]}
                onPress={() => handleTabPress('profile')}>
                <View style={styles.tabContent}>
                    <Ionicons
                        name='person-outline'
                        size={24}
                        color={isTabActive('profile') ? '#FFC70B' : '#484C52'}
                    />
                    <Text style={[styles.text, isTabActive('profile') && styles.activeText]}>Profile</Text>
                    {isTabActive('profile') && <View style={styles.activeIndicator} />}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderColor: '#F7F5FA',
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 15,
        justifyContent: 'space-between',
        width: "100%",
        flexDirection: "row",
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
    },
    tabContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#484C52',
        marginTop: 4,
    },
    activeText: {
        fontWeight: 'bold',
        color: "rgba(255, 199, 11, 0.9)"
    },
    activeIndicator: {
        position: 'absolute',
        bottom: -15,
        width: '100%',
        height: 3,
        backgroundColor: '#FFC70B',
        borderRadius: 2,

    }
});

export default TabBar;