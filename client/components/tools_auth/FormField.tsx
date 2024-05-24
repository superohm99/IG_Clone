import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
          onChangeText={(text) => handleChangeText(text)}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={title === "Phone" ? "number-pad" : "default"}
          {...props}
        />
        {title === "Password" ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        ) : (
          value !== "" && (
            <TouchableOpacity
              onPress={() => handleChangeText("")}
              style={styles.circleXmark}
            >
              <FontAwesomeIcon icon={faCircleXmark} size={15} color="gray" />
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fafafa",
    borderRadius: 5,
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    color: "#000",
    padding: 10,
    fontSize: 13,
    flex: 1,
  },
  eye: {
    position: "absolute",
    right: 12,
  },
  circleXmark: {
    position: "absolute",
    right: 15,
  },
});