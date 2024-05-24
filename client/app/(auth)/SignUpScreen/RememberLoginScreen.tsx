import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { useRouter } from "expo-router";

import { images } from "@/constants";

const RememberLoginScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const submit = async () => {
    setIsSubmitting(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Remember login info?</Text>
          <Text style={styles.baseText}>We'll remember the login info for {username}, so you won't need to enter it on your iCloud devices.</Text>
          <Image source={images.rememberLogin} style={styles.images} resizeMode="contain" />
        </View>
      </ScrollView>
      <View>
        <View
          style={{
            height: 0.5,
            backgroundColor: "#e9ecef",
            marginVertical: 10,
          }}
        />
        <View style={styles.footer}>
          <CustomButton
            title="Remember"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity
            onPress={() => router.push("/SignUpScreen/DiscoverScreen")}
            style={{ alignSelf: "center" }}
          >
            <Text style={[styles.baseText, { color: "#3797EF" }]}>Not now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RememberLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
  baseText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
  images: {
    width: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});
