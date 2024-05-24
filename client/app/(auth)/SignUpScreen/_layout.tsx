import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignUpLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateUsernameScreen" />
        <Stack.Screen name="CreatePasswordScreen" />
        <Stack.Screen name="WelcomeScreen" />
        <Stack.Screen name="PhoneEmailScreen" />
        <Stack.Screen name="ConfirmationCodeScreen" />
        <Stack.Screen name="SyncScreen" />
        <Stack.Screen name="GetFacebookScreen" />
        <Stack.Screen name="AccountPrivacyScreen" />
        <Stack.Screen name="AddProfileScreen" />
        <Stack.Screen name="RememberLoginScreen" />
        <Stack.Screen name="DiscoverScreen" />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default SignUpLayout;
