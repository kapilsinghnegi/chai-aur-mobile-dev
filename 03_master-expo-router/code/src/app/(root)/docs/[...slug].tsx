import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DocsSlugPage() {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "indigo" }}>
        Docs {slug?.join(", ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
