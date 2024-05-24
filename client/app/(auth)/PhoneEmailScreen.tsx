import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import FormField from "@/components/tools_auth/FormField";
import CustomButton from "@/components/tools_auth/CustomButton";

const PhoneEmailScreen = () => {
  const router = useRouter();
  const [isSelect, setIsSelect] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const toggleSelect = (selectValue: boolean) => {
    setIsSelect(selectValue);
  };

  const submit = async () => {
    setIsSubmitting(true);

    if (isSelect) {
      // submit phone
      router.push({
        pathname: "ConfirmationCodeScreen",
        params: { phone }
      });
    } else {
      // submit email
      router.push("SyncScreen");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => router.back()} style={{ width: 10 }}>
          <View style={styles.angleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} size={25} />
          </View>
        </TouchableOpacity>
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
                    value={phone}
                    handleChangeText={(e) => setPhone(e)}
                    otherStyles={{ marginTop: 10 }}
                    placeholder="Phone number"
                />
                <CustomButton
                    title="Next"
                    otherStyle={{ marginTop: 20 }}
                    isLoading={isSubmitting}
                    handlePress={submit}
                />
                <Text style={styles.footerText}>You may receive SMS notifications from us for security and login purposes.</Text>
            </View>
          ) : (
            <View>
                <FormField
                    title="Email"
                    value={email}
                    handleChangeText={(e) => setEmail(e)}
                    otherStyles={{ marginTop: 10 }}
                    placeholder="Email address"
                />
                <CustomButton
                    title="Next"
                    otherStyle={{ marginTop: 20 }}
                    isLoading={isSubmitting}
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
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 35,
    marginVertical: 20,
    color: "gray"
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
