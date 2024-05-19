import { Dimensions, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import CircleView from './CircleView';
import CommentView from './CommentView';
import { useMediaQuery } from 'react-responsive';

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
  const snapPoints = useMemo(() => ['25%', '60%', '70%'], []);


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

    const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1020px)",
    });
  
    var margin_bottom:number = 50;
    var margin_bottom_inside:number = 10
    var left_comment:any = '48%' 
    if (isTabletOrMobileDevice)
      {
        margin_bottom = 100
        margin_bottom_inside = 60
        left_comment='42%'
      }
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

            <BottomSheet index={1} snapPoints={snapPoints}    ref={bottomSheetRef}>
                    
                    <View style={{position:'relative',left:left_comment,width:120,height:30}}>

                        <Text style={{fontWeight:600}}>COMMENT</Text>

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
              
                        
                        <TouchableOpacity onPress={handleCloseModal} style={{flex:1,flexDirection:'row',justifyContent:'center',marginBottom:margin_bottom}}>
                          <View style={{ marginTop: 10,width:120,height:30,marginBottom:margin_bottom_inside,backgroundColor:'black',borderWidth:2,borderColor:'black',borderRadius:7}}>
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