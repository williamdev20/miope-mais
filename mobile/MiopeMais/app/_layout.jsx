import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login/login_screen";
import SignupScreen from "./screens/signup/signup_screen";
import HomeScreen from "./screens/home/home_screen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
