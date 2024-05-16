import React,{ useState } from 'react'
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";


const DATA = [
  {id: 'jhgjfhd787', Title: 'Rose', subTitle: 'Lorem Ipum'},
  {id: 'fdgdfgdfgf', Title: 'Janaki', subTitle: 'Lorem Ipum'},
  {id: 'cvbfddffff', Title: 'Renuka', subTitle: 'Lorem Ipum'},
];

const SearchUser = () => {

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
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.topHeaderWrapper}>
          <View style={styles.headerTopLeftWrapper}>
            <TouchableOpacity onPress={() => router.push('/SearchScreen')}>
              <Icon size={25} name="arrow-left" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>
          <View>
            <Icon size={25} name="times" />
          </View>
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchUser

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
    // color: colors.gray,
  },
});