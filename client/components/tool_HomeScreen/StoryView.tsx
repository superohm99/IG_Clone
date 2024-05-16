import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CircleView from './CircleView'
import React from 'react'

const StoryView = () => {
  return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView horizontal={true} style={{backgroundColor:'white',height:80, paddingLeft:10,marginTop:10}}>
          
          <CircleView img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView img='https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView img='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView img='https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView img='https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>

          <CircleView img=''></CircleView>
              
      </ScrollView>
    </View>
  )
}

export default StoryView

const styles = StyleSheet.create({})