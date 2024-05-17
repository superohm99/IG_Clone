import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

type ViewProps = {
  img: string;
  width: number;
  height: number;
  border: number;
  border_sec: number;
  margin_fisrt: number;
  margin_sec:number;
};

// 76

const CircleView = (props:ViewProps) => {
  return (
    <View style={{
      width: props.width,
      height: props.height,
      borderWidth: props.border,
      borderColor: '#7FFF00', 
      marginRight: props.margin_fisrt,
      borderRadius: 50, 
    }}>
        <Image
                style={{ width: props.width - 6,
                  height: props.height - 6,
                  borderRadius: 50,
                  marginRight: props.margin_sec,
                  backgroundColor: 'white',
                  borderWidth: props.border_sec,
                  borderColor: 'white' }}
                source={{
                  uri: props.img,
                }}/>

    </View>
  )
}

export default CircleView

// const styles = StyleSheet.create({
//     circle: {
//       width: props.weight - 6,
//       height: props.height - 6,
//       borderRadius: 50,
//       marginRight: 20,
//       backgroundColor: 'white',
//       borderWidth: 2,
//       borderColor: 'white' 
//     },
//   });