import { ScrollView, StatusBar, StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Dimensions } from "react-native";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../constants";
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import DetailView from '../tool_HomeScreen/DetailView';
import ChatView from '../tool_HomeScreen/ChatView';
import SendView from '../tool_HomeScreen/SendView';

var max_width = Dimensions.get('screen').width;
var max_height = Dimensions.get('screen').height;

interface getPropItem{
  id:string; //Post id
  user:string;
}

interface PostDetailState{
  username: string;
  user_profile: string;
  image: string;
  title: string; //caption
  like: number;
  commend: [];
  createAt: string; //Date
  isArchive: boolean;
}

const UserPostContent = ({id, user}:getPropItem) => {

  const [postDetail, setPosDetail] = useState<PostDetailState>({
    username: user,
    user_profile: "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    image: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Hello Instargram",
    like: 0,
    commend: [],
    createAt: "3/6/24",
    isArchive: true,
  })

  const [modalVisible, setModalVisible] = useState(false);
  const [sendVisible, setSendVisible] = useState(false);
  const [likeVisible, setLikeVisible] = useState(false);
  
  const handleSendPress = () => {
    setSendVisible(true)
  }

  const handleImagePress = () => {
    setModalVisible(true);
  };

  //Update like value
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
    query: "(max-device-width: 1224px)",
  });

  var resize_img:any = 'center';
  if (isTabletOrMobileDevice)
    resize_img = 'cover';

  const handleBack = () => {
    router.navigate("/ProfileScreen");
  }


  return (

    <SafeAreaView style={styles.main_container}>
    <ScrollView style={styles.scrollView}>
      
        <View style={{width:max_width,backgroundColor:'white',marginBottom:10,marginTop:10}}>

          <View style={{width:max_width,height:55,backgroundColor:'white',flex:1,flexDirection:'row',paddingRight:0}}>
          
            
            <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={handleBack}>

            <Image
            style={{width:37,height: 37,borderRadius: 50,marginTop:4,marginLeft:10}}
            source={postDetail.user_profile}/>

          
            <View style={{flex:1,flexDirection:'column',marginLeft:10,marginTop:5}}>
              <Text style={{fontWeight:800,fontSize:15,marginBottom:0}}>{postDetail.username}</Text>
              <Text style={{marginTop:0,fontSize:13}}>Billy Jinny</Text>
            </View>

            </TouchableOpacity>


            <Image
                source={icons.more}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: 'black', marginRight:20, marginTop:10}}
                />

          </View>
          

          <View style={{ width: max_width,height: 500,aspectRatio: 1 * 1.9,}}>
            {/* PostImage */}
            <Image
              style={{width:max_width,height: 500,resizeMode: resize_img}}
              source={postDetail.image}>
            </Image>
            
          </View>

          <View style={{ flexDirection: 'row', gap: 2,paddingTop:10,paddingLeft:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection:'row',marginBottom:10}}>

              <TouchableOpacity onPress={handleLikePress}>
                { likeVisible ? (
                  <AntDesign name="heart" size={24} color="red" style={{width: 24, height: 24, marginRight:10, }} />
                ):(
                  <FontAwesome6 name="heart" size={24} color="black" style={{width: 24, height: 24, tintColor: 'black' , marginRight:10, }}/>
                )}
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
              <View style={{width:350}}>
                <Text style={{fontSize:16,fontWeight:600}}>{postDetail.like} likes</Text>
                <Text style={{fontSize:16,fontWeight:600}}>{postDetail.username}</Text>
                <Text>{postDetail.title}</Text>
              </View>

              <View style={{width:350}}>
                <Text>{postDetail.createAt}</Text>
              </View>
              
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


    </SafeAreaView>

  )
}

export default UserPostContent


const styles = StyleSheet.create({
    main_container:{
        flex:1,
    },
    container: {
      display: 'flex',
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 2,
    },
    text: {
      fontSize: 42,
    },
    
  });