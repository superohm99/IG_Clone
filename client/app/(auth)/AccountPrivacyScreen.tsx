import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import CustomButton from "@/components/tools_auth/CustomButton";
import Options from "@/components/tools_auth/Options";

const AccountPrivacyScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async () => {
    setIsSubmitting(true);
    router.push("ProfileScreen")
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Account privacy</Text>
          <Text style={styles.middleText}>
            Choose who can see what you share. You can change this anytime in
            settings.
          </Text>
          <View style={styles.options}>
            <Options
              title="Private"
              description="Only accounts you approve can see your photos and videos."
            />
            <View style={{ height: 0.5, backgroundColor: "#ccc", marginVertical: 10 }} />
            <Options
              title="Public"
              description="Anyone can see your photos and videos."
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton
          title="Next"
          isLoading={isSubmitting}
          handlePress={submit}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountPrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  options: {
    flexDirection: "column",
    gap: 10
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  middleText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 40,
  },
  baseText: {
    fontSize: 14,
    textAlign: "left",
    color: "gray",
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});
