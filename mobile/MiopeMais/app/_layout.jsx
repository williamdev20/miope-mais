import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login/login_screen";
import SignupScreen from "./screens/signup/signup_screen";
import HomeScreen from "./screens/home/home_screen";
import BookScreen from "./screens/book/book_screen";
import FontScreen from "./screens/font/font_screen";
import PaletteScreen from "./screens/palette/palette_screen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Palette" component={PaletteScreen} />
      <Stack.Screen name="Login" component={LoginScreen} /> 
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Font" component={FontScreen}/>
    </Stack.Navigator>
  );
}
