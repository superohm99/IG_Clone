import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { Link, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faRotateLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const SyncScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const submit = async () => {
    setIsSubmitting(true);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Instagram is more fun with friend. Sync your contacts to find them.</Text>
          <Text style={styles.middleText}>Allowing access to your contacts helps us offer you a better service.</Text>
          <View style={styles.service}>
            <FontAwesomeIcon icon={faUserPlus} size={20} />
            <Text style={styles.baseText}>We'll use your contacts to help you connect with people you know and recommend things you care about.</Text>
          </View>
          <View style={styles.service}>
            <FontAwesomeIcon icon={faRotateLeft} size={20} />
            <Text style={styles.baseText}>Your contacts will be periodically synced and stored security on our servers.</Text>
          </View>
          <View style={styles.service}>
            <FontAwesomeIcon icon={faGear} size={20} />
            <Text style={styles.baseText}>You can turn off syncing at any time in Settings. <Link href="/" style={{ fontWeight: "500", color: "#03045e" }}>Learn more</Link></Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={{ height: 0.5, backgroundColor: "#ccc", marginVertical: 10 }} />
        <View style={styles.footer}>
          <CustomButton
            title="Next"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity
            onPress={() => router.push("/SignUpScreen/GetFacebookScreen")}
            style={{ alignSelf: "center" }}
          >
            <Text style={[styles.baseText, { color: "#3797EF" }]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SyncScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
    gap: 20,
  },
  service: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 10,
    marginRight: 40
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center"
  },
  middleText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray"
  },
  baseText: {
    fontSize: 14,
    textAlign: "left",
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});