import { StyleSheet, View, ViewStyle, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { validateField } from "./FormValidation";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles: ViewStyle;
  showError?: boolean;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  showError
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const errorMessage = validateField(title, value);
    setError(errorMessage);
  }, [title, value]);

  return (
    <View style={otherStyles}>
      <View style={[styles.input, error && showError ? {borderColor: "red"} : {borderColor: "#ccc"}]}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#ccc"}
          onChangeText={(text) => handleChangeText(text)}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={title === "Phone" ? "number-pad" : "default"}
        />
        {title === "Password" ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        ) : (
          value !== "" && (
            <TouchableOpacity
              onPress={() => handleChangeText("")}
              style={styles.circleXmark}
            >
              <FontAwesomeIcon icon={faCircleXmark} size={15} color="#ccc" />
            </TouchableOpacity>
          )
        )}
      </View>
      {error && showError ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.25,
    backgroundColor: "#f8f9fa",
    borderRadius: 6,
    padding: 10
  },
  textInput: {
    color: "#000",
    width: "100%",
    fontSize: 14
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5
  },
  eye: {
    position: "absolute",
    right: 12,
  },
  circleXmark: {
    position: "absolute",
    right: 15,
  }
});