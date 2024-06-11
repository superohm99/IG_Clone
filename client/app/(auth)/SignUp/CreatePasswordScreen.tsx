import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

import FormField from "@/components/tool_AuthScreen/FormField";
import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import { validateField } from "@/components/tool_AuthScreen/FormValidation";

const CreatePasswordScreen = () => {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  const [password, setPassword] = useState<string>("");
  const [savePassword, setSavePassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submit = async () => {
    setIsSubmitting(true);
    
    const errorMessage = validateField("Password", password);
    if (!errorMessage) {
      setSubmitted(true);

      // passing username, password to next screen
      router.navigate({
        pathname: "/SignUp/PhoneEmailScreen",
        params: { username, password }
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
          <Text style={styles.headerText}>Create password</Text>
          <Text style={styles.baseText}>We can remember the password, so you won't need to enter it on your iCloud devices.</Text>
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            placeholder="Password"
            otherStyles={{ marginTop: 20 }}
            showError={isSubmitting}
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
            isLoading={submitted}
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