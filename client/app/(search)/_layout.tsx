import React from 'react'
import { Stack } from 'expo-router'

const SearchLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OtherUser' />
      </Stack>
    </>
  )
}

export default SearchLayout