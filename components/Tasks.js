import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tasks = (props) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circle}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circle: {
    height: 12,
    width: 12,

    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tasks;
