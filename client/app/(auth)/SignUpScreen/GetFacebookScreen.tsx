import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { useRouter } from "expo-router";

import { images } from "@/constants";

const GetFacebookScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const submit = async () => {
    setIsSubmitting(true);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Get Facebook suggestions</Text>
          <Text style={styles.baseText}>You can find people you know from Facebook with Accounts Center.</Text>
          <Image source={images.fbSuggestions} style={styles.images} resizeMode="contain" />
        </View>
      </ScrollView>
      <View>
        <View style={{ height: 0.5, backgroundColor: "#ccc", marginVertical: 10 }} />
        <View style={styles.footer}>
          <CustomButton
            title="Continue"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity
            onPress={() => router.push("/SignUpScreen/AccountPrivacyScreen")}
            style={{ alignSelf: "center" }}
          >
            <Text style={[styles.baseText, { color: "#3797EF" }]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetFacebookScreen;

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
    color: "gray"
  },
  images: {
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});