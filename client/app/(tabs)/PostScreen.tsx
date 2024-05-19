import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UploadPost from '@/components/tool_PostScreen/UploadPost'

const PostScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <UploadPost/>
      </View>
    </SafeAreaView>
  )
}

export default PostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  
});