import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CircleView from './CircleView'
import React from 'react'

const StoryView = () => {
  return (
    <View>
        <ScrollView horizontal={true} style={{height:80, paddingLeft:10,marginTop:10}}>
          
          <CircleView></CircleView>

          <CircleView></CircleView>

          <CircleView></CircleView>

          <CircleView></CircleView>

          <CircleView></CircleView>

          <CircleView></CircleView>
              
      </ScrollView>
    </View>
  )
}

export default StoryView

const styles = StyleSheet.create({})