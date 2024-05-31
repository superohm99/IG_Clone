import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

import CustomButton from "./CustomButton";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

type FollowProps = {
  title: string;
  user: UserProps;
  time?: string;
};

const Follow = (props: FollowProps) => {
  const [description, setDescription] = useState<string>("");
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    if (props.title === "request") {
      setDescription(" requested to follow you.");
    } else if (props.title === "suggest") {
      setDescription(", who you might know, is on instagram.");
      setIsConfirm(true);
    } else if (props.title === "none") {
      setDescription("");
    }
  }, [props.title]);

  if (isDelete) return null;

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Image
          source={{ uri: props.user.profileURI }}
          resizeMode="cover"
          style={styles.profile}
        />
        <Text
          style={[
            styles.baseText,
            isConfirm ? { width: 190 } : { width: 140 },
          ]}
        >
          {props.user.name}
          {description} {props.time}
        </Text>
      </View>
      <View style={styles.rightView}>
        {isConfirm ? (
          <CustomButton
            title={isFollow ? "Following" : "Follow"}
            containerStyle={
              isFollow ? styles.buttonNotFollow : styles.buttonFollow
            }
            textStyle={{ color: isFollow ? "#000" : "#fff" }}
            handlePress={() => setIsFollow(!isFollow)}
          />
        ) : (
          <>
            <CustomButton
              title="Confirm"
              containerStyle={styles.confirmButton}
              textStyle={styles.confirmText}
              handlePress={() => setIsConfirm(true)}
            />
            <CustomButton
              title="Delete"
              containerStyle={styles.deleteButton}
              textStyle={styles.deleteText}
              handlePress={() => setIsDelete(true)}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Follow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  baseText: {
    fontSize: 14,
  },
  confirmButton: {
    backgroundColor: "#000",
    width: 80,
  },
  confirmText: {
    color: "#fff",
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    width: 80,
  },
  deleteText: {
    color: "#000",
  },
  buttonFollow: {
    backgroundColor: "#000",
    width: 100,
  },
  buttonNotFollow: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    width: 100,
  },
});
