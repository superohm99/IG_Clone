import { TouchableOpacity, ViewStyle, TextStyle, Text, StyleSheet } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  containerStyle: ViewStyle;
  textStyle: TextStyle;
  handlePress: () => void;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      style={[props.containerStyle, styles.container]}
    >
      <Text style={[props.textStyle, styles.text]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center"
  }
});
