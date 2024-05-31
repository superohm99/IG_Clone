import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../CustomButton";

type UserProps = {
  name: string;
  profileURI: string;
};

const SuggestedUser = ({ name, profileURI }: UserProps) => {
  const [isFollow, setIsFollow] = useState(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  if (isDelete) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.peopleRow}>
        <Image source={{uri: profileURI}} style={styles.profile} resizeMode="cover" />
        <View style={styles.peopleColumn}>
          <Text style={styles.headerText}>{name}</Text>
          <Text style={styles.baseText}>Suggested for you</Text>
        </View>
      </View>
      <View style={styles.peopleRow}>
        <CustomButton
          title={isFollow ? "Following" : "Follow"}
          containerStyle={isFollow ? styles.buttonNotFollow : styles.buttonFollow}
          textStyle={{ color: isFollow ? "#000" : "#fff" }}
          handlePress={() => setIsFollow(!isFollow)}
        />
        {!isFollow && (
          <TouchableOpacity onPress={() => setIsDelete(true)}>
            <FontAwesomeIcon icon={faXmark} size={15} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SuggestedUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  peopleColumn: {
    flexDirection: "column",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
  },
  baseText: {
    fontSize: 12,
    textAlign: "left",
    color: "gray",
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  buttonFollow: {
    backgroundColor: "#000",
    width: 80
  },
  buttonNotFollow: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff", 
    width: 100
  }
});
