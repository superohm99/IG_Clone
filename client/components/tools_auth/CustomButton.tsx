import { TouchableOpacity, ViewStyle, Text, StyleSheet } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  otherStyle?: ViewStyle;
  isLoading: boolean;
  handlePress: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({
  title,
  otherStyle,
  isLoading,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[otherStyle, styles.container, isLoading && { opacity: 0.5 }]}
      disabled={isLoading}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#3797EF",
  },
  text: {
    color: "#fff", 
    textAlign: "center"
  }
});