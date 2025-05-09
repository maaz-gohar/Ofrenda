import React from 'react';
import { View, StyleSheet } from 'react-native';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        paddingTop: 30,
        marginTop: -35,
        paddingHorizontal: 15,
    }
});

export default Wrapper;