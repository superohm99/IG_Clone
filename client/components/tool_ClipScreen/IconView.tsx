import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from "../../constants";
import ChatView from '../tool_HomeScreen/ChatView';


const IconView = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = (open:any) => {
    setModalVisible(open);
    console.log(modalVisible)
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={icons.heart}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>1,111</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={icons.chat}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>220</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={icons.send}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>50</Text>
        </View>
        <Image
          source={icons.more}
          resizeMode="contain"
          style={[styles.image, {alignSelf: 'center'}]}
        />
      </View>

      <ChatView open={modalVisible} onToggleChat={handleCloseModal}></ChatView>
    </View>
  )
}

export default IconView

const styles = StyleSheet.create({
  // position right bottom
  container: {
    position:'absolute',
    zIndex:1,
    bottom: 10,
    right: 10
  },
  icon: {
    flexDirection: 'column',
    gap: 20
  },
  image: {
    width: 28, 
    height: 28, 
    tintColor: 'white'
  },
  text: {
    color:'white',
    fontSize:15,
    marginTop: 10
  }
})