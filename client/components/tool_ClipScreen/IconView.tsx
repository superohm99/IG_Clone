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
        <Text style={{color:'black',fontSize:15,marginTop:10}}>1,111</Text>
        <Image
        source={icons.chat}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
        <Text style={{color:'black',fontSize:15,marginTop:10}}>220</Text>
        <Image
        source={icons.send}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
        <Text style={{color:'black',fontSize:15,marginTop:10}}>50</Text>      
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