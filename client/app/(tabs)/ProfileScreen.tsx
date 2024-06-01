import { Animated, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UserProfileDetailView from '@/components/tool_ProfileScreen/UserProfileDetailView'
import UserProfilePostView from '@/components/tool_ProfileScreen/UserProfilePostView'

const ProfileScreen = () => {
  
  return (
    <View>
      <UserProfileDetailView/>
      <UserProfilePostView/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

})