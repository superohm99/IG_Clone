import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import CircleView from './CircleView'
import React, { useState } from 'react'
import { router } from 'expo-router'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const StoryView = () => {

  const [visible,setVisible] = useState(false);

  const handleModalVisible =  () => {
    setVisible(!visible)
  }

  return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView horizontal={true} style={{backgroundColor:'white',height:80, paddingLeft:10,marginTop:10}}>
          

          <TouchableOpacity onPress={handleModalVisible}>
            <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
          </TouchableOpacity>
 
          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img=''></CircleView>

          { visible === true &&(
          <Modal >
            <View style={{backgroundColor:'black',height:'100%'}}>
              <View style={{flexDirection:'row',paddingHorizontal:10,paddingTop:10,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                  <CircleView margin_fisrt={10} margin_sec={0} border_sec={2} border={3} width={50} height={50} img='https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
                  <Text style={{color:'white',fontSize:18,fontWeight:600,marginTop:10}}>
                    Jackson
                  </Text>
                  <Text style={{color:'white',fontSize:16,fontWeight:400,marginTop:13,marginLeft:5}}>
                    50 mn
                  </Text>
                </View>
                <TouchableOpacity onPress={handleModalVisible} style={{backgroundColor:'white',width:30,height:30,marginTop:10}}></TouchableOpacity>
              </View>

              <Image style={{width:'100%',height:'100%',marginTop:60,position:'absolute',zIndex:-1}} source={{uri:'https://images.unsplash.com/photo-1606477057209-611910dfb135?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}>

              </Image>

            </View>
          </Modal>
          )}
              
      </ScrollView>
    </View>
  )
}

export default StoryView

const styles = StyleSheet.create({})