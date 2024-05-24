import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

import FormField from "@/components/tools_auth/FormField";
import CustomButton from "@/components/tools_auth/CustomButton";

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [savePassword, setSavePassword] = useState<boolean>(false);
  
  const router = useRouter();
  const { username } = useLocalSearchParams<{ username: string }>();
  
  const submit = async () => {
    setIsSubmitting(true);
    
    // example
    // passing username to next screen
    router.push({
      pathname: "/SignUpScreen/WelcomeScreen",
      params: { username, password }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ width: 10 }}
        >
          <View style={styles.angleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} size={25} />
          </View>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.headerText}>Create password</Text>
          <Text style={styles.baseText}>We can remember the password, so you won't need to enter it on your iCloud devices.</Text>
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            placeholder="Password"
            otherStyles={{ marginTop: 20 }}
          />
          <View style={styles.save}>
            <TouchableOpacity onPress={() => setSavePassword(!savePassword)}>
                <FontAwesomeIcon icon={savePassword ? faSquare : faSquareCheck} size={20} color={savePassword ? "gray" : "#3797EF"} />
            </TouchableOpacity>
            <Text style={{ color: "gray" }}>Save password</Text>
          </View>
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

export default CreatePasswordScreen;

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
  save: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10
  }
});