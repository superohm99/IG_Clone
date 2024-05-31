import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import * as Contacts from 'expo-contacts';

import CustomButton from "@/components/tool_AuthScreen/CustomButton";

const SyncScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const submit = async () => {
    setIsSubmitting(true);

    // modal to ask for permission
    const { status } = await Contacts.requestPermissionsAsync();

    // if permission granted then get contacts
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      for (let i = 0; i < 3; i++) {
        console.log(data[i]);
      }
    }
    router.navigate("/SignUp/GetFacebookScreen");
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Next, you can allow access to your contacts to make it easier to find your friends on Instagram</Text>
          <View style={styles.service}>
            <FontAwesomeIcon icon={faRotateLeft} size={25} />
            <Text style={styles.baseText}>Your contacts will be periodically synced and stored securely on our servers so that we can help recommend people and things that are relevant to you.</Text>
          </View>
          <View style={styles.service}>
            <FontAwesomeIcon icon={faGear} size={25} />
            <Text style={styles.baseText}>You can turn off syncing at any time in Settings. <Link href="/" style={{ fontWeight: "500" }}>Learn more</Link></Text>
          </View>
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
          <Text style={styles.footerText}>By tapping Next, you can choose to sync your contacts or skip this step.</Text>
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
    marginVertical: 15
  },
});