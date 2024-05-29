import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker';

import CustomButton from "@/components/tool_AuthScreen/CustomButton";
import { images } from "@/constants";

const AddProfileScreen = () => {
  const router = useRouter();
  const [selectImage, setSelectImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setSelectImage(result.assets[0].uri);
    }

    //send api
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.headerText}>Add profile photo</Text>
          <Text style={styles.baseText}>
            Add a profile photo so your friends know it's you.
          </Text>
          <Image
            source={images.addProfile}
            style={styles.images}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
      <View>
        <View
          style={{
            height: 0.5,
            backgroundColor: "#e9ecef",
            marginVertical: 10,
          }}
        />
        <View style={styles.footer}>
          <CustomButton
            title="Add a photo"
            handlePress={pickImage}
          />
          <TouchableOpacity onPress={() => router.navigate("/SignUp/DiscoverScreen")}>
            <Text style={styles.footerText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
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
    color: "gray",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "#000",
  },
  images: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 150,
  },
  footer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});
