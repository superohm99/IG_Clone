import { Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import CircleView from './CircleView';
import CommentView from './CommentView';

var max_width = Dimensions.get('screen').width;
var max_height = Dimensions.get('screen').height;

type SwitchChat = {
    open:boolean
    onToggleChat: (open: boolean) => void;
}



const ChatView = (props:SwitchChat) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [draggedValue, setDraggedValue] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '80%', '90%'], []);


    useEffect(() => {
        setModalVisible(props.open)
        console.log(props.open)
        return () => {
          
        };
      }, [props.open]);

  
    const handleCloseModal = () => {
      setModalVisible(false);
      props.onToggleChat(false);
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
    <GestureHandlerRootView style={{flex:1}}>
    <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
            >
            <View  style={{
              width:max_width,
              height:max_height,
              backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

            <BottomSheet index={1} snapPoints={snapPoints}        ref={bottomSheetRef}>
                    
                    <View style={{position:'relative',left:'42%',width:120,height:30}}>

                        <Text>COMMENT</Text>

                    </View>

                    <View style={{borderBottomColor:'black',borderBottomWidth:0.5}}></View>

                    <ScrollView
                    style={{
                      marginTop:10,
                      width:max_width,
                      height:max_height,
                      backgroundColor: 'white'
                    }}
                    >


                        <CommentView></CommentView>

                        
                        <TouchableOpacity onPress={handleCloseModal} style={{flex:1,flexDirection:'row',justifyContent:'center',marginBottom:100}}>
                          <View style={{ marginTop: 10,width:120,height:30,marginBottom:60,backgroundColor:'black',borderWidth:2,borderColor:'black',borderRadius:7}}>
                              <Text style={{color: 'white',textAlign:'center'}}>BACK</Text>
                          </View>
                        </TouchableOpacity>

                    </ScrollView>
          
            </BottomSheet>

                                    
            
            </View>
        </Modal>
        </GestureHandlerRootView>
  )
}

export default ChatView

const styles = StyleSheet.create({})