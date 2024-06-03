import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView,ScrollView, Pressable } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import OtherUserProfileDetailView from '../tool_OtherUser/OtherUserProfileDetailView';
import OtherUserProfileHighlightStory from '../tool_OtherUser/OtherUserHighlightStory';
import OtherUserProfilePostView from '../tool_OtherUser/OtherUserProfilePostView';
import { FontAwesome6 } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { Entypo } from '@expo/vector-icons';

const SearchUserProfile = ({userId}:any) => {
    const { id, username } = useLocalSearchParams() //Send from SearchUsers.tsx
    const handleBack = () =>{
      router.navigate("/SearchUserScreen")
    }
    console.log("userId:",userId)
    console.log(username) //decode userId to username

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topnav}>
            <Pressable onPress={()=>handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
            </Pressable>
            <Text style={{ fontSize: 24, fontWeight: "bold", }} numberOfLines={1} ellipsizeMode="tail">{username}</Text>
            <View style={styles.leftnav}>
                <Feather name="bell" size={24} color="black" />
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
      </View>
        <ScrollView>
        <OtherUserProfileDetailView id={userId}/>
        <OtherUserProfileHighlightStory id={userId}/>
        <OtherUserProfilePostView id={userId}/>
          
        </ScrollView>
      </SafeAreaView>
    )
}

export default SearchUserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  topnav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "white",
    gap: 28,
  },
  leftnav: {
    marginLeft: 'auto',
    paddingLeft:40,
    flexDirection: 'row',
  },

});