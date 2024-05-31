import { ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { PanGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../constants";
import DetailView from './DetailView';
import ChatView from './ChatView';
import SendView from './SendView';



var max_width = Dimensions.get('screen').width;
var max_height = Dimensions.get('screen').height;


const PostView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sendVisible, setSendVisible] = useState(false);
  const [likeVisible, setLikeVisible] = useState(false);
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

  const handleSendPress = () => {
    setSendVisible(true)
  }

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleLikePress = () => {
    setLikeVisible(!likeVisible);
  };

  const handleCloseModal = (open:any) => {
    setModalVisible(open);
    console.log(modalVisible)
  };

  const handleCloseSendModal = (open:any) => {
    setSendVisible(open);
    console.log(sendVisible)
  };


  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1020px)",
  });

  var resize_img:any = 'center';
  if (isTabletOrMobileDevice)
    resize_img = 'cover';

  return (
    <ScrollView style={styles.scrollView}>
      

        <View style={{width:max_width,backgroundColor:'white',marginBottom:10,marginTop:10}}>

          <View style={{width:max_width,height:55,backgroundColor:'white',flex:1,flexDirection:'row',paddingRight:0}}>
          
         
            <Image
            style={{width:37,height: 37,borderRadius: 50,marginTop:4,marginLeft:10}}
            source={{
              uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}/>

          

            <View style={{flex:1,flexDirection:'column',marginLeft:10,marginTop:5}}>
              <Text style={{fontWeight:800,fontSize:15,marginBottom:0}}>Jinny</Text>
              <Text style={{marginTop:0,fontSize:13}}>Billy Jinny</Text>
            </View>

            <Image
                source={icons.more}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: 'black', marginRight:20, marginTop:10}}
              />

          </View>
          

          <View style={{ width: max_width,height: 500,aspectRatio: 1 * 1.9,}}>

            <Image
              style={{width:max_width,height: 500,resizeMode: resize_img}}
              source={{
              uri: 'https://images.unsplash.com/photo-1603217041431-9a99375beab0?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}>
            </Image>
            
          </View>

          <View style={{ flexDirection: 'row', gap: 2,paddingTop:10,paddingLeft:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection:'row',marginBottom:10}}>

                <TouchableOpacity onPress={handleLikePress}>
     
                <View style={{ width: 22, height: 22, backgroundColor:likeVisible? 'red':'white'
                 ,borderTopLeftRadius:90,borderTopRightRadius:90,borderBottomRightRadius:90,borderBottomLeftRadius:90, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                    <Image
                      source={icons.heart}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black', marginTop:5 }}
                    />
                </View>

        
                </TouchableOpacity>

                <TouchableOpacity onPress={handleImagePress}>

                  <Image
                      source={icons.chat}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
                      />

                </TouchableOpacity>




                  
                <TouchableOpacity onPress={handleSendPress}>

                  <Image
                      source={icons.send}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
                    />

                </TouchableOpacity>


              


              </View>

              <DetailView></DetailView>
            </View>

              <TouchableOpacity>
                <Image
                    source={icons.save}
                    resizeMode="contain"
                    style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
                  />
              </TouchableOpacity>


          </View>
    

        </View>

        <ChatView open={modalVisible} onToggleChat={handleCloseModal}></ChatView>
        <SendView open={sendVisible} onToggleSend={handleCloseSendModal}></SendView>



        <View style={{width:max_width,backgroundColor:'white',marginBottom:10,marginTop:10}}>
          <View style={{width:max_width,height:55,backgroundColor:'white',flex:1,flexDirection:'row'}}>
          
         
            <Image
            style={{width:37,height: 37,borderRadius: 50,marginTop:4,marginLeft:10}}
            source={{
              uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}/>

          

            <View style={{flex:1,flexDirection:'column',marginLeft:10,marginTop:5}}>
              <Text style={{fontWeight:800,fontSize:15,marginBottom:0}}>Carnel</Text>
              <Text style={{marginTop:0,fontSize:13}}>Brotan Carnel</Text>
            </View>

            <Image
                source={icons.more}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: 'black', marginRight:20, marginTop:10}}
              />

      
          </View>

       
          

          <View style={{ width: max_width,height: 500,aspectRatio: 1 * 1.9,}}>

            <Image
              style={{width:max_width,height: 500,resizeMode: resize_img}}
              source={{
              uri: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}>
            </Image>
            
          </View>

          <View style={{ flexDirection: 'row', gap: 2,paddingTop:10,paddingLeft:10,justifyContent:'space-between'}}>
          <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection:'row',marginBottom:10}}>

                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{ width: 24, height: 24, tintColor: 'black' , marginRight:10}}
                />

                <Image
                    source={icons.chat}
                    resizeMode="contain"
                    style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
                  />

                  
                <Image
                    source={icons.send}
                    resizeMode="contain"
                    style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
                  />

              </View>

              <DetailView></DetailView>
            </View>

            <Image
                source={icons.save}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: 'black', marginRight:10 }}
              />
          </View>

          <View>

          </View>

        </View>



        
      </ScrollView>
  )
}

export default PostView


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 2,
    },
    text: {
      fontSize: 42,
    },
  });