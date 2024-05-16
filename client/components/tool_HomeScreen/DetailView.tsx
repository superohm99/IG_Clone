import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'
import CircleView from './CircleView'

const DetailView = () => {
  return (
    <View style={{width:350}}>
       <Text style={{fontSize:16,fontWeight:600}}>Like 1,000</Text>
       <Text style={{fontSize:16,fontWeight:600}}>Jinny</Text>
       <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laboriosam enim unde molestias consectetur vero commodi sunt est incidunt repellendus, a porro ducimus voluptate odio ullam veniam consequatur numquam atque!</Text>
       
       <View style={{flexDirection:'row'}}>
            <Image
                    style={{width:37,height: 37,borderRadius: 50,marginTop:7,marginLeft:0}}
                    source={{
                    uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}/>

            <TextInput
                style={{ height: 40,
                    width: 300,
                    marginTop:7,
                    borderRadius:30,
                    marginLeft:10,
                    borderWidth: 0.3,
                    padding: 10,
                    paddingLeft:'auto'}}
                placeholder="Add Your Comment"
                keyboardType="numeric"
            />
       </View>
    </View>
  )
}

export default DetailView

const styles = StyleSheet.create({})