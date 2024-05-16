import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/(tabs)/HomeScreen'
import ProfileScreen from './app/(tabs)/ProfileScreen'
import SearchHomeScreen from "./app/(tabs)/SearchScreen";
import SearchUserScreen from "./app/(tabs)/SearchUserScreen";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen name="SearchHome" component={SearchHomeScreen}/>
        <Stack.Screen name="SearchUser" component={SearchUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}