import { View, Text, StyleSheet, TouchableHighlight, Image, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { User, getUserByUsername } from '@/constants/chat.data';
import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

function Menu() {
    return (
        <View>
            <TouchableHighlight style={styles.menu}
                underlayColor={'lightgray'}
                onPress={() => console.log('pressed')}>
                <Text style={{ fontSize: 16 }}>Theme</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'lightgray'}
                onPress={() => console.log('pressed')}
                style={styles.menu}>
                <Text style={{ fontSize: 16 }}>Private and Security</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'lightgray'}
                onPress={() => console.log('pressed')}
                style={styles.menu}>
                <Text style={{ fontSize: 16 }}>Create Chat Room</Text>
            </TouchableHighlight>
        </View>
    );
}

type MessageProfileProps = User;
function MessageProfile( props : MessageProfileProps) {
    return (
        <View style={styles.profile}>
            <View style={styles.avatar}>
                <Image source={{ uri: props.avatar }} style={{ width: 96, height: 96, borderRadius: 100 }} />
            </View>
            <Text style={{ fontSize: 24, fontWeight: '900' }}>{props.username}</Text>
        </View>
    );
}



type MessageNavSettingProps = {
    handleClickProfile: () => void;
};

function MessageNavSetting({ handleClickProfile}: MessageNavSettingProps) {
    return (
        <View style={styles.navContainer}>
            <Pressable style={styles.iconGroup} onPress={handleClickProfile}>
                <FontAwesome6 name="user" size={24} />
                <Text>Profile</Text>
            </Pressable>
            <View style={styles.iconGroup}>
                <FontAwesome6 name="bell" size={24} />
                <Text>Notifications</Text>
            </View>
            <View style={styles.iconGroup}>
                <FontAwesome6 name="ellipsis" size={24} />
                <Text>Options</Text>
            </View>
        </View>
    );
}

type MessageSettingProps = {};

function MessageSetting({ }: MessageSettingProps) {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [interlocutorUser] = useState(getUserByUsername(id!));
    const handleClickProfile = () => {
        console.log('Profile');
        router.push(`/direct/t/${interlocutorUser!.username}/profile`);
    };
    return (
        <View style={styles.container}>
            <MessageProfile {...interlocutorUser!} />
            <MessageNavSetting handleClickProfile={handleClickProfile} />
            <Menu />
        </View>
    );
}

export default MessageSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 16,
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        paddingVertical: 8,
        marginBottom: 12,
    },
    iconGroup: {
        gap: 8,
        alignItems: 'center',
    },
    menu: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
        alignItems: 'center',
        gap: 8,
        paddingVertical: 4
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 100,
        backgroundColor: 'gray',
    }

});