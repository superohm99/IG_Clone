import { ScrollView, StyleSheet, View, Text, Image, Pressable, Modal, TextInput, TouchableHighlight } from 'react-native';
import { currentUser, Note as TNote, getOtherNotes, getCurrentUserNotes, User, addNewNote } from '@/constants/chat.data';
import { useEffect, useState, useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';

type NoteItemProps = TNote & { 
    isMe?: boolean, 
    handleSentNote?: () => void, 
    handlePressNote: (noteObj: TNote) => void 
};
function NoteItem(props: NoteItemProps) {
    const { text, user, isMe, handleSentNote, handlePressNote } = props;
    const [currNote, setCurrNote] = useState<string>(text);
    const [newNote, setNewNote] = useState<string>('');
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleNoteChange = (text: string) => {
        setNewNote(text);
    }

    const handlePress = () => {
        console.log(`NoteItem: ${user.username}`);
        if (isMe) {
            if (text) {
                console.log(`NoteItem: ${text}`);
                // bottom sheet modal
            } else {
                console.log(`NoteItem: No text`);
                handleModalPress();
            }
        } else {
            // bottom sheet modal
            const noteObj = {
                noteId: props.noteId,
                text: props.text,
                createdAt: props.createdAt,
                user: props.user,
                isDelete: props.isDelete,
            } as TNote;
            handlePressNote(noteObj);
        }
    };
    const handleSubmitNote = () => {
        const newNoteObj = addNewNote(newNote);
        console.log(`NoteItem: ${newNoteObj.text}`);

        setNewNote('')
        handleCloseModal()
        if (handleSentNote) handleSentNote();
    }

    return (
        <>
            <Pressable
                onPress={handlePress}
                style={styles.noteItem}>
                {(isMe && !text) ?
                    (<View style={styles.noteBox}>
                        <Text
                            numberOfLines={4}
                            ellipsizeMode="tail"
                            style={{ fontSize: 12, textAlign: 'center', textAlignVertical: 'center' }}>
                            โน้ต...
                        </Text>
                    </View>)
                    :
                    (<>
                        {text &&
                            <View style={styles.noteBox}>
                                <Text
                                    numberOfLines={4}
                                    ellipsizeMode="tail"
                                    style={{ fontSize: 12, textAlign: 'center', textAlignVertical: 'center' }}>
                                    {text}
                                </Text>
                            </View>}
                    </>)
                }
                <View style={styles.profileThumbnail}>
                    <Image source={{ uri: user.avatar }} style={{ width: 72, height: 72, borderRadius: 50 }} />
                </View>
                {user.isOnline && <View style={styles.active}></View>}
                {isMe ? <Text>โน้ตของคุณ</Text> : <Text>{user.username}</Text>}
            </Pressable>

            <Modal
                animationType="fade"
                onRequestClose={handleCloseModal}
                visible={modalVisible}>
                <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight
                        underlayColor={'lightgray'}
                        style={{ position: 'absolute', top: 16, left: 16, borderRadius: 50, borderColor: 'lightgray' }} onPress={handleCloseModal}>
                        <AntDesign
                            style={{ padding: 12 }}
                            name="close" size={24} color="black" />
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'lightgray'}
                        style={{ position: 'absolute', top: 16, right: 16, padding: 12 }} onPress={handleSubmitNote}>
                        <Text>แชร์</Text>
                    </TouchableHighlight>
                    <View style={{ position: 'relative' }}>
                        <View
                            style={{
                                position: 'absolute',
                                top: -32,
                                left: 0,
                                zIndex: 1,
                                backgroundColor: "#fdfdfd",
                                borderColor: "#f0f0f0",
                                borderWidth: 1,
                                borderRadius: 16,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <TextInput
                                maxLength={60}
                                placeholder='โน้ต...'
                                multiline={true}
                                onChangeText={handleNoteChange}
                                style={{ fontSize: 16, textAlign: 'center', textAlignVertical: 'center', flexWrap: 'wrap', maxWidth: 96, maxHeight: 80, borderRadius: 16, justifyContent: 'center' }}>
                                {text}
                            </TextInput>
                        </View>
                        <Image source={{ uri: props.user.avatar }} style={{ width: 96, height: 96, borderRadius: 100 }} />
                    </View>
                </View>
            </Modal>
        </>
    );
};

type NoteProps = {
    handleClickedNote: (noteObj: TNote) => void;
};

export default function Note({ handleClickedNote }: NoteProps) {
    const [noteSelf, setNoteSelf] = useState<TNote>(getCurrentUserNotes(currentUser));
    const [noteList, setNoteList] = useState<TNote[]>(getOtherNotes(currentUser));
    const [isSentNote, setIsSentNote] = useState<boolean>(false);
    const handleSentNote = () => {
        console.log(`Note: Sent note`);
        setIsSentNote(true);
    };
    useEffect(() => {
        if (isSentNote) {
            console.log(`Note: Sent note useEffect`);

            setNoteSelf(getCurrentUserNotes(currentUser));
            setNoteList(getOtherNotes(currentUser));
            setIsSentNote(false);
        }
    }, [isSentNote]);
    return (
        <ScrollView horizontal={true}
            contentContainerStyle={styles.note}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <NoteItem {...noteSelf} isMe={true} handleSentNote={handleSentNote} handlePressNote={handleClickedNote} />
            {noteList.map((note, index) => (
                <NoteItem key={index} {...note} handlePressNote={handleClickedNote} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    note: {
        flexDirection: "row",
        flexWrap: "nowrap",
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