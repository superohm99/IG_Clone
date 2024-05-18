import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { icons } from "../../constants";


const IconView = () => {



  return (
    <View style={{position:'absolute',left:'85%',top:'2%',zIndex:1}}>
        <Image
            source={icons.camera}
            resizeMode="contain"
            style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:15,marginBottom:350}}
              />
        <Image
            source={icons.heart}
            resizeMode="contain"
            style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:15}}
            />
        <Image
        source={icons.chat}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
        <Image
        source={icons.send}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
        <Image
        source={icons.more}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
    </View>
  )
}

export default IconView

const styles = StyleSheet.create({})