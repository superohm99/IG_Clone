import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'

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
      keyboardVerticalOffset={200}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.messageInput}>
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