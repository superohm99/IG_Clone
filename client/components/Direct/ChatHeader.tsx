import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import { User } from '@/constants/chat.data'
type ChatHeaderProps = User;
const ChatHeader = (props: ChatHeaderProps) => {
  const handleBack = () => {
    router.back()
  }
  const handlePressSettings = () => {
    router.push(`/direct/t/${props.username}/messageSetting`)
  }
  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome6 name='arrow-left' size={24} color='black' onPress={handleBack} />
      <Pressable style={styles.userInfo} onPress={handlePressSettings}>
        {props.name ? (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={{ fontSize: 14, fontWeight: 700}}>{props.name}</Text>
              <FontAwesome6 name='chevron-right' size={12} color='darkgray' />
            </View>
            <Text>{props.username}</Text>
          </>
        ) : (
          <>
          <Text style={{ fontSize: 14, fontWeight: 700}}>{props.username}</Text>
          </>
        )}
      </Pressable>
      <FontAwesome6 name='phone' size={22} color='black' />
      <FontAwesome6 name='video' size={22} color='black' />
    </SafeAreaView>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 24,
    backgroundColor: '#fff'
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },

});