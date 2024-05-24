import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="SignInScreen" options={{ headerShown: false }} />

        <Stack.Screen name="CreateUsernameScreen" options={{ headerShown: false }} />
        <Stack.Screen name="CreatePasswordScreen" options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />

        <Stack.Screen name="PhoneEmailScreen" options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmationCodeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SyncScreen" options={{ headerShown: false }} />
        <Stack.Screen name="GetFacebookScreen" options={{ headerShown: false }} />
        <Stack.Screen name="AccountPrivacyScreen" options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} />
        <Stack.Screen name="RememberLoginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="DiscoverScreen" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout