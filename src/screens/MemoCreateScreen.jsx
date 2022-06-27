import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen() {
  return (
    <KeyboardAvoidingView
      style={StyleSheet.container}
      behavior="height"
      keyboardVerticalOffset="60"
    >
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    backgroundColor: "blue",
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
