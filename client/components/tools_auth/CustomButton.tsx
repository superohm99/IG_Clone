import { TouchableOpacity, ViewStyle, TextStyle, Text } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  containerStyle?: ViewStyle;
  textStyles?: TextStyle;
  handlePress: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  textStyles,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={containerStyle}
    >
      <Text style={textStyles}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
