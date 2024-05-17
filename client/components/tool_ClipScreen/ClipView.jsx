import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import VideoPlayer from 'expo-video-player'
import {useEffect, useState} from "react";
import { Dimensions } from 'react-native';
import { ResizeMode } from 'expo-av';
import { icons } from "../../constants";
import IconView from "./IconView"
import PersonView from "./PersonView"
import { useMediaQuery } from "react-responsive";

const ClipView = () => {
    useEffect(()=> {

    },[])


    max_width = Dimensions.get('screen').width;
    max_height = Dimensions.get('screen').height;

    const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1224px)",
    });
  
    resize_video = null;
    marginleft_video = 225
    margintop_video = 30
    width = 1200
    hight = max_height - 300
    if (isTabletOrMobileDevice)
    {
      margintop_video = 0
      resize_video =  ResizeMode.COVER;
      hight = max_height - 70
      width = max_width
      marginleft_video = 0
    }

  return (

    <View style={{marginLeft:marginleft_video,marginTop:margintop_video}}>

        <VideoPlayer
            style={{width:width,height:hight,position: 'absolute',zIndex:0,videoBackgroundColor:'white'}}
            videoProps={{
            shouldPlay: true,
            resizeMode: resize_video,
            source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            },
            }}
        />
        <PersonView></PersonView>
        <IconView></IconView>
  </View>
  )
}

export default ClipView

const styles = StyleSheet.create({})