import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import { images } from "@/constants";
import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import FormField from "@/components/tool_AuthScreen/FormField";
import { validateField } from "@/components/tool_AuthScreen/FormValidation";

type formState = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  const [form, setForm] = useState<formState>({
    username: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({
    username: "",
    password: ""
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

    const usernameError = validateField("Phone_or_Username_or_Email", form.username);
    const passwordError = validateField("Password", form.password);
    setErrors({
      username: usernameError,
      password: passwordError
    });

    if (!usernameError && !passwordError) {
      setSubmitted(true);
      router.navigate("/Home");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />

          <FormField
            title="Phone_or_Username_or_Email"
            value={form.username}
            handleChangeText={(e) => handleChange("username", e)}
            otherStyles={{ marginTop: 10 }}
            placeholder="Phone number, username or email"
            showError={isSubmitting}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => handleChange("password", e)}
            otherStyles={{ marginTop: 10 }}
            placeholder="Password"
            showError={isSubmitting}
          />

          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text style={[styles.medium, { marginTop: 10 }]}>
              Forget password?
            </Text>
          </TouchableOpacity>

          <CustomButton
            title="Log in"
            otherStyle={{ marginTop: 20 }}
            isLoading={submitted}
            handlePress={submit}
          />

          <View style={styles.orLine}>
            <View style={[styles.separator, { flex: 1 }]} />
            <Text style={styles.orText}>OR</Text>
            <View style={[styles.separator, { flex: 1 }]} />
          </View>

          <TouchableOpacity style={styles.facebook}>
            <FontAwesomeIcon icon={faSquareFacebook} size={20} color="#000" />
            <Text style={styles.large}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View>
        <View style={styles.separator} />
        <View style={styles.bottomView}>
          <Text style={styles.small}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.navigate("/SignUp")}>
            <Text style={styles.medium}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 170,
  },
  logo: {
    width: 200,
    height: 50,
    alignSelf: "center",
    marginBottom: 20
  },
  orLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
    gap: 20
  },
  orText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
  facebook: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 30,
  },
  small: {
    fontSize: 12,
    color: "gray",
  },
  medium: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  large: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
  },
});
