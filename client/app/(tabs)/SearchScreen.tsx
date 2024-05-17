// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import SearchBox from '@/components/SearchPage/SearchBox'
// import SearchContent from '@/components/SearchPage/SearchContent'
// import SearchUser from '@/components/SearchPage/SearchUser'

// const SearchScreen = () => {
  
//   const [image, setImage] = useState<string | null>(null); // Specify the type as string or null

//   const getData = (data: string) => { // Explicitly specify the type of 'data' as string
//     setImage(data);
//   };

//   return (
//     <View style={styles.content}>
//       <ScrollView>
//         <SearchBox />
//         <SearchContent data={getData} />
//       </ScrollView>
//     </View>
//   )
// }

// export default SearchScreen

// const styles = StyleSheet.create({
//   content:{
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'white',
//     position:'relative'
//   },
// })
import React from 'react';
import {Text,View,StyleSheet,ScrollView,Dimensions,Image, Button,} from 'react-native';
import SearchBox from '@/components/SearchPage/SearchBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchContent from '@/components/SearchPage/SearchContent';

const width = Dimensions.get('window').width;

const tags = [
  {icon: 'shopping-basket', tagName: 'Shop'},
  {icon: 'heart', tagName: 'Well-beight'},
  {icon: '', tagName: 'Travel'},
];

const SearchHomeScreen = () => {

 
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <SearchBox />
        </View>
        <ScrollView horizontal={true} style={styles.tagWrapper} />
      </View>
      <ScrollView>
        <View>
          <View>
            <SearchContent />
            {/* <Image
              style={styles.galleryImage}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }}
            />
            <Image
              style={styles.galleryImage}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }}
            />
            <Image
              style={styles.galleryImage}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }}
            />
          </View>
          <View style={styles.imagesWrapper}>
            <Image
              style={styles.galleryImage}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }}
            />
            <Image
              style={styles.galleryImage}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              }}
            /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchHomeScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headerWrapper: {
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qrCode: {
    padding: 10,
  },
  tagWrapper: {
    padding: 10,
  },
  videoContainer: {
    height: width,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
  },
  imagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  galleryImage: {
    display: 'flex',
    flex: 1,
    height: 150,
    margin: 1,
  },
});