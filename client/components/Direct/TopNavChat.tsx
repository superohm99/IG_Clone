import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type TopNavChatProps = {
    username: string;
};

export default function TopNavChat({ username }: TopNavChatProps) {
    const handleBack = () => {
        router.back();
    }
    return (
        <SafeAreaView style={styles.topnav}>
            <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
            <Pressable onPress={handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode="tail">{username}</Text>
                <FontAwesome6 name="caret-down" size={18} />
            </Pressable>
            <View style={styles.leftnav}>
                <FontAwesome6 name="pen" size={18} onPress={handleBack} />
            </View>
        </SafeAreaView>
    );
}

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
});