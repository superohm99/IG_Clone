import React, { useState } from 'react'
import { Animated, Modal, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import UserProfileDetailView from '@/components/tool_ProfileScreen/UserProfileDetailView'
import UserProfilePostView from '@/components/tool_ProfileScreen/UserProfilePostView'
import UserProfileHighlightStory from '@/components/tool_ProfileScreen/UserProfileHighlightStory'

const ProfileScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UserProfileDetailView/>
        <UserProfileHighlightStory/>
        <UserProfilePostView/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  }

})