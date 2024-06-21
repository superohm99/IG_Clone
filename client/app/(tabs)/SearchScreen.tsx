import React, {useEffect, useState} from 'react';
import {Text,View,StyleSheet,ScrollView,Dimensions,Image, Button,} from 'react-native';
import SearchBox from '@/components/SearchPage/SearchBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchContent from '@/components/SearchPage/SearchContent';
import { useLocalSearchParams, useNavigation, useFocusEffect} from 'expo-router';
import SearchUserProfile from '@/components/SearchPage/SearchUserProfile';


const width = Dimensions.get('window').width;

const SearchHomeScreen = () => {
  const { id, username } = useLocalSearchParams();
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      { id ? (
        <SearchUserProfile userId={id} />
      ):(
        <>
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
            {/* {id ? <SearchUserProfile userId={id} /> : <SearchContent />}  */}
          </View>
        </View>
      </ScrollView>
        </>
      )}
      
    </View>
  );
}

export default SearchHomeScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
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