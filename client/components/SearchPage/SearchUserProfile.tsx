import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchUserProfile = ({userId}:any,{username}:any) => {
    const { id } = useLocalSearchParams()
    

    return (
        <>
        <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.topHeaderWrapper}>
            <View style={styles.headerTopLeftWrapper}>
              <TouchableOpacity onPress={() => router.push('/SearchUserScreen')}>
                <Icon size={20} name="arrow-left" />
              </TouchableOpacity>
              <View style={styles.headerText}>UserName</View>
            </View>
          </View>
        </View>

        <View>
        <Text>SearchUserProfile</Text>
        <Text>{userId}</Text>
        <Text>{username}</Text>
        </View>
        </View>
        </>
    )
}

export default SearchUserProfile

const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    headerWrapper: {
      display: 'flex',
    },
    topHeaderWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    headerTopLeftWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText:{
      fontSize: 20,
      paddingLeft: 10,
    },
    safe_container:{
      flex: 1,
    },
    scrollView:{
      marginHorizontal: 1,
    },
  });