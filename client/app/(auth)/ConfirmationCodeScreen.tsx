import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/tools_auth/CustomButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import FormField from "@/components/tools_auth/FormField";

const ConfirmationCodeScreen = () => {
  const router = useRouter();
  const [code, setCode] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { phone } = useLocalSearchParams<{ phone: string }>();

  const submit = async () => {
    setIsSubmitting(true);
    router.push("SyncScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Enter the code we sent to</Text>
          <Text style={styles.headerText}>{phone}</Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity><Text style={[styles.baseText, { color: "#3797EF" }]}>Change phone number </Text></TouchableOpacity>
            <Text style={styles.baseText}>or</Text>
            <TouchableOpacity><Text style={[styles.baseText, { color: "#3797EF" }]}> Send SMS message again.</Text></TouchableOpacity>
          </View>
          <FormField
            title="Confirmation code"
            value={code}
            handleChangeText={(e) => setCode(e)}
            placeholder="Confirmation code"
            otherStyles={{ marginTop: 20 }}
          />
          <CustomButton
            title="Next"
            otherStyle={{ marginTop: 20 }}
            isLoading={isSubmitting}
            handlePress={submit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmationCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
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
    color: "gray",
  }
});
