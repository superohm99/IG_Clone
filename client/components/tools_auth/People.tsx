import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type PeopleProps = {
  profile: ImageSourcePropType;
  name: string;
};

const People: React.FC<PeopleProps> = ({ profile, name }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(true);

  const follow = async () => {
    setIsFollowing(true)
  };

  const deleteSuggestion = async () => {
    setIsDelete(false);
  };

  if (!isDelete) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.peopleRow}>
        <Image source={profile} style={styles.images} resizeMode="contain" />
        <View style={styles.peopleColumn}>
          <Text style={styles.headerText}>{name}</Text>
          <Text style={styles.baseText}>Suggested for you</Text>
        </View>
      </View>
      <View style={styles.peopleRow}>
        <CustomButton
          title="Follow"
          isLoading={isFollowing}
          handlePress={follow}
          otherStyle={{ paddingVertical: 5 }}
        />
        <TouchableOpacity onPress={deleteSuggestion}>
          <FontAwesomeIcon icon={faXmark} size={15} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
  },
  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  peopleColumn: {
    flexDirection: "column"
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
  images: {
    borderRadius: 50,
    width: 45,
    height: 60
  }
});