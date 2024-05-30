import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import Search from "@/components/Direct/Search";
import Note from "@/components/Direct/Note";
import ChatContent from "@/components/Direct/ChatContent";

export default function index() {
  const handlePress = () => {
    router.back();
  };

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log("refreshed");
      setRefreshing(false);
    }, 1000);
  }

  return (
      <ScrollView 
        style={{ backgroundColor: 'white'}} 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false} 
        refreshControl={
          <RefreshControl 
          refreshing={refreshing} 
          onRefresh={handleRefresh} />
        }>
        <Search />
        <Note />
        <ChatContent />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 16,
  },
});
