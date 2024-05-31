import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


import SearchBar from "@/components/tool_NotificationScreen/SearchBar";
import Follow from "@/components/tool_NotificationScreen/Follow";
import SuggestedUsers from "@/components/tool_NotificationScreen/SuggestedUser/SuggestedUsers";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

const Separator = () => <View style={styles.separator} />;

const FollowRequestScreen = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    // Example
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();

        const formattedUsers = data.results.map((user: any) => ({
          id: user.login.uuid,
          name: `${user.login.username}`,
          profileURI: user.picture.thumbnail
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }

      setLoading(false);
    };

    fetchUsers();

  }, []);

  if (loading) { return <SafeAreaView style={styles.container}></SafeAreaView> }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Follow requests</Text>
      </View>

      <Separator />

      <ScrollView>
        <View style={styles.content}>
          <SearchBar
            value={searchText}
            handleChangeText={(e) => setSearchText(e)}
          />

          {users
            .filter(
              (item) =>
                searchText === "" ||
                item.name.toUpperCase().includes(searchText.toUpperCase())
            )
            .map((item) => (
              <Follow key={item.id} title="none" user={item} />
            ))}
        </View>

        <Separator />

        <View style={styles.content}>
          <Text style={styles.separatorText}>Suggested for you</Text>
          <SuggestedUsers />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FollowRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  headerView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 100
  },
  headerText: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },
  separatorText: {
    fontSize: 18,
    fontWeight: "800",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
    marginVertical: 10
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 15,
  },
});
