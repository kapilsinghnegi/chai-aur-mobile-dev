import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "lightgray",
          borderTopWidth: 0,
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="information" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarBadge: 7,
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="list" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
