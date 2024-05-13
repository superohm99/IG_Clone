import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircleView = () => {
  return (
    <View style={{
      width: 76,
      height: 76,
      borderWidth: 3,
      borderColor: 'green', 
      marginRight: 18,
      borderRadius: 50, 
    }}>
    <View style={styles.circle}></View>
    </View>
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
      borderWidth: 2,
      borderColor: 'white' 
    },
  });