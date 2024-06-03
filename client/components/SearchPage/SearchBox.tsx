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