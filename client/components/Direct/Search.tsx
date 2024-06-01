import { useState } from "react";
import { Modal, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
type SearchProps = {
};

export function Search({ }: SearchProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Pressable style={styles.search} onPress={handleModalPress} >
                <Text style={{ fontSize: 16 }}>ค้นหา</Text>
                <AntDesign name="search1" size={20} style={styles.searchIcon} />
            </Pressable>
            <Modal
                visible={modalVisible}
                animationType="none"
                transparent={true}
                onRequestClose={handleCloseModal}>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 12, alignItems: 'center', gap: 16, borderColor: 'darkgray', borderBottomWidth: 1 }}>
                            <FontAwesome6 name="arrow-left" size={28} onPress={handleCloseModal} />
                            <TextInput style={{ flex: 1 }} placeholder="Search" autoFocus={true} />
                        </View>
                    </View>
            </Modal>
        </>
    );
}

export default Search;

const styles = StyleSheet.create({
    search: {
        position: "relative",
        backgroundColor: "lightgray",
        borderRadius: 12,
        paddingVertical: 6,
        marginHorizontal: 16,
        paddingLeft: 56,
    },
    searchIcon: {
        position: "absolute",
        top: 8,
        left: 20,

    },
});

