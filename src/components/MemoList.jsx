import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate("MemoDetail");
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => {
              Alert.alert("Are you sure?");
            }}
          >
            <Icon name="delete" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0, 0.15)",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelete: {
    padding: 8,
  },
});
