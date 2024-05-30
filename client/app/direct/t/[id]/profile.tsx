import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
const profile = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text>hello from profile {id}</Text>
    </View>
  )
}

export default profile