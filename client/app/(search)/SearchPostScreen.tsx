import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";
import SearchPostContent from '@/components/SearchPage/SearchPostView';
import { useLocalSearchParams } from 'expo-router';

interface SearchDataItem {
  id: string;
  user: string;
  images: { url: string }[];
}

const SearchPostScreen = () => {
  const { id, user } = useLocalSearchParams()
 
  return (
    <SafeAreaView style={styles.safe_container}>
      <ScrollView >
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.topHeaderWrapper}>
            <View style={styles.headerTopLeftWrapper}>
              <TouchableOpacity onPress={() => router.push('/SearchScreen')}>
                <Icon size={20} name="arrow-left" />
              </TouchableOpacity>
              <View style={styles.headerText}>Explore</View>
            </View>
          </View>
        </View>
          <Text>Hello - {id} {user}</Text>
        <SearchPostContent id={id} user={user}/> 
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchPostScreen


const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    headerWrapper: {
      display: 'flex',
    },
    topHeaderWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    headerTopLeftWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText:{
      fontSize: 20,
      paddingLeft: 10,
    },
    safe_container:{
      flex: 1,
    },
    scrollView:{
      marginHorizontal: 1,
    },
  });