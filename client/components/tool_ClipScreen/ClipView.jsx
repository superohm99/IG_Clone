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
import "@expo/match-media";

const ClipView = () => {

  [layout, setLayout] = useState({
    resizeVideo: ResizeMode.COVER,
    marginLeftVideo: 0,
    marginTopVideo: 0,
    width: 1200,
    height: Dimensions.get('screen').height - 70
  });

  max_width = Dimensions.get('screen').width;
  max_height = Dimensions.get('screen').height;

  isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    if (isTabletOrMobileDevice) {
      setLayout({
        resizeVideo: ResizeMode.COVER,
        marginLeftVideo: 0,
        marginTopVideo: 0,
        width: max_width,
        height: max_height - 70
      });
    } else {
      setLayout({
        resizeVideo: ResizeMode.COVER,
        marginLeftVideo: 222,
        marginTopVideo: 0,
        width: 1200,
        height: max_height - 70
      });
    }
    console.log("FFFF")
  }, [isTabletOrMobileDevice, max_width, max_height]);

  return (

    <View style={{marginLeft:layout.marginLeftVideo,marginTop:layout.marginTopVideo}}>

        <VideoPlayer
            style={{width:layout.width,height:layout.height,position: "absolute",zIndex:0,videoBackgroundColor:'white'}}
            videoProps={{
            shouldPlay: true,
            resizeMode: layout.resizeVideo,
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