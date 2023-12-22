import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ visible, onAddition, onCancelation }) {
  const [enteredText, setEnteredText] = useState("");

  const textHandler = (text) => {
    setEnteredText(text);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          value={enteredText}
          placeholder="Your course goals"
          onChangeText={textHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add goal"
            onPress={() => {
              setEnteredText("");
              onAddition(enteredText);
            }}
            color={"#b180f0"}
          />
          <Button title="cancel" onPress={onCancelation} color={"#f31282"} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "purple",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    paddingVertical: 13,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 16,
  },
});
