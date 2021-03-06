import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default function MemoList() {
  return (
    <>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={16} color="#B0B0B0" />
          </TouchableOpacity>
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
