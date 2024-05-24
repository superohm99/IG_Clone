import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

import CustomButton from "@/components/tools_auth/CustomButton";
import FormField from "@/components/tools_auth/FormField";

const CreateUsernameScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const submit = async () => {
    setIsSubmitting(true);

    // passing username to next screen
    router.push({
      pathname: "CreatePasswordScreen",
      params: { username },
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => router.push("SignInScreen")}
          style={{ width: 10 }}
        >
          <View style={styles.angleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} size={25} />
          </View>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.headerText}>Create username</Text>
          <Text style={styles.baseText}>
            Pick a username for your new account. You can always change it later.
          </Text>
          <FormField
            title="Username"
            value={username}
            handleChangeText={(e) => setUsername(e)}
            placeholder="Username"
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

export default CreateUsernameScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  angleLeft: {
    marginTop: 20,
    marginLeft: 5,
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