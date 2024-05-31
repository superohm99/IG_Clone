import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import SearchBar from "@/components/tool_NotificationScreen/SearchBar";
import CustomButton from "@/components/tool_AuthScreen/CustomButton";

const DiscoverScreen = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async () => {
    setIsSubmitting(true);
    router.navigate("/Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Follow 5+ people</Text>
          <SearchBar
            value={searchText}
            handleChangeText={(e) => setSearchText(e)}
          />
        </View>
      </ScrollView>
      <View>
        <View style={styles.separator} />
        <View style={styles.footer}>
          <CustomButton
            title="Next"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <Text style={styles.footerText}>Following isn't required. but it's recommended for a personalised experience.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    color: "gray"
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 15
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
    marginVertical: 10,
  }
});
