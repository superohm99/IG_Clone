import { StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MessageItemProps = {
    text: string;
    username: string;
    sentAt: string;
    isMe: boolean;
};

function MessageItem({text, username, sentAt, isMe}: MessageItemProps) {
  return (
    <>
    </>
  );
}


type MessageContentProps = {};

function MessageContent({}: MessageContentProps) {
  return (
    <>

    </>
  );
}

export default MessageContent;