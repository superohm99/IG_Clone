import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

const UserProfileDetailView = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.profileUsername}>
                    Teeruth
                </Text>
                <Feather
                name="chevron-down"
                style={{
                    fontSize: 20,
                    color: 'black',
                    paddingHorizontal: 5,
                    opacity: 0.5,
                }}
                />
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
        <View style={styles.profile_container}>
            <View style={styles.profile_detail_container}>
            <Image
                source="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
                style={{
                resizeMode: 'cover',
                width: 80,
                height: 80,
                borderRadius: 100,
                }}
            />
            <Text
                style={{
                paddingVertical: 5,
                fontWeight: 'bold',
                }}>
                Hello
            </Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Post</Text>
            <Text>Posts</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>follower</Text>
            <Text>Followers</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>K</Text>
            <Text>Following</Text>
            </View>
        </View>
    </View>
  )
}

export default UserProfileDetailView

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileUsername:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    profile_container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    profile_detail_container:{
        alignItems: 'center',
    }
})