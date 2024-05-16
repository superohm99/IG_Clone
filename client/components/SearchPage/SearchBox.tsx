// import React from 'react';
// import {View, TextInput, TouchableOpacity} from 'react-native';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import SearchContent from './SearchContent';

// const SearchBox = () => {
    
//     return (
//             <View
//             style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: '100%',
//                 paddingVertical: 10,
//                 position: 'relative',
//             }}>
//             <Ionic
//                 name="search"
//                 style={{
//                 fontSize: 18,
//                 opacity: 0.7,
//                 position: 'absolute',
//                 zIndex: 1,
//                 left: 25,
//                 }}
//             />
//             <TextInput
//                 placeholder="Search"
//                 placeholderTextColor="#909090"
//                 style={{
//                 width: '94%',
//                 backgroundColor: '#EBEBEB',
//                 borderRadius: 10,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 15,
//                 padding: 4,
//                 paddingLeft: 40,
//                 }}
//             />
//             </View>
//     );
// };

// export default SearchBox;

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, router } from "expo-router";


const SearchBox = () => {

    const [searchText, setSearchText] = useState('');

    const textChanged = (text: string) => {
    setSearchText(text);
    };

    return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => router.push('/SearchUserScreen')}>
      <View style={styles.contentContainer}>
        <View style={styles.iconWrapper}>
          <Icon
            name="search"
            style={styles.icon}
            size={22}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={'Search'}
            onChangeText={text => textChanged(text)}
            style={styles.inputBox}
            value={searchText}
          />
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconWrapper: {
    display: 'flex',
    flex: 1,
  },
  inputWrapper: {
    display: 'flex',
    flex: 7,
  },
  inputBox: {
    height: 40,
  },
  icon: {
    padding: 5,
  },
});