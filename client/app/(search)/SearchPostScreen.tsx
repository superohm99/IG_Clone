import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";
import SearchPostContent from '@/components/SearchPage/SearchPostView';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

interface SearchDataItem {
  id: string;
  user: string;
  images: { url: string }[];
}

const SearchPostScreen = () => {
  const { id, user } = useLocalSearchParams()
  const handleBack = () => {
    router.navigate("/SearchScreen");
  }
 
  return (
    <ScrollView >
    <SafeAreaView style={styles.safe_container}>
      <View style={styles.topnav}>
            <Pressable onPress={()=>handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
            </Pressable>
            <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode="tail">Explore</Text>
      </View>
      
        <SearchPostContent id={id} user={user}/> 
    </SafeAreaView>
    </ScrollView>
  )
}

export default SearchPostScreen


const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    scrollView:{
      marginHorizontal: 1,
    },
    topnav: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: "white",
      gap: 28,
    },
    leftnav: {
        marginLeft: 'auto',
    },
  });