import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import People from "@/components/tools_auth/People";
import { images } from "../../constants";

const DiscoverScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Discover people</Text>
          <TouchableOpacity
            onPress={() => router.replace("HomeScreen")}
            style={{ position: "absolute", right: 10 }}
          >
            <Text style={{ fontSize: 16, color: "#3797EF" }}>Next</Text>
          </TouchableOpacity>
          <View style={{ height: 0.5, backgroundColor: "#ccc", marginTop: 15 }} />
          <People 
            profile={images.profile}
            name="test1 test1"
          />
          <People 
            profile={images.profile}
            name="test2 test2"
          />
          <People 
            profile={images.profile}
            name="test3 test3"
          />
          <People 
            profile={images.profile}
            name="test4 test4"
          />
          <People 
            profile={images.profile}
            name="test5 test5"
          />
          <People 
            profile={images.profile}
            name="test6 test6"
          />
          <People 
            profile={images.profile}
            name="test7 test7"
          />
          <People 
            profile={images.profile}
            name="test8 test8"
          />
          <People 
            profile={images.profile}
            name="test9 test9"
          />
          <People 
            profile={images.profile}
            name="test10 test10"
          />
          <People 
            profile={images.profile}
            name="test11 test11"
          />
          <People 
            profile={images.profile}
            name="test12 test12"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "column",
    marginVertical: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
});
