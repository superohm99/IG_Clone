import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import FormField from "@/components/tool_AuthScreen/FormField";
import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import { validateField } from "@/components/tool_AuthScreen/FormValidation";

type formState = {
  phone: string;
  email: string;
};

const PhoneEmailScreen = () => {
  const router = useRouter();
  const { username, password } = useLocalSearchParams();

  const [isSelect, setIsSelect] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [form, setForm] = useState<formState>({
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    email: ""
  });

  const handleChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const submit = async () => {
    setIsSubmitting(true);

    const phoneError = validateField("Phone", form.phone);
    const emailError = validateField("Email", form.email);

    setErrors({
      phone: phoneError,
      email: emailError
    });

    if (!phoneError || !emailError) {
      setSubmitted(true);
      router.navigate({
        pathname: "/SignUp/WelcomeScreen",
        params: { username, password, phone: form.phone, email: form.email }
      });
    }
  };

  const toggleSelect = (selectValue: boolean) => {
    setIsSelect(selectValue);
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
          <Text style={styles.headerText}>Add Phone or Email</Text>
          <View style={styles.tabBar}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => toggleSelect(true)}
              style={[styles.selector, isSelect && styles.selected]}
            >
              <Text
                style={[styles.selectText, isSelect && styles.selectedText]}
              >
                Phone
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => toggleSelect(false)}
              style={[styles.selector, !isSelect && styles.selected]}
            >
              <Text
                style={[styles.selectText, !isSelect && styles.selectedText]}
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
          {isSelect ? (
            <View>
                <FormField
                    title="Phone"
                    value={form.phone}
                    handleChangeText={(e) => handleChange("phone", e)}
                    otherStyles={{ marginTop: 10 }}
                    placeholder="Phone number"
                    showError={isSubmitting}
                />
                <CustomButton
                    title="Next"
                    otherStyle={{ marginTop: 20 }}
                    isLoading={submitted}
                    handlePress={submit}
                />
            </View>
          ) : (
            <View>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => handleChange("email", e)}
                    otherStyles={{ marginTop: 10 }}
                    placeholder="Email address"
                    showError={isSubmitting}
                />
                <CustomButton
                    title="Next"
                    otherStyle={{ marginTop: 20 }}
                    isLoading={submitted}
                    handlePress={submit}
                />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneEmailScreen;

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
  selectText: {
    fontSize: 20,
    fontWeight: "700",
    color: "gray",
    marginBottom: 10
  },
  selectedText: {
    color: "#000",
  },
  baseText: {
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  selector: {
    marginVertical: 10,
    width: "50%",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  selected: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
