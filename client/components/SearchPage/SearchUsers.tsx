import React,{ useState } from 'react'
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";


const DATA = [
  {id: 'jhgjfhd787', Title: 'Rose', subTitle: 'Lorem Ipum'},
  {id: 'fdgdfgdfgf', Title: 'Janaki', subTitle: 'Lorem Ipum'},
  {id: 'cvbfddffff', Title: 'Renuka', subTitle: 'Lorem Ipum'},
];

const SearchUsers = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png' }}
      />
      <View style={styles.itemRightWrapper}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe_area}>
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.topHeaderWrapper}>
          <View style={styles.headerTopLeftWrapper}>
            <TouchableOpacity onPress={() => router.push('/SearchScreen')}>
              <Icon size={25} name="arrow-left" />
            </TouchableOpacity>
            <View style={styles.search_box}>
                <Icon name="search" size={15}/>
                <TextInput
                placeholder="Search"
                style={styles.search_content}
                autoCapitalize='none'
                autoCorrect={false}
                />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content_middle}>
      <Text style={{fontSize:18, fontWeight: 'bold'}}>
        Recent</Text>
      <Text style={{fontSize:16, color:'#00b7eb',fontWeight: 'bold'}}>
        See all</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default SearchUsers

const styles = StyleSheet.create({
    safe_area:{
        flex: 1,
      },
    container: {
        display: 'flex',
    },
    headerWrapper: {
        display: 'flex',
        paddingBottom: 15
    },
    topHeaderWrapper: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // padding: 10,
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
        // color: colors.gray,
    },
    search_content:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
    },
    search_box:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingVertical: 2,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        paddingLeft: 10
    },
    content_middle:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 12,
        borderTopColor: 'grey',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
});