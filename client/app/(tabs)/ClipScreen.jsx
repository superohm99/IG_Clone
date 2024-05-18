import { StyleSheet, Text, View, ScrollView ,Image } from 'react-native'
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

      <ScrollView  style={{paddingLeft:0}}>

        
        <View style={{position: 'absolute',zIndex:1,flexDirection:'row'}}>
        
          <Text style={{fontSize:30,color:'white',marginLeft:10,marginTop:20}}>Reels</Text>

        </View>

        <ClipView></ClipView>

        {/* <ClipView></ClipView>

        <ClipView></ClipView> */}

        {/* <Text>
        {'\n'}
        </Text> */}

      </ScrollView>


  )
}

export default ClipScreen

const styles = StyleSheet.create({  

})

// rnfes