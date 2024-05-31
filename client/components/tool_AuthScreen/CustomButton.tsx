import { TouchableOpacity, ViewStyle, Text, StyleSheet } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  otherStyle?: ViewStyle;
  isLoading?: boolean;
  handlePress: () => void;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      style={[props.otherStyle, styles.container, props.isLoading && { opacity: 0.5 }]}
      disabled={props.isLoading}
    >
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff", 
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center"
  }
});