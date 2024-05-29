import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";

import { images } from "@/constants";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

type RequestTabProps = {
  user: UserProps[];
};

const RequestTab = ({ user }: RequestTabProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View>
          <Image
            source={images.profile}
            resizeMode="cover"
            style={styles.profileฺBack}
          />
          <Image
            source={images.profile}
            resizeMode="cover"
            style={styles.profileFront}
          />
        </View>
        <View>
          <Text style={styles.baseText}>Follow requests</Text>
          <Text style={styles.subText}>
            {user.length > 3
              ? `${user[0].name} + ${user.length - 1} others`
              : user.map((item) => item.name).join(", ")}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <FontAwesomeIcon icon={faCircle} size={8} color="#3797EF" />
        <FontAwesomeIcon icon={faAngleRight} size={16} color="gray" />
      </View>
    </View>
  );
};

export default RequestTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileฺBack: {
    width: 29,
    height: 29,
    borderRadius: 50,
  },
  profileFront: {
    width: 31,
    height: 31,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    position: "absolute",
    left: 8,
    top: 8,
  },
  baseText: {
    fontSize: 14,
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
});
