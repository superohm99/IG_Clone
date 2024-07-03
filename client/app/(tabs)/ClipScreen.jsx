import { StyleSheet, Text, View, ScrollView ,Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import {useEffect, useState} from "react";
import { Dimensions } from 'react-native';
import ClipView from '../../components/tool_ClipScreen/ClipView';
import { icons } from "../../constants";
import IconView from "../../components/tool_ClipScreen/IconView"

const ClipScreen = () => {
  useEffect(()=> {

  },[])


  var max_width = Dimensions.get('screen').width;
  var max_height = Dimensions.get('screen').height;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reels</Text>
        <TouchableOpacity>
          <Image source={icons.camera} style={styles.camera} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ClipView></ClipView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ClipScreen

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex:1, 
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white'
  },
  camera: {
    width: 35,
    height: 35,
    color: 'white',
    top: 1.5,
    tintColor: 'white'
  }
})