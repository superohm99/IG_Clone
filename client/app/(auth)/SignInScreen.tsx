import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import { images } from "../../constants";
import CustomButton from "@/components/tools_auth/CustomButton";
import FormField from "@/components/tools_auth/FormField";

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
    router.replace("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>

          <Image source={images.logo} resizeMode="contain" style={styles.logo} />

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
            <Text style={styles.forgetPassword}>Forget password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Log in"
            otherStyle={{ marginTop: 20 }}
            isLoading={isSubmitting}
            handlePress={submit}
          />

          <View style={styles.orLine}>
            <View style={{ flex: 1, height: 0.5, backgroundColor: "#ccc" }} />
            <Text style={{ textAlign: "center", color: "gray" }}>OR</Text>
            <View style={{ flex: 1, height: 0.5, backgroundColor: "#ccc" }} />
          </View>

          <TouchableOpacity style={styles.facebook}>
            <FontAwesomeIcon icon={faSquareFacebook} size={20} color="#3797EF" />
            <Text style={{ color: "#3797EF" }}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={{ width: "100%" }}>
        <View style={{ height: 0.5, backgroundColor: "#ccc" }} />
        <View style={styles.bottomView}>
          <Text style={{ color: "gray" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("CreateUsernameScreen")}>
            <Text style={{ color: "#3797EF" }}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  logo: {
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  forgetPassword: {
    color: "#3797EF",
    marginVertical: 10,
  },
  orLine: {
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 35,
    gap: 10, 
  },
  facebook: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignSelf: "center",
    gap: 5,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginVertical: 30,
  },
});
