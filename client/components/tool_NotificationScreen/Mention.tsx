import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { images } from "@/constants";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

type MentionProps = {
  title: string;
  user: UserProps;
  text: string;
  time: string;
};

const Mention = (props: MentionProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {props.user && (
          <>
            <Image
              source={{uri: props.user.profileURI}}
              resizeMode="cover"
              style={styles.profile}
            />
            <View style={styles.content}>
              {props.title === "comment" ? (
                <Text style={styles.baseText}>
                  {props.user.name} mentioned you in comment: {props.text} {props.time}
                </Text>
              ) : (
                <Text style={styles.baseText}>
                  {props.user.name} commented: {props.text} {props.time}
                </Text>
              )}
              <View style={styles.reply}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                  <FontAwesomeIcon
                    icon={isLiked ? solidHeart : regularHeart}
                    color={isLiked ? "red" : "gray"}
                    size={14}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.replyText}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
      <View>
        <Image source={images.post} resizeMode="cover" style={styles.post} />
      </View>
    </View>
  );
};

export default Mention;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftView: {
    flexDirection: "row",
    gap: 12,
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  reply: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  post: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  baseText: {
    width: 250,
    fontSize: 14,
  },
  replyText: {
    fontSize: 12,
    color: "gray",
  },
});
