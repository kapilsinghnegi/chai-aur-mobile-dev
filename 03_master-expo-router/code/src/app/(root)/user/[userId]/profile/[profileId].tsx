import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductPage() {
  const { userId, profileId } = useLocalSearchParams();
  return (
    <View>
      <Text>
        Profile: {profileId}, User: {userId}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
