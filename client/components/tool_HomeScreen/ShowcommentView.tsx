import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CircleView from './CircleView'


type Review = {
    img:string
    name:string
    date:string
    comment:string
}

const ShowcommentView = (props:Review) => {
  return (
    <View style={{marginLeft:10,marginTop:10,flexDirection:'row'}}>
        <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={47} height={47} img={props.img}></CircleView>
        
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:700}}>{props.name}</Text>
            <Text style={{marginLeft:10}}>{props.date}</Text>
        </View>
        <Text >{props.comment}</Text>
        <TouchableOpacity>
            <Text style={{fontWeight:300}}>Reply</Text>
        </TouchableOpacity>


            </View> 
    </View>
  )
}

export default ShowcommentView

const styles = StyleSheet.create({})