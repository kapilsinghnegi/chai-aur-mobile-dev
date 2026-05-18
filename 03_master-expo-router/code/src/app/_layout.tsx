import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerLabel: "Tabs", title: "Tabs" }}
      />
      <Drawer.Screen
        name="(auth)"
        options={{ drawerLabel: "Auth", title: "Auth" }}
      />
      <Drawer.Screen
        name="(dashboard)/overview"
        options={{ drawerLabel: "Overview", title: "Overview" }}
      />
      <Drawer.Screen
        name="(dashboard)/overview/user"
        options={{ drawerLabel: "User", title: "User" }}
      />
      <Drawer.Screen
        name="(root)/settings"
        options={{ drawerLabel: "Settings", title: "Settings" }}
      />
    </Drawer>
  );
}

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: "dimgrey" },
//         headerTintColor: "white",
//         headerTitleStyle: { fontWeight: "bold" },
//         headerTitleAlign: "center",
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{ title: "Home", headerStyle: { backgroundColor: "orange" } }}
//       />
//       <Stack.Screen
//         name="about"
//         options={{
//           title: "About",
//           headerStyle: { backgroundColor: "skyblue" },
//         }}
//       />
//       <Stack.Screen
//         name="details"
//         options={{
//           title: "Details",
//           headerStyle: { backgroundColor: "green" },
//         }}
//       />
//     </Stack>
//   );
// }

