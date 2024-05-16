import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";


const SearchPostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.topHeaderWrapper}>
          <View style={styles.headerTopLeftWrapper}>
            <TouchableOpacity onPress={() => router.push('/SearchScreen')}>
              <Icon size={20} name="arrow-left" />
            </TouchableOpacity>
            <View style={styles.subTitle}>Explore</View>
          </View>
        </View>
      </View>
     
    </View>
  )
}

export default SearchPostScreen


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
    subHeaderWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // borderBottomColor: colors.gray1,
      borderBottomWidth: 1,
    },
    selectedCategoryItem: {
      display: 'flex',
      flex: 1,
      padding: 5,
      alignItems: 'center',
      // borderBottomColor: colors.black,
      borderBottomWidth: 1,
    },
    categoryItem: {
      display: 'flex',
      flex: 1,
      padding: 5,
      alignItems: 'center',
    },
    title: {
      fontWeight: '700',
      // color: colors.gray,
    },
    titleSelected: {
      fontWeight: '700',
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
    },
    image: {
      width: 75,
      height: 75,
      borderRadius: 50,
    },
    itemRightWrapper: {
      marginLeft: 10,
    },
    subTitle: {
      paddingLeft: 30,
      fontSize: 20,
    },
  });