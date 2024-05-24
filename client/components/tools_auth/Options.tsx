import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

type OptionProps = {
  title: string;
  description: string;
};

const Options: React.FC<OptionProps> = ({ title, description }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <View style={styles.optionRow}>
      <View style={styles.optionColumn}>
        <View style={styles.optionHeader}>
          <FontAwesomeIcon
            icon={title === "Private" ? faLock : faLockOpen}
            size={20}
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <Text style={styles.baseText}>{description}</Text>
      </View>
      <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
        <FontAwesomeIcon icon={isSelected ? faCircleCheck : faCircle} size={20} color={isSelected ? "#3797EF" : "gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  optionColumn: {
    flexDirection: "column",
    width: "90%",
    gap: 5
  },
  optionHeader: {
    flexDirection: "row",
    gap: 10,
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
  },
  baseText: {
    fontSize: 14,
    textAlign: "left",
    color: "gray"
  }
});