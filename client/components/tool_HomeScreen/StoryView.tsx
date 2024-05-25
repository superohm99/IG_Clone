import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Alert, Dimensions } from 'react-native'
import CircleView from './CircleView'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { icons } from "../../constants";

var max_width = Dimensions.get('screen').width;

const StoryView = () => {
  const [lastPress, setLastPress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const handleTouch = (event:any) => {
    
    const currentTime = Date.now();
    if (currentTime - lastPress < 1000) {
      return;
    }
    setLastPress(currentTime);
    const { locationX} = event.nativeEvent;

    
    if (locationX < max_width / 2) {
      console.log('Left side pressed')
      var nextIndex = (currentImageIndex - 1) % story_demo.length;
      if (nextIndex < 0)
        nextIndex = 0
      setCurrentImageIndex(nextIndex);
    } else {
      var nextIndex = (currentImageIndex + 1) % story_demo.length;
      setCurrentImageIndex(nextIndex);
      console.log('Right side pressed')
    }
  };



  const [visible,setVisible] = useState(false);

  const handleModalVisible =  () => {
    setVisible(!visible)
  }

  const story_demo = [
    { id: 1, img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, img: 'https://images.unsplash.com/photo-1606477057209-611910dfb135?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];


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
                <TouchableOpacity onPress={handleModalVisible}>  
                  <Image
                      source={icons.cross}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'white', marginTop:10 }}
                    />
                </TouchableOpacity>
              </View>

              
              <TouchableOpacity style={{width:'100%',height:'100%',marginTop:0,position:'absolute',zIndex:-1}} onPress={handleTouch}>

                <Image style={{width:'100%',height:'100%',marginTop:60,position:'absolute',zIndex:-1}} source={{uri:story_demo[currentImageIndex].img}}>
                </Image>
                
              </TouchableOpacity>



            </View>
          </Modal>
          )}
              
      </ScrollView>
    </View>
  )
}

export default StoryView

const styles = StyleSheet.create({})