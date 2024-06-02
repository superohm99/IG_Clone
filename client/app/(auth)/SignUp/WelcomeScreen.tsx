import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter, useLocalSearchParams } from "expo-router";

import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import { images } from "@/constants";

const WelcomeScreen = () => {
  const router = useRouter();
  const { username, password, phone, email } = useLocalSearchParams();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const submit = async () => {
    setIsSubmitting(true);
    router.navigate("/SignUp/SyncScreen");

    // send api
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image source={images.welcome} style={styles.images} resizeMode="contain" />
          <View>
            <Text style={styles.headerText}>Welcome to</Text>
            <Text style={styles.headerText}>Instagram, {username}</Text>
          </View>
          <CustomButton
            title="Complete sign up"
            isLoading={isSubmitting}
            handlePress={submit}
          />
        </View>
      </ScrollView>
      <View>
        <View style={styles.separator} />
        <Text style={styles.footerText}>
          Instagram will copy your age from {username}. See our
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
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 170,
    paddingHorizontal: 20,
    gap: 30
  },
  headerText: {
    fontSize: 24,
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
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
  },
  images: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
});
