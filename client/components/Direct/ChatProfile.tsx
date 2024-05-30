import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { router } from 'expo-router'
import { User } from '@/constants/chat.data';
type ChatProfileProps = User;

function ChatProfile( props: ChatProfileProps) {
    const handlePressProfile = () => {
        router.push(`/direct/t/${props.username}/profile`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image source = {{uri: props.avatar}} style={{width: 128, height: 128, borderRadius: 100}} />
            </View>
            <Text>{props.name}</Text>
            <Text>Instagram • {props.username}</Text>
            <Pressable onPress={handlePressProfile} style={styles.profileButton}>
                <Text>View Profile</Text>
            </Pressable>
        </View>
    );
}

export default ChatProfile;

const styles = StyleSheet.create({
    container: {
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    avatar: {
        width: 128,
        height: 128,
        borderRadius: 100,
        backgroundColor: 'lightgray',
    },
    profileButton: {
        backgroundColor: 'lightblue',
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        width: 100,
    },
});