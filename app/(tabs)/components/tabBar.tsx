import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState('mainScreen');
    const [currentSection, setCurrentSection] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Determine which section we're in based on the pathname
        if (pathname.includes('Dearly Department')) {
            setCurrentSection('Dearly Department');
        } else if (pathname.includes('BestFriendAndFamily')) {
            setCurrentSection('BestFriendAndFamily');
        } else if (pathname.includes('BucketList')) {
            setCurrentSection('BucketList');
        }

        // Set active tab based on the current route
        if (pathname.includes('mainScreen') || pathname === '/') {
            setActiveTab('mainScreen');
        } else if (pathname.includes('notification')) {
            setActiveTab('notification');
        } else if (pathname.includes('profile')) {
            setActiveTab('profile');
        }
    }, [pathname]);

    const getActiveColor = () => {
        if (activeTab === 'mainScreen') {
            switch (currentSection) {
                case 'BestFriendAndFamily':
                    return 'rgba(94, 164, 253, 1)';
                case 'BucketList':
                    return 'rgba(188, 97, 213, 0.8)';
                default:
                    return '#FFC70B';
            }
        }
        return '#FFC70B';
    };

    const getMainScreenPath = () => {
        if (currentSection === 'Dearly Department') {
            return '../Dearly Department/mainScreen';
        } else if (currentSection === 'BestFriendAndFamily') {
            return '../BestFriendAndFamily/mainScreen';
        } else if (currentSection === 'BucketList') {
            return '../BucketList/mainScreen';
        } else {
            return '../Dearly Department/mainScreen'; // Default path
        }
    };

    const handleTabPress = async (tab) => {
        // Immediately update the active tab state
        setActiveTab(tab);

        try {
            if (tab === 'mainScreen') {
                await router.push(getMainScreenPath());
            } else if (tab === 'notification') {
                await router.push('/notification');
            } else if (tab === 'profile') {
                await router.push('/profile');
            }
        } catch (error) {
            console.error('Navigation error:', error);

            if (pathname.includes('mainScreen') || pathname === '/') {
                setActiveTab('mainScreen');
            } else if (pathname.includes('notification')) {
                setActiveTab('notification');
            } else if (pathname.includes('profile')) {
                setActiveTab('profile');
            }
        }
    };

    const isTabActive = (tabName) => {
        if (tabName === activeTab) return true;
        if (tabName === 'mainScreen' && (pathname.includes('mainScreen') || pathname === '/')) return true;
        if (tabName === 'notification' && pathname.includes('notification')) return true;
        if (tabName === 'profile' && pathname.includes('profile')) return true;
        return false;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.subContainer]}
                onPress={() => handleTabPress('mainScreen')}>
                <View style={styles.tabContent}>
                    <Ionicons
                        name='home-outline'
                        size={24}
                        color={isTabActive('mainScreen') ? getActiveColor() : '#484C52'}
                    />
                    <Text style={[
                        styles.text,
                        isTabActive('mainScreen') && {
                            ...styles.activeText,
                            color: getActiveColor()
                        }
                    ]}>Home</Text>
                    {isTabActive('mainScreen') && (
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