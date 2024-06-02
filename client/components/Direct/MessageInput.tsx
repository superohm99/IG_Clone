import { View, StyleSheet, TextInput, Text, TouchableOpacity, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
type MessageInputProps = {
  onSendMessage: (message: string) => void
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (text: string) => {
    setMessage(text)
  }

  return (
    <KeyboardAvoidingView
      behavior= {Platform.OS === 'ios' ? 'padding': 'height'}
      style={styles.messageInput}>
      <FontAwesome6 name='camera' size={24} color='black' />
      <TextInput 
        placeholder="Type a message" 
        multiline
        style={{ flex: 1, maxHeight: 80 }} 
        value={message} 
        onChangeText={handleInputChange} />
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
    </KeyboardAvoidingView>
  )
}

export default MessageInput

const styles = StyleSheet.create({
  messageInput: {
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