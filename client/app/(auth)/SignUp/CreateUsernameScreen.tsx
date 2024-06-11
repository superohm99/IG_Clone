import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import FormField from "@/components/tool_AuthScreen/FormField";
import { validateField } from "@/components/tool_AuthScreen/FormValidation";

const CreateUsernameScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submit = async () => {
    setIsSubmitting(true);
    
    const errorMessage = validateField("Username", username);
    if (!errorMessage) {
      setSubmitted(true);

      // passing username to next screen
      router.navigate({
        pathname: "/SignUp/CreatePasswordScreen",
        params: { username },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={{ width: 10 }}>
        <View style={styles.angleLeft}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Create username</Text>
          <Text style={styles.baseText}>
            Pick a username for your new account. You can always change it
            later.
          </Text>
          <FormField
            title="Username"
            value={username}
            handleChangeText={(e) => setUsername(e)}
            placeholder="Username"
            otherStyles={{ marginTop: 20 }}
            showError={isSubmitting}
          />
          <CustomButton
            title="Next"
            otherStyle={{ marginTop: 20 }}
            isLoading={submitted}
            handlePress={submit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateUsernameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  angleLeft: {
    marginTop: 20,
    marginLeft: 5
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
  baseText: {
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});
