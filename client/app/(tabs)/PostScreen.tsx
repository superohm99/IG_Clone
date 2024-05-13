import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>sfsf</Text>
      </View>
      <Text>HOME</Text>
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