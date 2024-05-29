import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchBarProps = {
  value: string;
  handleChangeText: (e: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} size={16} color="#ccc" />
        <TextInput
          style={styles.input}
          value={props.value}
          placeholder="Search"
          onChangeText={(text) => props.handleChangeText(text)}
        />
        {props.value !== "" && (
          <TouchableOpacity
            onPress={() => props.handleChangeText("")}
            style={styles.circleXmark}
          >
            <FontAwesomeIcon icon={faCircleXmark} size={18} color="#ccc" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBar: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#efefef",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    color: "#000",
    fontSize: 16,
    marginLeft: 10,
    width: "90%",
  },
  circleXmark: {
    position: "absolute",
    right: 10,
  },
});
