import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import Options from "@/components/tool_AuthScreen/Options";

const AccountPrivacyScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const options = [
    { title: "Private", description: "Only accounts you approve can see your photos and videos." },
    { title: "Public", description: "Anyone can see your photos and videos." }
  ];

  const handleSelect = (title: string) => {
    setSelectedOption((prev) => (prev === title ? null : title));
  };

  const submit = async () => {
    setIsSubmitting(true);
    router.navigate("/SignUp/AddProfileScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Account privacy</Text>
          <Text style={styles.middleText}>Choose who can see what you share. You can change this anytime in settings.</Text>
          <View style={styles.options}>
            {options.map((option, index) => (
              <Fragment key={option.title}>
                <Options
                  key={option.title}
                  title={option.title}
                  description={option.description}
                  isSelected={selectedOption === option.title}
                  onSelect={() => handleSelect(option.title)}
                />
                {index < options.length - 1 && <View style={styles.separator} />}
              </Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton
          title="Next"
          isLoading={isSubmitting}
          handlePress={submit}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountPrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  options: {
    flexDirection: "column",
    gap: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  middleText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 40,
  },
  baseText: {
    fontSize: 14,
    textAlign: "left",
    color: "gray",
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
    marginVertical: 15
  },
});
