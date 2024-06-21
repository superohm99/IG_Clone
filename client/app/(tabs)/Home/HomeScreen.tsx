import { Button, StyleSheet,ScrollView,StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoryView  from "@/components/tool_HomeScreen/StoryView"
import PostView  from "@/components/tool_HomeScreen/PostView"
import HeaderView  from "@/components/tool_HomeScreen/HeaderView"
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    
    <SafeAreaView style={styles.container}>

      <HeaderView 
        handleNotificationPage={() => router.navigate("/Home/Notification")}
        handleChatPage={() => router.navigate("/direct/inbox")}
      ></HeaderView>

      {/* Show People' Story */}
      <StoryView></StoryView>

      {/* Show All Post */}
      <PostView></PostView>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  }
});