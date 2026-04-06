# Expo Crash Course

Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.

There are basically two types of mobile development: **native** and **cross-platform**. Native Mobile Development is the development of a native application for a specific mobile operating system while Cross-Platform Mobile Development is the development of a cross-platform application that can be used on multiple mobile operating systems. For Native Development, we can use `Java / Kotlin` for Android and `Swift / Objective-C` for iOS. For Cross-Platform Development, we can use `Flutter` or `React Native` for both Android and iOS.

Expo is a full-stack React Native framework with powerful cloud services. Benefits fo using Expo: No Android Studio, Run app instantly on your mobile phone, and Pre-built features (Cameras, Locations, Sensors, etc.). Pre-requisites for Expo: Node.js, Code Editor, and Expo Go app.

To create Expo app, run: `npx create-expo-app@latest my-app-name`. `app` is the source folder for Expo app.

The command `bun run reset-project` is used in newer Expo projects (leveraging Expo Router templates) to completely wipe out the default boilerplate onboarding code so you can start building your app from a blank slate. After running this, to start development server of our app, run `bunx expo start`.

We can edit the code in the `app/index.tsx` file which is the entry point of our app.

## Core Components

- `View` is like `div`, `Text` is like `p`/`h1`/`span` etc. - used for text.
- `Button` is a self-closing tag. It contains `title` prop that contains the text to be displayed on the button. For press event, use `onPress` prop which is a function that is called when the button is pressed.
- `Alert` is used to display a message to the user. `Alert.alert()` is used to display the message.
- `Switch` is a self-closing tag. It is used to toggle between two states. It contains `value` prop that contains the current state of the switch. `onValueChange` is a function that is called when the switch is toggled.
- `ScrollView` is a self-closing tag. It is used to display a scrollable view. It contains `children` prop that contains the content to be displayed in the scrollable view.
- `TextInput` is a self-closing tag. It is used to display a text input field. It contains `placeholder` prop that contains the placeholder text to be displayed in the text input field. It contains `value` and `onChangeText` props that are used to get and set the value of the text input field. It also has `keyboardType` prop that is used to specify the type of keyboard to use. We have `multiline` prop that is used to make the text input field multiline and we can control number of lines using `numberOfLines` prop.
- `Pressable` is a Core Component Wrapper that can detect various stages of press interactions on any of its defined children. It has different props that can be used to customize the behavior of the pressable component like `onPressIn`, `onPressOut`, `onLongPress`, etc.
- `Image` component is used to display images in your app. It has `source` prop that contains an object with `uri` key that contains the URL of the image. We can also use `resizeMode` prop to specify how the image should be resized. We can also use `style` prop to specify the style of the image. `resizeMethod` prop is used to specify the method to use to resize the image.
- `SafeAreaView` from `react-native-safe-area-context` is used to provide a safe area around the app content. It is a regular `<View>` with the safe area edges applied as extra padding or margin.
  To use safe area context, you need to add `SafeAreaProvider` in your app root component.
- `ImageBackground` has the same props as `Image` and whatever children we pass to it will be displayed on top of the background image.
- To display same component multiple times we can use `map` method but in mobile, this approach is highly unoptimized, higher battery consumptions, etc. That's why we use `FlatList` component. `FlatList` is a performant interface for rendering basic, flat lists, supporting the most handy features. It contains `data` prop which contains the data to be displayed in the list. `renderItem` prop which is a function that is called for each item in the list and returns the component to be displayed for that item. `keyExtractor` prop which is a function that is called for each item in the list and returns the key to be used for that item. Never use `FlatList` inside a `ScrollView`. `ListHeaderComponent` prop which is a component to be displayed at the top of the list. `contentContainerStyle` prop which is a style object to be applied to the content container of the list. `showVerticalScrollIndicator` prop which is a boolean that is used to show or hide the vertical scroll indicator.
- `TouchableOpacity` is a Core Component Wrapper for making views respond to touch events.

In `_layout.tsx`, we can pass `screenOptions` which will contain the options for the screen. We can use `headerShown: false` to hide the header for the screen.

`Inset` means the space between the edge of the screen and the content. To keep our `View` component inside the safe area, we can use `useSafeAreaInsets` hook from `react-native-safe-area-context` and use it to set the `style` prop of the `View` component.

```js
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top }]}>
      <Text>index</Text>
    </View>
  );
};
```

`StatusBar` from `expo-status-bar` is used to display a status bar at the top of the screen. We can use `style` prop to specify the style of the status bar. We can use `hidden` prop to hide the status bar.

For icons, we can use `@expo/vector-icons` package which is a package that contains icons for various platforms. We can use `Ionicons` component from it. We can use `name` prop to specify the name of the icon. We can use `size` prop to specify the size of the icon. We can use `color` prop to specify the color of the icon.
