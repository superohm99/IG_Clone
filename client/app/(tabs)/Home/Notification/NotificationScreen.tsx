import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import RequestTab from "@/components/tool_NotificationScreen/RequestTab";
import Like from "@/components/tool_NotificationScreen/Like";
import Follow from "@/components/tool_NotificationScreen/Follow";
import Mention from "@/components/tool_NotificationScreen/Mention";
import SuggestedUsers from "@/components/tool_NotificationScreen/SuggestedUser/SuggestedUsers";

type SectionProps = {
  title: string;
  children: React.ReactNode;
}

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

const Section = (props: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.separatorText}>{props.title}</Text>
    {props.children}
  </View>
);

const Separator = () => (
  <View style={styles.separator} />
);

const NotificationScreen = () => {
  const router = useRouter();
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {

    // Example
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      const formattedUsers = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.login.username}`,
        profileURI: user.picture.thumbnail,
      }));

      setUsers(formattedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <ScrollView>

        <TouchableOpacity onPress={() => router.navigate("/Home/Notification/FollowRequestScreen")}>
          <RequestTab users={users}/>
        </TouchableOpacity>

        <Separator />

        <Section title="New">
          <Like title="story" user={users[0]} time="13h" />
        </Section>

        <Separator />

        <Section title="Last 7 days">
          <Like title="comment" user={users[1]} text="Hello instagram!" time="1d" />
          <Follow title="request" user={users[2]} time="2d" />
        </Section>

        <Separator />

        <Section title="Last 30 days">
          <Like title="post" user={users[3]} time="1w" />
          <Follow title="request" user={users[4]} time="2w" />
          <Follow title="suggest" user={users[5]} time="2w" />
        </Section>

        <Separator />

        <Section title="Older">
          <Like title="post" user={users[6]} time="15w" />
          <Mention title="comment" user={users[7]} text="queue1" time="16w" />
          <Mention title="post" user={users[8]} text="@petch hi, how are you?" time="17w" />
          <Follow title="request" user={users[9]} time="2w" />
        </Section>

        <Separator />
        
        <Section title="Suggested for you">
          <SuggestedUsers />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  headerText: {
    fontSize: 22,
    fontWeight: "800",
  },
  separatorText: {
    fontSize: 18,
    fontWeight: "800"
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 15,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});
