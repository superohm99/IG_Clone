import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

type ViewProps = {
  img: string;
};

const CircleView = (props:ViewProps) => {
  return (
    <View style={{
      width: 76,
      height: 76,
      borderWidth: 3,
      borderColor: 'green', 
      marginRight: 18,
      borderRadius: 50, 
    }}>
    {/* <View style={styles.circle}> */}
    <Image
            style={styles.circle}
            source={{
              uri: props.img,
            }}/>

    {/* </View> */}
    </View>
  )
}

export default CircleView

const styles = StyleSheet.create({
    circle: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginRight: 20,
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: 'white' 
    },
  });