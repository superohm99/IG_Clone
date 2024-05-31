import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import CircleView from "../tool_HomeScreen/CircleView"

const PersonView = () => {
  return (
    <View style={{zIndex:1,position:'absolute',left:'5%',top:'80%',flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={47} height={47} img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
            <Text style={{color:'white',fontSize:16,fontWeight:700,marginTop:12}}>PersonView</Text>
            
            <TouchableOpacity style={{ 
                marginLeft:20,
                marginTop:10,
                backgroundColor: 'transparent',
                padding: 2,
                paddingHorizontal:6,
                borderRadius: 10,
                borderWidth: 1, 
                borderColor: 'white',
                height:30}}>
                <Text style={{
                    fontSize:16,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom:0}}>Subscribe</Text>
            </TouchableOpacity>
            
        </View>

        <View>
            <Text style={{color:'white',fontSize:14,fontWeight:600,marginLeft:15,marginTop:16}}>The Cartoon</Text>

            <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
                <View style={{zIndex:4}}>
                    <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={25} height={25} img='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
                </View>
                <View style={{position:'relative',left:-13,zIndex:3}}>
                    <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={25} height={25} img='https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
                </View>
                <View style={{position:'relative',left:-25,zIndex:2}}>
                    <CircleView margin_fisrt={0} margin_sec={0} border_sec={0} border={0} width={25} height={25} img='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CircleView>
                </View>
                    
                <Text style={{position:'relative',left:-25,fontWeight:500,color:'black'}}>Like by alonso and others 1,777</Text>
            </View>
        </View>
    </View>
  )
}

export default PersonView

const styles = StyleSheet.create({})