import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

type RequestTabProps = {
  users: UserProps[];
};

const RequestTab = ({ users }: RequestTabProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        {users && (
          <>
            <View>
              <Image
                source={{ uri: users[0].profileURI }}
                resizeMode="cover"
                style={styles.profileฺBack}
              />
              <Image
                source={{ uri: users[1].profileURI }}
                resizeMode="cover"
                style={styles.profileFront}
              />
            </View>
            <View>
              <Text style={styles.baseText}>Follow requests</Text>
              <Text style={styles.subText}>
                {users.length > 3
                  ? `${users[0].name} + ${users.length - 1} others`
                  : users.map((item) => item.name).join(", ")}
              </Text>
            </View>
          </>
        )}
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
