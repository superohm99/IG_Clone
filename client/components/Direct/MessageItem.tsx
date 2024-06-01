import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { router } from 'expo-router';
import { Message, currentUser } from '@/constants/chat.data';
import { useState } from 'react';

type MessageProps = Message;

function MessageItem(props: MessageProps) {
    const { text, user } = props;
    const [ isMe ] = useState(currentUser.userId === user.userId);
    const handlePressProfile = () => {
        router.push (`/direct/t/${user.username}/profile`)
    };
    return (
        <View style={styles.container}>
            {
                !isMe &&
                (<Pressable onPress={handlePressProfile} style={styles.avatar}>
                        <Image source={{ uri: user.avatar }} style={{ width: 28, height: 28, borderRadius: 50 }} />
                </Pressable>)
            }
            <View style={[isMe ? styles.messageRight : styles.messageLeft, styles.message]}>
                <Text style={{ fontSize: 16 }}>{text}</Text>
            </View>
        </View>
    );
}

export default MessageItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    message: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        maxWidth: '80%',
        marginBottom: 8,
        borderRadius: 12,
    },
    messageLeft: {
        backgroundColor: 'lightgray',
        marginRight: 'auto',
    },
    messageRight: {
        backgroundColor: 'lightblue',
        marginLeft: 'auto',
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 50,
        backgroundColor: 'gray',
    },
});