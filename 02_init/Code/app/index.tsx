import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";
import { FilterOptions, TASKS } from "@/constants/tasks";
import Header from "@/components/Header";
import DateSelector from "@/components/DateSelector";
import FilterTabs from "@/components/FilterTabs";
import { useState } from "react";
import TaskCard from "@/components/TaskCard";

const Home = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const filterTasks = (filter: FilterOptions) => {
    if (filter === "All") return TASKS;
    if (filter === "Completed")
      return TASKS.filter(task => task.status === "Done");
    if (filter === "To do")
      return TASKS.filter(task => task.status === "To-do");
    return TASKS.filter(task => task.status === filter);
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={filterTasks(activeFilter)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 24,
  },
});
