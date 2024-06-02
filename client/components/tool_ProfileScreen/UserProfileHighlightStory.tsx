import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const UserProfileHighlightStory = () => {
  let highlight_story = []

  let circuls = [];
  let numberofcircels = 7;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.container}>
            <View style={styles.new_circle}>
              <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
            </View>
              <Text>New</Text>
          </View>
        ) : (
          <View style={styles.highlight_circle}></View>
        )}
      </View>,
    );
  }


  return (
    <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
          }}>
          {circuls}
    </ScrollView>
  )
}

export default UserProfileHighlightStory

const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    alignItems: 'center'
  },
  new_circle:{
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight_circle:{
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
})