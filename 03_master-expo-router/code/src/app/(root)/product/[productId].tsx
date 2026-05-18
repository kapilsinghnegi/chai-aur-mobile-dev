import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductPage() {
  const { productId } = useLocalSearchParams();
  return (
    <View>
      <Text>ProductPage: {productId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
