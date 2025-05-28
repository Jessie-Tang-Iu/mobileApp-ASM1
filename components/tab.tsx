import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Tab({ label, isFocused }: { label: string; isFocused: boolean }) {
    return (
        <TouchableOpacity style={isFocused ? styles.homeFeaturesFocus : styles.homeFeatures}>
            <Text style={isFocused ? styles.featuresTextFocus : styles.featuresText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    featuresTextFocus: {
    alignContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    },
    featuresText: {
        alignContent: 'center',
        color: '#444',
        fontWeight: 'bold',
    },
    homeFeaturesFocus: {
        paddingVertical:10,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
    },
    homeFeatures: {
        paddingVertical:10,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#444',
    },
});