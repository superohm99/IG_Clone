import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'
import CircleView from './CircleView'

type SwitchSend = {
    open:boolean
    onToggleSend: (open: boolean) => void;
}

var max_width = Dimensions.get('screen').width;
var max_height = Dimensions.get('screen').height;


const SendView = (props:SwitchSend) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [shareVisible, setShareVisible] = useState(false);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '60%'], []);
    var margin_bottom:number = 100;
    var margin_bottom_inside:number = 50;

    useEffect(() => {
        setModalVisible(props.open)
        console.log(props.open)
        return () => {
          
        };
      }, [props.open]);
    
      useEffect(() => {
        if(shareVisible === true)
          {
            margin_bottom = 0
            margin_bottom_inside = 0
          }
        else
          {
            margin_bottom = 100
            margin_bottom_inside = 50
          }
        console.log(margin_bottom)
      }, [shareVisible])

  
    const handleCloseModal = () => {
      setModalVisible(false);
      setShareVisible(false);
      props.onToggleSend(false);
    }

    const handleToggleSend = () => {
      setShareVisible(!shareVisible);
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

            <BottomSheet index={1} snapPoints={snapPoints}   ref={bottomSheetRef}>

                    <View style={{borderBottomColor:'black',borderBottomWidth:0.5}}></View>

                    <ScrollView
                    style={{
                      marginTop:10,
                      width:max_width,
                      // height:100,
                      height: shareVisible ? max_height - 400 : max_height - 100,
                      marginBottom:0,
                      backgroundColor: 'white'
                    }}
                    >


                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,flexWrap:'wrap'}}>
                            <TouchableOpacity onPress={handleToggleSend}>
                              <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            </TouchableOpacity>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={75} height={75} img={'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></CircleView>
                      
                        </View>
              
                        
                        <TouchableOpacity onPress={handleCloseModal} style={{flex:1,flexDirection:'row',justifyContent:'center',marginBottom:margin_bottom,backgroundColor:'white'}}>
                          <View style={{ marginTop: 10,width:120,height:30,marginBottom:margin_bottom_inside,backgroundColor:'black',borderWidth:2,borderColor:'black',borderRadius:7}}>
                              <Text style={{color: 'white',textAlign:'center'}}>BACK</Text>
                          </View>
                        </TouchableOpacity>



                    </ScrollView>

                    {shareVisible && 
                    (<SafeAreaView style={{backgroundColor:'white',height:200,marginTop:0,borderTopWidth:1,borderBlockColor:'black'}}>

                      {/* <Text>TEST</Text>
                      <Text>TEST</Text>
                      <Text>TEST</Text>
                      <Text>TEST</Text>
                      <Text>TEST</Text>
                      <Text>TEST</Text> */}

                    </SafeAreaView>
                    )}

          
            </BottomSheet>

                                    
            
            </View>
        </Modal>
        </GestureHandlerRootView>
  )
}

export default SendView

const styles = StyleSheet.create({})