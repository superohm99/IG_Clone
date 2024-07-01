import React from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchUsers from '@/components/SearchPage/SearchUsers';
import { SafeAreaView } from "react-native-safe-area-context";


const SearchUserScreen = () =>{
  return (
    <SafeAreaView style={styles.safe_area}>
    <View style ={styles.container}>
      <SearchUsers/>
    </View>
    </SafeAreaView>
  )
}
export default SearchUserScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  safe_area:{
    flex: 1,
    
  }

})