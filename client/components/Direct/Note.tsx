import { ScrollView, StyleSheet, View, Text, Image  } from 'react-native';
import { getNotes, currentUser, Note as TNote } from '@/constants/chat.data';
import { useEffect, useState } from 'react';

type NoteItemProps = TNote;
function NoteItem(props: NoteItemProps) {
    const { text, user } = props;
    return (
        <View style={styles.noteItem}>
            {text && <View style={styles.noteBox}>
                <Text numberOfLines={4} ellipsizeMode="tail" style={{ fontSize: 12, textAlign: 'center', textAlignVertical: 'center' }}>{text}</Text>
            </View>}
            <View style={styles.profileThumbnail}>
                <Image source={{ uri: user.avatar }} style={{ width: 72, height: 72, borderRadius: 50 }} />
            </View>
            {user.isOnline && <View style={styles.active}></View>}
            <Text>{user.username}</Text>
        </View>
    );
};

type NoteProps = {};

export default function Note({ }: NoteProps) {
    const [noteList, setNoteList] = useState(getNotes(currentUser));
    const [noteSelf, setNoteSelf] = useState<TNote>(getNotes(currentUser).find(note => note.user.userId === currentUser.userId)!);

    useEffect(() => {
        // console.log(`noteSelf: ${JSON.stringify(noteSelf, null, 2)}`);
    }, [noteSelf, noteList]);
    return (
        <ScrollView horizontal={true}
            contentContainerStyle={styles.note}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {noteList.map((note, index) => (
                <NoteItem key={index} {...note} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    note: {
        flexDirection: "row",
        flexWrap: "nowrap",
        // overflow: "auto",
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    noteItem: {
        flexDirection: "column",
        alignItems: "center",
    },
    noteBox: {
        zIndex: 1,
        left: 10,
        top: -28,
        position: "absolute",
        minWidth: 42,
        minHeight: 42,
        maxWidth: 84,
        padding: 6,
        maxHeight: 96,
        borderRadius: 16,
        backgroundColor: "#fdfdfd",
        borderColor: "#f0f0f0",
        borderWidth: 1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    profileThumbnail: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: "gray",
        marginHorizontal: 10,
    }, active: {
        position: "absolute",
        right: '10%',
        top: '55%',
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: "lime",
        borderColor: "#fff",
        borderWidth: 2,
    }
});