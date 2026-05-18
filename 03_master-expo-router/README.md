# Master Expo Router

React Native provides a library `React Navigation` which is used to navigate between screens in your app. `Expo Router` is built on top of `React Navigation` and provides a set of components and hooks that make it easy to create a navigation system for your app.

Expo Router is a file-based router for React Native and web applications. It allows you to manage navigation between screens in your apps, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).

Why use Expo Router when React Navigation exists?

- **Less Boilerplate**
- **Scalable Structure**
- **Works like Next.js**
- **Built-in Deep Linking**
- **Type-safe routes**

---

## Routing in Expo Router

- Everything happens inside your `app` folder.
- To create a static route we can simply create a file inside the `app` folder. For example, `app/about.tsx` file will create a route `/about`. Inside this file, we will create a component and export it that will be shown when the route is accessed. We can link to this route using the `Link` component which has `href` prop that points to the route. You can also create a folder inside the `app` folder and create a `index.tsx` file inside it to create a static route for that folder. For example, `app/users/index.tsx` will create a route `/users` which will show all the users.

- To create a dynamic route, we can create a file `[route-name].tsx` to create a route for that file. For example, `app/[id].tsx` will create a route `/id` which will show the details of the user with the id. To get the id, we can use the `useLocalSearchParams` hook. The problem with this is that we can only have one dynamic route per level if we follow this approach. To solve this, we create folder inside the `app` folder and create a `[id].tsx` file inside it. This will create a route `/id` which will show the details of the user with the id.

- Catch-all routes can be created using the `app/...slug.tsx` file. This will create a route that can be accessed for any path. To get the slug, we can use the `useLocalSearchParams` hook. If we have a deeply nested catch-all route, then slug will be an array of strings.

- To create route group, we can simply create a directory inside the `app` folder and its name should be enclosed in round brackets. For example, `app/(root)/about.tsx` this will create a route `/about` which will show the about page, it will not affect the route by route group. We can still write our route as `app/(root)/about` if we want to, but it's not necessary.

- We can create separate layout for each route group by creating `_layout.tsx` file inside the `app` folder. In this file, we can create a component that will be used to wrap the route group. We get `Slot` component from `expo-router` that is used to display the children of the route group, it is like `Outlet` from React Router.

## Types of Navigation

- `Stack` Navigation works like `stack` data structure and follows LIFO (Last In First Out) order.
  The stack of visited routes is stored in memory which helps us to go back to the previous route. By default, Expo uses this navigation type you can check in the `app/_layout.tsx` file. We can actually modify Stack Navigation Screen providing options to the `Stack.Screen` component. For giving common option to all screens, we can provide `screenOptions` prop to `Stack` component.

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "dimgrey" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerStyle: { backgroundColor: "orange" } }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerStyle: { backgroundColor: "skyblue" },
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: "Details",
          headerStyle: { backgroundColor: "green" },
        }}
      />
    </Stack>
  );
}
```

- `Tab` Navigation enables you to navigate between multiple screens using tabs. This is useful when you have multiple screens in your app and you want to switch between them using tabs. To apply this, we can create a `(tabs)` directory and use the `src/app/_layout.tsx` file to define your app's root layout in which we will keep a single Stack.Screen with `(tabs)` name.:

```tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
```

The `(tabs)` directory is a special directory name that tells Expo Router to use the `Tabs` layout.
In `(tabs)/_layout.tsx` file, we can create a component that will be used to wrap the tabs. We get `Tabs` component from `expo-router` that is used to display the tabs. `Tabs` and `Tabs.Screen` components have the same props as `Stack` and `Stack.Screen` components.

```tsx
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
```

- For `Drawer` Navigation, we need to install some dependencies if we do not have them already:

```bash
npx expo install react-native-reanimated react-native-worklets react-native-gesture-handler
```

Now you can use the `Drawer` layout to create a drawer navigator.

```tsx
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return <Drawer />;
}
```

To edit the drawer navigation menu labels, titles and screen options specific screens are required as follows:

```tsx
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
```

---

Apart from `Link` Component, React Native also provides us a `useRouter` hook from `expo-router`. You can use `push` and `replace` methods to navigate to different routes.

```tsx
<Pressable onPress={() => router.push("/overview")}>
  <Text>Go to Overview</Text>
</Pressable>
```
