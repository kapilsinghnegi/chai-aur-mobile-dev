import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeScreen() {
  // const [isEnabled, setIEnabled] = useState(false);
  // const [value, setValue] = useState("");

  // const toggleSwitch = () => {
  //   setIEnabled(previousState => !previousState);
  // };

  // const pressMe = () => {
  //   Alert.alert("Button clicked");
  // };
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      {/* {[...Array(60)].map((_, i) => (
          <Text key={i} style={{ fontSize: 24 }}>
            Hello from Home Screen {i + 1}
          </Text>
        ))} */}
      {/* <Text style={{ fontSize: 24 }}>Hello from Home Screen 🔥</Text> */}
      {/* <Button title="Click me" onPress={pressMe} /> */}
      {/* <Switch value={isEnabled} onValueChange={toggleSwitch} /> */}
      {/* <TextInput
          keyboardType="numbers-and-punctuation"
          style={{ borderWidth: 1, borderColor: "black", borderStyle: "solid" }}
          value={value}
          onChangeText={text => setValue(text)}
          multiline
          numberOfLines={4}
          placeholder="Enter your text..."
        /> */}
      {/* <Pressable onPress={pressMe}>
          <Text>Make me Pressable</Text>
        </Pressable> */}
      {/* <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 300, height: 150 }}
          // resizeMode="repeat"
          // resizeMethod="resize"
        /> */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item title={item.title} />}
        horizontal
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
//         <ImageBackground
//           source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
//           resizeMode="cover"
//           style={{ flex: 1, justifyContent: "center" }}
//         >
//           <Text
//             style={{
//               color: "white",
//               fontSize: 42,
//               lineHeight: 84,
//               fontWeight: "bold",
//               textAlign: "center",
//               backgroundColor: "#000000c0",
//             }}
//           >
//             Inside
//           </Text>
//         </ImageBackground>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

