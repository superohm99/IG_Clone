import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '@/components/SearchPage/SearchBox'
import SearchContent from '@/components/SearchPage/SearchContent'

const SearchScreen = () => {
  const [image, setImage] = useState<string | null>(null); // Specify the type as string or null

  const getData = (data: string) => { // Explicitly specify the type of 'data' as string
    setImage(data);
  };

  return (
    <View style={styles.content}>
      <ScrollView>
        <SearchBox/>
        <SearchContent data={getData}/>
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  content:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position:'relative'
  },
})