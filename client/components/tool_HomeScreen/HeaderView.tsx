import { StyleSheet, Text,Image, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { icons } from "../../constants";

type HeaderProps = {
  handleNotificationPage: () => void;
  handleChatPage: () => void;
}

const HeaderView: React.FC<HeaderProps> = ({ handleNotificationPage, handleChatPage }) => {
  const router = useRouter();

  return (
    <View style={{backgroundColor:'white', paddingTop: 12, paddingBottom: 4}}>
        <SafeAreaView style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:10, alignItems: 'center'}}>

        <Text style={{marginLeft:5,fontWeight:700,fontSize:30,fontFamily:"sans-serif-condensed"}}>Instagram</Text>

        <View style={{flexDirection:'row', gap: 22}}>
            <Pressable onPress={handleNotificationPage}>
              <Feather name="heart" size={30} color="black" onPress={handleNotificationPage} />
            </Pressable>
            <Pressable onPress={handleChatPage}>
              <Feather name="message-circle" size={30} color="black" />
            </Pressable>
        </View>


        </SafeAreaView>
    </View>
  )
}

export default HeaderView
