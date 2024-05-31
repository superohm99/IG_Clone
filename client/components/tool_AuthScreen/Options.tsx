import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

type OptionProps = {
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
};

const Options = (props: OptionProps) => {

  return (
    <View style={styles.optionRow}>
      <View style={styles.optionColumn}>
        <View style={styles.optionHeader}>
          <FontAwesomeIcon
            icon={props.title === "Private" ? faLock : faLockOpen}
            size={20}
          />
          <Text style={styles.headerText}>{props.title}</Text>
        </View>
        <Text style={styles.baseText}>{props.description}</Text>
      </View>
      <TouchableOpacity onPress={props.onSelect}>
        <FontAwesomeIcon 
          icon={props.isSelected ? faCircleCheck : faCircle} 
          color={props.isSelected ? "#3797EF" : "gray"}
          size={20}
        />
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