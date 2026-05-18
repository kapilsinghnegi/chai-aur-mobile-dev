import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View>
      <Text>About</Text>
      <Link href="/(auth)/signin">SIGN IN</Link>
      <Link href="/signup">SIGN UP</Link>
      <Link href="/details">Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
