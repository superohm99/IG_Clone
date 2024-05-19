import { Modal, StyleSheet,  KeyboardAvoidingView,Platform,Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CircleView from './CircleView'
import ShowcommentView from './ShowcommentView'

const CommentView = () => {
  

  return (
    <KeyboardAvoidingView
    behavior={"padding"}
    // // style={{ flex: 1 }}
    // keyboardVerticalOffset={100}
    >
      <View>

        <ShowcommentView name='Janie' date='1hr' comment='Its great' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Starjoon' date='5hr' comment='Its wow' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Toriko' date='50mn' comment='omg' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Superman' date='16sec' comment='what the ...' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Batman' date='1sec' comment='its crazy' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Janie' date='1hr' comment='Its great' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Starjoon' date='5hr' comment='Its wow' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        <ShowcommentView name='Toriko' date='50mn' comment='omg' img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></ShowcommentView>
        



            <View style={{flexDirection:'row',marginLeft:10,marginTop:10,marginBottom:10}}>
                <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={47} height={47} img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
                
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
    </KeyboardAvoidingView>
  )
}

export default CommentView

const styles = StyleSheet.create({})