import React from 'react'
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'
import UserPostContent from '@/components/tool_ProfileScreen/UserPostView'

const UserPostScreen = () => {
    const { id, username } = useLocalSearchParams()
    console.log('id:',id)
    console.log('username:',username)    
    const handleBack = () => {
        router.navigate("/ProfileScreen");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topnav}>
                <Pressable onPress={()=>handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                    <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
                </Pressable>
                <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode="tail">Posts</Text>
            </View>
            <UserPostContent id={id} user={username}/>
        </SafeAreaView>
    )
}

export default UserPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topnav: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        gap: 28,
    },
    leftnav: {
        marginLeft: 'auto',
    },
    scrollView: {
        backgroundColor: 'white',
      },


})