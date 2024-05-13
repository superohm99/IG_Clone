import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircleView = () => {
  return (
    <View style={styles.circle}></View>
  )
}

export default CircleView

const styles = StyleSheet.create({
    circle: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginRight: 20,
      backgroundColor: 'red',
    },
  });