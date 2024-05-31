import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Alert, Dimensions } from 'react-native'
import CircleView from './CircleView'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { icons } from "../../constants";

var max_width = Dimensions.get('screen').width;

const StoryView = () => {
  const [lastPress, setLastPress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [curlist,setCurlist]= useState<{ id: number; time:string; name:string; profile: string; img: string; }[]>([]);
  var list: { id: number; time:string; name:string;  profile: string; img: string; }[][] = [];


  // const handleSkip = (event:any) => {

  // }

  
  const handleTouch = (event:any) => {
    
    const currentTime = Date.now();
    if (currentTime - lastPress < 1000) {
      return;
    }
    setLastPress(currentTime);
    const { locationX} = event.nativeEvent;

    
    if (locationX < max_width / 2) {
      console.log('Left side pressed')
      var nextIndex = (currentImageIndex - 1) % curlist.length;
      if (nextIndex < 0)
      {
        setCurlist(story_demo);
        nextIndex = 0
      }
      setCurrentImageIndex(nextIndex);
    } else {
      var nextIndex = (currentImageIndex + 1) % curlist.length;
      console.log(currentImageIndex)
      if(currentImageIndex === curlist.length - 1)
        {
          // console.log(currentImageIndex)
          setCurlist(story_demo2);
          nextIndex = 0
        }
      setCurrentImageIndex(nextIndex);
      console.log('Right side pressed')
    }
  };



  const [visible,setVisible] = useState(false);

  const handleModalVisible =  (id:number) => {
    if (id == 1)
      setCurlist(story_demo);
    else
      setCurlist(story_demo2);
    setVisible(!visible)
    if (visible === false)
      setCurrentImageIndex(0);
  }

  useEffect(() => {
      setCurlist(story_demo)
      // list.push(story_demo)
      // list.push(story_demo2)
      // console.log(list)
  }, []);

  var story_demo = [
    { id: 1, time: '50 mn',name:'Lisa',profile: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, time: '30 mn',name:'Lisa',profile: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1606477057209-611910dfb135?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, time: '10 mn',name:'Lisa',profile: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  var story_demo2 = [
    { id: 1, time: '10 mn',name:'brion',profile: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1563891217861-7924b471afb3?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, time: '5 mn',name:'brion',profile: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];


  return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView horizontal={true} style={{backgroundColor:'white',height:80, paddingLeft:10,marginTop:10}}>
          

          <TouchableOpacity onPress={() => handleModalVisible(1)}>
            <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleModalVisible(2)}>
            <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
          </TouchableOpacity>
 

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView margin_fisrt={18} margin_sec={20} border_sec={2} border={3} width={76} height={76} img='https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          { visible === true &&(
          <Modal >
            <View style={{backgroundColor:'black',height:'100%'}}>
                <View style={{
                    height: 5,
                    flexDirection:'row',
                    backgroundColor: 'gray',
                    marginTop:10,
                    borderRadius: 2.5,
                    marginHorizontal: 2,
                    overflow: 'hidden',
                  }}>
                    { curlist.map(({id}) => 
                      <View key={id} style={{height: 5,
                      width: max_width/curlist.length,
                      backgroundColor:(id - 1) === currentImageIndex? 'white':'gray',
                      borderRadius: 2.5,
                      borderRightWidth:4,
                      borderColor:'black',
                      overflow: 'hidden',}}></View>
                    )
                    }
                </View>
              <View style={{flexDirection:'row',paddingHorizontal:10,paddingTop:5,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                  <CircleView margin_fisrt={10} margin_sec={0} border_sec={2} border={3} width={50} height={50} img={curlist[currentImageIndex].profile}></CircleView>
                  <Text style={{color:'white',fontSize:18,fontWeight:600,marginTop:10}}>
                  {curlist[currentImageIndex].name}
                  </Text>
                  <Text style={{color:'white',fontSize:16,fontWeight:400,marginTop:13,marginLeft:5}}>
                  {curlist[currentImageIndex].time}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => handleModalVisible(1)}>  
                  <Image
                      source={icons.cross}
                      resizeMode="contain"
                      style={{ width: 24, height: 24, tintColor: 'white', marginTop:10 }}
                    />
                </TouchableOpacity>
              </View>

              
              <TouchableOpacity style={{width:'100%',height:'100%',marginTop:10,position:'absolute',zIndex:-1}} onPress={handleTouch}>

                <Image style={{width:'100%',height:'100%',marginTop:60,position:'absolute',zIndex:-1}} source={{uri:curlist[currentImageIndex].img}}>
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