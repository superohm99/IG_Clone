import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Icont from '../../constants/icons'
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
    const [shareVisible, setShareVisible] = useState([]);
    const [countShare, setCountShare] = useState(0);
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
    
  
  
    const handleCloseModal = () => {
      setModalVisible(false);
      setShareVisible([]);
      setCountShare(0);
      props.onToggleSend(false);
    }

    const handleToggleSend = (id:any) => {
      setShareVisible((prevSelectedIds:any) => {
        if (prevSelectedIds.includes(id)) {
          setCountShare(countShare - 1);
          return prevSelectedIds.filter((shareVisible:any)=> shareVisible !== id);
        } else {
          setCountShare(countShare + 1);
          return [...prevSelectedIds, id];
        }
      });
    }


    // test process
    const circleViews = [
      { id: 1, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 2, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 3, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 4, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 5, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];

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
                              {circleViews.map(({ id, img }) => (
                                <TouchableOpacity key={id} onPress={() => handleToggleSend(id)}>
                                  <View>
                                    <CircleView  margin_fisrt={0} margin_sec={0} border_sec={0} border={0} img={img} width={75} height={75} />
                                    {shareVisible.includes(id) && (
                                      <View style={{width:20,height:20,borderRadius:50,backgroundColor:'#1E90FF',position:'absolute',left:40,top:50}} />
                                    )}
                                  </View>
                                </TouchableOpacity>
                              ))}

                        </View>
              
                        
                        <TouchableOpacity onPress={handleCloseModal} style={{flex:1,flexDirection:'row',justifyContent:'center',marginBottom:margin_bottom,backgroundColor:'white'}}>
                          <View style={{ marginTop: 10,width:120,height:30,marginBottom:margin_bottom_inside,backgroundColor:'black',borderWidth:2,borderColor:'black',borderRadius:7}}>
                              <Text style={{color: 'white',textAlign:'center'}}>BACK</Text>
                          </View>
                        </TouchableOpacity>



                    </ScrollView>

                    {shareVisible.length !== 0 && 
                    (<SafeAreaView style={{backgroundColor:'white',height:200,marginTop:0,borderTopWidth:0.5,borderBlockColor:'black',paddingLeft:10,paddingTop:5}}>

                      
                      <TouchableOpacity>
                        {/* <Image
                            source={Icont.send}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: 'black', marginRight:10, marginTop:15 }}
                          /> */}
                          <View style={{marginTop:7,position:'absolute',left:37,borderRadius:10,width:max_width - 100,height:40,backgroundColor:'#1E90FF'}}>
                            {/* <Text style={{color:'white',textAlign:'center'}}>{countShare}</Text> */}
                            <Text style={{marginLeft:115,marginTop:7,fontSize:17,fontWeight:600,color:'white'}}> CONFIRM </Text>
                          </View>
                      </TouchableOpacity>
                 

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