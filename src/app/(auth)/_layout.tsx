import { Stack } from "expo-router";

export default function AuthLayout () {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ title: "Sign" }} />
      <Stack.Screen name="sign-out" />
    </Stack>
  );
}
