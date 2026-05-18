import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Link href="/about">Go to About</Link>
      <Link href="/details">Go to Details</Link>
      <Link href="/overview">Go to Overview</Link>
      <Link href="/overview/user">Go to User</Link>
      <Link href="/user/1234/profile/abc">Go to User Profile</Link>
      <Link href="/product/9999">Go to Product Id</Link>
      <Link href="/docs/router/getting-started/advanced/tabs/native">
        Go to Docs
      </Link>
      <Pressable onPress={() => router.push("/overview")}>
        <Text>Go to Overview</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

