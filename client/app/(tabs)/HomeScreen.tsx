import { Button, StyleSheet,ScrollView,StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoryView  from "../../components/tool_HomeScreen/StoryView"
import PostView  from "../../components/tool_HomeScreen/PostView"
import HeaderView  from "../../components/tool_HomeScreen/HeaderView"

export default function HomeScreen() {
  return (
    
    <SafeAreaView style={styles.container}>

      <HeaderView></HeaderView>


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
    // paddingTop: StatusBar.currentHeight,
  }
});