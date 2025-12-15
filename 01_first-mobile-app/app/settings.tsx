import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [randomRepoName, setRandomRepoName] = useState("");

  const fetchRepo = () => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data =>
        setRandomRepoName(data[Math.floor(Math.random() * data.length)].name)
      )
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Settings</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your GitHub username"
      />
      <Button title="Fetch Repos" onPress={fetchRepo}></Button>
      <Text style={styles.repoName}>Random Repo: {randomRepoName}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1.5,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  repoName: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
