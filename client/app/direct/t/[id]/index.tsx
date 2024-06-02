import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useState, useRef, useEffect } from 'react'
import MessageInput from '@/components/Direct/MessageInput'
import MessageItem from '@/components/Direct/MessageItem'
import ChatProfile from '@/components/Direct/ChatProfile'
import ChatHeader from '@/components/Direct/ChatHeader'
import { Message, getMessagesForRoom, currentUser, User, addMessage } from '@/constants/chat.data'

const ChatContainer = () => {

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

    <SafeAreaView style={styles.container}>
      <ChatHeader {...interlocutorUser} />
      <ScrollView
        contentInsetAdjustmentBehavior='never'
        contentContainerStyle={styles.messageContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}>
        <ChatProfile {...interlocutorUser} />
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
      </ScrollView>
      <MessageInput onSendMessage={handleSendMessage} />
    </SafeAreaView>
  )

}

export default ChatContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  }
});