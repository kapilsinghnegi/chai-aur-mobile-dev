import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { TASKS } from "@/constants/tasks";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function TaskDetails() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const task = TASKS.find(task => task.id === id);
  if (!task)
    return (
      <View
        style={[
          styles.container,
          { paddingTop: insets.top + 12, paddingHorizontal: 12 },
        ]}
      >
        <Text style={{ color: Colors.textPrimary }}>Task not found</Text>
      </View>
    );
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 12, paddingHorizontal: 12 },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.iconButton}
        >
          <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>{task.title}</Text>
        <Ionicons name="ellipse" size={20} color={STATUS_COLOR[task.status]} />
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{task.category}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
    </View>
  );
}

const STATUS_COLOR = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To-do": Colors.statusTodo,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 12,

  },
  category: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  description: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
});
