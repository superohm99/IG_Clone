import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { useRouter } from "expo-router";

import { images } from "../../constants";

const ProfileScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async () => {
    setIsSubmitting(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Add profile photo</Text>
          <Text style={styles.baseText}>Add a profile photo so your friends know it's you.</Text>
          <Image source={images.addProfile} style={styles.images} resizeMode="contain" />
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
            title="Add a photo"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity
            onPress={() => router.push("RememberLoginScreen")}
            style={{ alignSelf: "center" }}
          >
            <Text style={[styles.baseText, { color: "#3797EF" }]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
