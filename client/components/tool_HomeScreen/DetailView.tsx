import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'
import CircleView from './CircleView'

const DetailView = () => {
  return (
    <View style={{width:350}}>
       <Text style={{fontSize:16,fontWeight:600}}>Like 1,000</Text>
       <Text style={{fontSize:16,fontWeight:600}}>Jinny</Text>
       <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laboriosam enim unde molestias consectetur vero commodi sunt est incidunt repellendus, a porro ducimus voluptate odio ullam veniam consequatur numquam atque!</Text>
       
    </View>
  )
}

export default DetailView

const styles = StyleSheet.create({})