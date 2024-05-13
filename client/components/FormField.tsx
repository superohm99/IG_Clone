import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles: object;
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={otherStyles}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              size={30}
              color="#ccc"
              style={styles.eye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
    borderRadius: 5,
    height: 50,
    width: 350,
  },
  textInput: {
    color: "#000",
    padding: 10,
    fontSize: 13,
  },
  eye: {
    alignSelf: "flex-end",
    right: 12,
    bottom: 38,
  },
});

export default FormField;
