import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignInScreen' />
        <Stack.Screen name='SignUpScreen' />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout