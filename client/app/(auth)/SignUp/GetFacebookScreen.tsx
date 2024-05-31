import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import { images } from "@/constants";

const GetFacebookScreen = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  const submit = async () => {
    setIsSubmitting(true);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Get Facebook suggestions</Text>
          <Text style={styles.baseText}>You can find people you know from Facebook with Accounts Center.</Text>
          <Image source={images.fbSuggestions} style={styles.images} resizeMode="contain" />
          <Modal 
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.footerText}>Instagram is more fun when you follow your friends and see their posts. Are you sure that you want to skip this step?</Text>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity 
                    onPress={() => {
                      router.navigate("/SignUp/AccountPrivacyScreen")
                      setIsModalVisible(false)
                    }}
                  >
                      <Text style={styles.skipText}>Skip</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={styles.findText}>Find friends</Text>
                  </TouchableOpacity>
                </View>
                {/* <CustomButton
                  title="Back"
                  handlePress={() => setIsModalVisible(false)}
                /> */}
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      <View>
        <View style={styles.separator} />
        <View style={styles.footer}>
          <CustomButton
            title="Continue"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.footerText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetFacebookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    height: 180,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    justifyContent: "space-between",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
  baseText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray"
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "#000"
  },
  skipText: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "#000"
  },
  findText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 10
  },
  images: {
    width: 250,
    alignSelf: "center",
    marginBottom: 20,
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