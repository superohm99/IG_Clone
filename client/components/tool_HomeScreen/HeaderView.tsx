import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HeaderView = () => {
  return (
    <View style={{}}>
        <SafeAreaView style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:10}}>

        <Text style={{marginLeft:5,fontWeight:700,fontSize:30,fontFamily:"sans-serif-condensed"}}>Instagram</Text>
    
        {/* <Text>sfa</Text> */}

        </SafeAreaView>
    </View>
  )
}

export default HeaderView
