import { Animated, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UserProfileDetailView from '@/components/tool_ProfileScreen/UserProfileDetailView'
import UserProfilePostView from '@/components/tool_ProfileScreen/UserProfilePostView'
import UserProfileHighlightStory from '@/components/tool_ProfileScreen/UserProfileHighlightStory'

const ProfileScreen = () => {
  
  return (
    <View>
      <UserProfileDetailView/>
      <UserProfileHighlightStory/>
      <UserProfilePostView/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

})