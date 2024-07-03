import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router";

import { icons } from "../../constants";
import { images } from "../../constants";

type HeaderProps = {
  handleNotificationPage: () => void;
  handleChatPage: () => void;
}

const HeaderView: React.FC<HeaderProps> = ({ handleNotificationPage, handleChatPage }) => {
  const router = useRouter();

  return (
    <View style={{backgroundColor:'white', paddingTop: 15}}>
        <SafeAreaView style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:10}}>

        <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 140 , height: 50, tintColor: 'black'}}
          />
        

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={{ marginRight:20}}
              onPress={handleNotificationPage}
            >
              <Image
                      source={icons.heart}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black'}}
                    />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChatPage}>
              <Image
                      source={icons.chat}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black', marginRight:5}}
                    />
            </TouchableOpacity>
        </View>


        </SafeAreaView>
    </View>
  )
}

export default HeaderView
