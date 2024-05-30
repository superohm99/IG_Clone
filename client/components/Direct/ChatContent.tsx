import { StyleSheet, View, Text, Pressable, TouchableHighlight, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { getInbox, currentUser, Inbox } from "@/constants/chat.data";
import { useEffect, useState } from "react";

type ChatItemProps = {
    data: Inbox;
};
function ChatCardItem({ data }: ChatItemProps) {
    
    const handlePressChat = () => {
        router.push({
            pathname: `/direct/t/${data.lastMessage.room.roomId}`,
        });
    }
    const handleLongPress = () => {
        console.log("pop up bottom sheet");
    }
    const handlePressCamera = () => {
        console.log("Camera");
    }
    const handlePressProfile = () => {
        console.log("Story");
    }   

    return (
        <View>
            <TouchableHighlight
                onPress={handlePressChat}
                onLongPress={handleLongPress}
                underlayColor="#f0f0f0">
                <View style={styles.chatCard}>

                    <Pressable
                        onPress={ data.interlocutorUser.isStory ? handlePressProfile : handlePressChat }>
                        <View style={styles.chatAvatar}>
                            <Image source = {{uri: data.interlocutorUser.avatar}} style={{width: 52, height: 52, borderRadius: 50}} />
                            {data.interlocutorUser.isOnline && <View style={styles.activeII}></View>}
                        </View>
                    </Pressable>
                        <View style={styles.chatContent}>
                            <Text numberOfLines={1} ellipsizeMode="tail">{data.interlocutorUser.username}</Text>
                            <View style={styles.chatContentText}>
                                <Text numberOfLines={1} ellipsizeMode="tail">{data.lastMessage.text}</Text>
                                <Text>• {data.lastMessage.createdAt.toLocaleTimeString()}</Text>
                            </View>
                        </View>
                    <Pressable onPress={handlePressCamera}>
                        <FontAwesome6 name="camera" size={24} />
                    </Pressable>

                </View>
            </TouchableHighlight>
        </View>
    );
}

type ChatContentProps = {};

export default function ChatContent({}: ChatContentProps) {
    const [data, setData] = useState(getInbox(currentUser));

    useEffect(() => {
    }, []);

    return (
        <View style={{ gap: 8 }}>
            <View style={styles.contentHeader}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>ข้อความ</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'darkblue' }}>คำขอ</Text>
            </View>
            {data.map((item, index) => (
                <ChatCardItem key={index} data={item} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    contentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    chatCard: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: "center",
        gap: 20,
    },
    chatAvatar: {
        width: 52,
        height: 52,
        borderRadius: 50,
        backgroundColor: "gray",
    },
    chatContent: {
        flexDirection: "column",
        flex: 1,
    },
    chatContentText: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        marginRight: 60,
    },
    activeII: {
        position: "absolute",
        right: '-10%',
        top: '60%',
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: "lime",
        borderColor: "#fff",
        borderWidth: 2,
    }
});