import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './(tabs)/HomeScreen'
import ProfileScreen from './(tabs)/ProfileScreen'
import { Redirect,Link } from "expo-router";

export default function index() {
    const key:Boolean = false;
    
    if (!key)
        return <Redirect href="/sign-in"/>

    return (
    <View>
        {/* <Text>Index</Text> */}
        <Link href="/ProfileScreen">Profile </Link>
        <Link href="/HomeScreen">Home </Link>
    </View>
    );
}