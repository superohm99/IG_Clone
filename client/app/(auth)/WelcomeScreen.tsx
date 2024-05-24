import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { Link, useRouter, useLocalSearchParams } from "expo-router";

const WelcomeScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // example
  const router = useRouter();
  const { username, password } = useLocalSearchParams<{ username: string, password: string }>();

  const submit = async () => {
    setIsSubmitting(true);
    router.push("SyncScreen");

    // send api
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View>
            <Text style={styles.headerText}>Welcome to Instagram,</Text>
            <Text style={styles.headerText}>{username}</Text>
          </View>
          <Text style={[styles.baseText, { marginHorizontal: 20 }]}>
            We'll add the email and phone number info from old account to{" "}
            {username}. You can change your contact info and username anytime.
          </Text>
          <CustomButton
            title="Complete sign up"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity
            onPress={() => router.push("PhoneEmailScreen")}
            style={{ alignSelf: "center" }}
          >
            <Text style={[styles.baseText, { color: "#3797EF" }]}>Add new phone or email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <View style={{ height: 0.5, backgroundColor: "#ccc" }} />
        <Text style={styles.footerText}>
          We'll add private into from old account to {username}. see
          <Text> </Text>
          <Link href="/" style={styles.link}>Terms</Link>
          <Text> </Text>
          and
          <Text> </Text>
          <Link href="/" style={styles.link}>Privacy Policy</Link>
          .
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 180,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
  },
  baseText: {
    fontSize: 14,
    textAlign: "center",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 25,
    marginVertical: 30,
    color: "gray"
  },
  link: {
    color: "gray",
    fontWeight: "500",
  }
});
