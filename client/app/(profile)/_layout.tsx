import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='EditProfileScreen' />
      </Stack>
    </>
  )
}

export default ProfileLayout