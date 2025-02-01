import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState('mainScreen');
    const [currentSection, setCurrentSection] = useState('BucketList');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Determine which section we're in based on the pathname
        if (pathname.includes('Dearly Department')) {
            setCurrentSection('DearlyDepartment');
        } else if (pathname.includes('BestFriendAndFamily')) {
            setCurrentSection('BestFriendAndFamily');
        } else if (pathname.includes('BucketList')) {
            setCurrentSection('BucketList');
        } else if (pathname === '/') {
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

    const getMainScreenPath = () => {
        switch (currentSection) {
            case 'DearlyDepartment':
                return '../Dearly Department/mainScreen';
            case 'BestFriendAndFamily':
                return '../BestFriendAndFamily/mainScreen';
            case 'BucketList':
                return '../BucketList/mainScreen';
            default:
                return '../BucketList/mainScreen';
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
                style={styles.subContainer}
                onPress={() => handleTabPress('mainScreen')}>
                <Ionicons
                    name='home-outline'
                    size={24}
                // color={isTabActive('mainScreen') ? '#FFC70B' : '#484C52'}
                />
                <Text style={[styles.text]}>Home</Text>
                {/* <Text style={[styles.text, isTabActive('mainScreen') && styles.activeText]}>Home</Text> */}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.subContainer}
                onPress={() => handleTabPress('notification')}>
                <MaterialIcons
                    name='notifications-active'
                    size={24}
                // color={isTabActive('notification') ? '#FFC70B' : '#484C52'}
                />
                <Text style={[styles.text]}>Notification</Text>
                {/* <Text style={[styles.text, isTabActive('notification') && styles.activeText]}>Notification</Text> */}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.subContainer}
                onPress={() => handleTabPress('profile')}>
                <Ionicons
                    name='person-outline'
                    size={24}
                // color={isTabActive('profile') ? '#FFC70B' : '#484C52'}
                />
                <Text style={[styles.text]}>Profile</Text>
                {/* <Text style={[styles.text, isTabActive('profile') && styles.activeText]}>Profile</Text> */}
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
    },
    text: {
        fontSize: 12,
        color: '#484C52',
    },
    activeText: {
        color: '#FFC70B',
        fontWeight: 'bold',
    }
});

export default TabBar;