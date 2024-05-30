import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import BottomChat from '@/components/Direct/BottomChat'
import MessageItem from '@/components/Direct/MessageItem'
import ChatProfile from '@/components/Direct/ChatProfile'
import { useState, useRef, useEffect } from 'react'
import { Message, getMessagesForRoom, currentUser, User, addMessage } from '@/constants/chat.data'
import ChatHeader from '@/components/Direct/ChatHeader'

const Chat = () => {
  
  const { id } = useLocalSearchParams<{ id: string }>()
  
  const [messages, setMessages] = useState<Message[]>(getMessagesForRoom(id!))
  const [interlocutorUser, setInterLocutorUser] = useState({} as User)
  const scrollViewRef = useRef<ScrollView>(null)


  const handleSendMessage = (message: string) => {        
    if (!id) return
    const newMessage = addMessage(id!, message)
    if (newMessage) setMessages([...messages, newMessage])
  }

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
    setInterLocutorUser(messages.find(m => m.user.userId !== currentUser.userId)!.user)
  }, [messages])


  return (

    <View style={styles.container}>
        <ChatHeader {...interlocutorUser} />
        {/* <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0: 0} // adjust as needed
    > */}
        <ScrollView 
          style={{ flex: 1}}
          contentContainerStyle={styles.messageContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}>
          <ChatProfile {...interlocutorUser} />
          {messages.map((message, index) => (
            <MessageItem key={index} {...message} />
          ))}
        </ScrollView>
      <BottomChat onSendMessage={handleSendMessage} />
      {/* </KeyboardAvoidingView> */}
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60,
    justifyContent: 'flex-end',
  }
});