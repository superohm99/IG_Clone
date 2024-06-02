import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const ChooseStories = () => {
    const handleBack = () => {
        router.navigate("/ProfileScreen");
    }
    
    return (
    <SafeAreaView style={styles.topnav}>
            <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
            <Pressable onPress={handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode="tail">Highlight</Text>
            </Pressable>
            <Pressable style={styles.leftnav} onPress={( )=> {router.push("/(profile)/HighLight/ConfirmStories")}}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: '#19B2FF' }} numberOfLines={1} ellipsizeMode="tail">Next</Text>
                </View>
            </Pressable>
    </SafeAreaView>
  )
}

export default ChooseStories

const styles = StyleSheet.create({
    topnav: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        gap: 28,
    },
    leftnav: {
        marginLeft: 'auto',
    }
})