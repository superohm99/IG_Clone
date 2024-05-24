import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router";

import { icons } from "../../constants";

const HeaderView = () => {
  const router = useRouter();

  return (
    <View style={{backgroundColor:'white'}}>
        <SafeAreaView style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:10}}>

        <Text style={{marginLeft:5,fontWeight:700,fontSize:30,fontFamily:"sans-serif-condensed"}}>Instagram</Text>
    

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={{ marginRight:20, marginTop:10 }}
              onPress={() => {router.replace("NotificationScreen")}}
            >
              <Image
                      source={icons.heart}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black' }}
                    />
            </TouchableOpacity>
            <Image
                    source={icons.chat}
                    resizeMode="contain"
                    style={{ width: 24, height: 24, tintColor: 'black', marginRight:5, marginTop:10}}
                  />
        </View>


        </SafeAreaView>
    </View>
  )
}

export default HeaderView
