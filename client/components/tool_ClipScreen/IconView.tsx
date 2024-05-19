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
    <View style={{position:'absolute',left:'85%',top:'2%',zIndex:1}}>
        <Image
            source={icons.camera}
            resizeMode="contain"
            style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:15,marginBottom:350}}
              />
        <Image
            source={icons.heart}
            resizeMode="contain"
            style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:15}}
            />
        <Text style={{color:'black',fontSize:15,marginTop:10}}>1,111</Text>
        <TouchableOpacity onPress={handleImagePress}>

          <Image
          source={icons.chat}
          resizeMode="contain"
          style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
          />

        </TouchableOpacity>
        <Text style={{color:'black',fontSize:15,marginTop:10}}>220</Text>
        <Image
        source={icons.send}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />
        <Text style={{color:'black',fontSize:15,marginTop:10}}>50</Text>      
        <Image
        source={icons.more}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: 'black', marginRight:20, marginTop:35}}
        />

        <ChatView open={modalVisible} onToggleChat={handleCloseModal}></ChatView>
    </View>
  )
}

export default IconView

const styles = StyleSheet.create({})