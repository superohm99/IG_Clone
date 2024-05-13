import { ScrollView, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '@/components/tools_auth/FormField'
import CustomButton from '@/components/tools_auth/CustomButton';
import { router } from 'expo-router';

type formState = {
  username: string;
  password: string;
};

const SignUp = () => {
  const [form, setForm] = useState<formState>({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const next = () => {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Create username</Text>
          <Text>Pick a username for your new account. You can always change it later.</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            placeholder="Username"
            otherStyles={{ marginTop: 10 }}
          />
          <CustomButton
            title="Next"
            containerStyle={{
              padding: 10,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: '#3797EF',
            }}
            textStyles={{ color: "#fff", textAlign: "center" }}
            handlePress={next}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 120,
  }
});

export default SignUp