import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'

type BottomChatProps = {
  onSendMessage: (message: string) => void
}

const BottomChat = ({ onSendMessage }: BottomChatProps) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (text: string) => {
    setMessage(text)
  }

  return (

    <View style={{position: 'absolute', bottom: 0, left: 10, width: '95%', backgroundColor: '#fff', paddingBottom: 8 }}>
    <View style={styles.bottom}>
      <FontAwesome6 name='camera' size={24} color='black' />
      <TextInput placeholder="Type a message" style={{ flex: 1 }} value={message} onChangeText={handleInputChange} />
      {message.length === 0 ? (<>
        <FontAwesome6 name='microphone' size={24} color='black' />
        <FontAwesome6 name='image' size={24} color='black' />
        <FontAwesome6 name='smile' size={24} color='black' />
      </>
      ) : (<TouchableOpacity onPress={() => {
        setMessage('')
        onSendMessage(message)
      }}
      >
        <Text>Send</Text>
      </TouchableOpacity>)
      }

    </View>
    </View>
  )
}

export default BottomChat

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    justifyContent: "flex-start"
  },
});