import { StyleSheet, ScrollView, RefreshControl, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { useState, useMemo, useRef } from "react";
import { router } from "expo-router";
import Search from "@/components/Direct/Search";
import Note from "@/components/Direct/Note";
import ChatContent from "@/components/Direct/ChatContent";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { User, Note as TNote } from "@/constants/chat.data";

export default function index() {
  const [refreshing, setRefreshing] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedNote, setSelectedNote] = useState<TNote | null>(null);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log("refreshed");
      setRefreshing(false);
    }, 1000);
  }

  const handlePressNote = (noteObj: TNote) => {
    console.log(`Note: ${noteObj.user.username} - ${noteObj.text}`);
    if (bottomSheetRef.current) {
      setSelectedNote(noteObj);
      bottomSheetRef.current.expand();
    }
  }

  const handlePressOtherArea = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  }

  const snapPoints = useMemo(() => ['25%'], []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>

      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePressOtherArea}>
      <ScrollView
        style={{ opacity: selectedNote ? 0.5 : 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }>
        <Search />
        <Note handleClickedNote={handlePressNote} />
        <ChatContent />
      </ScrollView>
      </TouchableOpacity>
      <BottomSheet
        enablePanDownToClose
        ref={bottomSheetRef}
        index={-1}
        onClose={() => setSelectedNote(null)}
        snapPoints={snapPoints}>
        <BottomSheetView>
          <View style={{ flexDirection: 'row', gap: 8, alignContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 56, height: 56, borderRadius: 50, backgroundColor: 'gray' }}>
              <Image source={{ uri: selectedNote?.user.avatar }} style={{ width: 56, height: 56, borderRadius: 50 }} />
            </View>
            <View>
              <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text>{selectedNote?.user.username}</Text>
              <Text>shared a note . {selectedNote?.createdAt.toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit' })}</Text>
              </View>
              <View>
                <Text>{selectedNote?.text}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 8, alignContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Comment" style={{ flex: 1 }} />
            <Button title="Send" onPress={() => {}} />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 16,
    flex: 1,
  },
});
