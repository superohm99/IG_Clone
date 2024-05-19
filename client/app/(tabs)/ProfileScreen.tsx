import { Animated, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {  GestureHandlerRootView,PanGestureHandler } from 'react-native-gesture-handler';


const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [draggedValue, setDraggedValue] = useState(0);
  const translationY = new Animated.Value(0);

  const onPanGestureEventY = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translationY
        }
       
      }
    ],
    {
      useNativeDriver: true,
    }
  ) 

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleGestureEvent = (event:any) => {
    setDraggedValue(event.nativeEvent.translationY);
    console.log(draggedValue)
  };

  const handleGestureEnd = () => {
    if (draggedValue > 100) {
      setModalVisible(false);
    }
    setDraggedValue(0);
  };
  return (
    <GestureHandlerRootView >
      {/* <Modal> */}

      <View>

    <PanGestureHandler
            onGestureEvent={onPanGestureEventY}
            // onEnded={handleGestureEnd}
          >
            <Animated.View style={[{width:100,height:20,backgroundColor:'red',marginTop:200},{
              transform: [
                {translateY:translationY}
              ],
            },]}/>

            {/* <View style={{    width: max_width,
                alignItems: 'center',
                padding: 10,
                backgroundColor: 'white',}}>
              <View style={{   width: 50,
                    height: 5,
                    backgroundColor: 'red',
                    borderRadius: 2.5,}} />
            </View> */}
    </PanGestureHandler>

      </View>
      {/* </Modal> */}
                    
  </GestureHandlerRootView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})