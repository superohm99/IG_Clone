import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import { images } from "@/constants";
import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import FormField from "@/components/tool_AuthScreen/FormField";

type formState = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const [form, setForm] = useState<formState>({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const submit = async () => {
    setIsSubmitting(true);
    router.navigate("/Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={{ marginTop: 10 }}
            placeholder="Phone number, username or email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 10 }}
            placeholder="Password"
          />

          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text style={[styles.medium, { marginTop: 10 }]}>
              Forget password?
            </Text>
          </TouchableOpacity>

          <CustomButton
            title="Log in"
            otherStyle={{ marginTop: 20 }}
            isLoading={isSubmitting}
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
    </SafeAreaView>
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
