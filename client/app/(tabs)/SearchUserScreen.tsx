// import { View, Text } from 'react-native'
// import React from 'react'

// const SearchUserScreen = () => {
//   return (
//     <View>
//       <Text>SearchUserScreen</Text>
//     </View>
//   )
// }

// export default SearchUserScreen
import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,FlatList,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchUser from '@/components/SearchPage/SearchUser';

const SearchUserScreen = () =>{
  return (
    <View style ={styles.container}>
      {/* <SearchUser/> */}
    </View>
  )
}
export default SearchUserScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },

})