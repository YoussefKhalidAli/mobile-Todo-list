import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ goal, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(null, id)}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 8,
    backgroundColor: "#5e0acc",
    marginVertical: 8,
  },
  goalText: {
    color: "white",
    fontSize: 20,
    padding: 6,
  },
});
