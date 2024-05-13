import { ScrollView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var max_width = Dimensions.get('window').width;


const PostView = () => {
  return (
    <ScrollView style={styles.scrollView}>

        <View style={{width:max_width,backgroundColor:'blue',marginBottom:10,marginTop:10}}>
          <View style={{width:max_width,height:55,backgroundColor:'white',flex:1,flexDirection:'row'}}>
          
         
            <Image
            style={{width:37,height: 37,borderRadius: 50,marginTop:4,marginLeft:10}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>

          

            <View style={{flex:1,flexDirection:'column',marginLeft:10,marginTop:5}}>
              <Text style={{fontWeight:800,fontSize:15,marginBottom:0}}>Ohm</Text>
              <Text style={{marginTop:0,fontSize:13}}>Thanasak</Text>
            </View>
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, safafafafaf
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            deserunt mollit anim id est laborum.
            {/* {"\n"} */}
          </Text>

        </View>

        <View style={{width:max_width,backgroundColor:'blue',marginBottom:10,marginTop:10}}>
          <View style={{width:max_width,height:50,backgroundColor:'white',flex:1,flexDirection:'row'}}>
          
         
            <Image
            style={{width:37,height: 37,borderRadius: 50,marginTop:4,marginLeft:10}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>

          

          <View style={{flex:1,flexDirection:'column',marginLeft:10,marginTop:5}}>
            <Text style={{fontWeight:800,fontSize:15,marginBottom:0}}>Ohm</Text>
            <Text style={{marginTop:0,fontSize:13}}>Thanasak</Text>
          </View>
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, safafafafaf
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            deserunt mollit anim id est laborum.
            {/* {"\n"} */}
          </Text>

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