import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

type DateItem = {
  month: string;
  day: number;
  weekday: string;
  key: string;
};

const generateDates = (): DateItem[] => {
  const base = new Date(2026, 3, 4);
  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      key: date.toISOString(),
    };
  });
};

const DATES = generateDates();
const DEFAULT_SELECTED = DATES[2].key;

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_SELECTED);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {DATES.map(i => {
        const isSelected = i.key === selectedDate;
        return (
          <TouchableOpacity
            key={i.key}
            style={[styles.dateItem, isSelected && styles.dateItemSelected]}
            onPress={() => setSelectedDate(i.key)}
          >
            <Text style={[styles.month, isSelected && styles.selectedText]}>
              {i.month}
            </Text>
            <Text style={[styles.day, isSelected && styles.selectedText]}>
              {i.day}
            </Text>
            <Text style={[styles.weekday, isSelected && styles.selectedText]}>
              {i.weekday}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 8,
    paddingVertical: 10,
  },
  dateItem: {
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 64,
  },
  dateItemSelected: {
    backgroundColor: Colors.primary,
  },
  month: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  day: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  weekday: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  selectedText: {
    color: "#FFFFFF",
  },
});
