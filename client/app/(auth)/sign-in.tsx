import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import { images } from "../../constants";
import CustomButton from "@/components/tools_auth/CustomButton";
import FormField from "@/components/tools_auth/FormField";

type formState = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [form, setForm] = useState<formState>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const submit = () => {
    router.push('/HomeScreen')
  }

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
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 10 }}
            placeholder="Phone number, username or email"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Password"
            otherStyles={{ marginTop: 10 }}
          />
          <CustomButton
            title="Forget password?"
            textStyles={{
              color: '#3797EF',
              marginVertical: 10,
              alignSelf: 'flex-end',
            }}
            handlePress={() => {}}
          />
          <CustomButton
            title="Log in"
            containerStyle={{
              padding: 10,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: '#3797EF',
            }}
            textStyles={{ color: "#fff", textAlign: "center" }}
            handlePress={submit}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 35 }}>
            <View style={{ flex: 1, height: 0.5, backgroundColor: '#ccc' }} />
            <Text style={{ textAlign: 'center', color: "gray" }}>OR</Text>
            <View style={{ flex: 1, height: 0.5, backgroundColor: '#ccc' }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
            <FontAwesomeIcon icon={faSquareFacebook} size={20} color="#3797EF" />
            <Text style={{ color: "#3797EF" }}>Log in with Facebook</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ width: '100%' }}>
        <View style={{ height: 0.5, backgroundColor: '#ccc' }} />
        <View style={styles.bottomView}>
          <Text style={{ color: "gray" }} >Don't have an account?</Text>
          <Link href="/sign-up" style={{ color: "#3797EF" }}>Sign up.</Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 120,
  },
  logo: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 20
  },
  bottomView: {
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 35,
  }
});

export default SignIn;
