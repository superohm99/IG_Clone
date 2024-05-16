import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostView = () => {
  return (
    <ScrollView style={styles.scrollView}>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            deserunt mollit anim id est laborum.
            {"\n"}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            deserunt mollit anim id est laborum.
            {"\n"}
          </Text>
        </View>
        
      </ScrollView>
  )
}

export default PostView


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 2,
    },
    text: {
      fontSize: 42,
    },
  });