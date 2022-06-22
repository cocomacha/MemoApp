import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function MemoList() {
  return (
    <>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <View>
            <AntDesign name="delete" size={20} color="#B0B0B0" />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <View>
            <AntDesign name="delete" size={20} color="#B0B0B0" />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <View>
            <AntDesign name="delete" size={20} color="#B0B0B0" />
          </View>
        </View>
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
});
