import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { images } from "@/constants";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

type LikeProps = {
  title: string;
  user: UserProps;
  text?: string;
  time: string;
};

const Like = (props: LikeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {props.user && (
          <>
            <Image
              source={{ uri: props.user.profileURI }}
              resizeMode="cover"
              style={styles.profile}
            />
            <View>
              {props.title === "comment" ? (
                <Text style={styles.baseText}>
                  {props.user.name} liked your comment: {props.text}{" "}
                  {props.time}
                </Text>
              ) : props.title === "post" ? (
                <Text style={styles.baseText}>
                  {props.user.name} liked your post. {props.time}
                </Text>
              ) : (
                <Text style={styles.baseText}>
                  {props.user.name} liked your story. {props.time}
                </Text>
              )}
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

export default Like;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  baseText: {
    width: 250,
    fontSize: 14,
  },
  timeText: {
    color: "#ccc",
  },
  post: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});
