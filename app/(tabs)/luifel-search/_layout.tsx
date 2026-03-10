import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#3E5F42',
      },
      headerShadowVisible: true,
      headerTintColor: '#ffffff',
    }}>
      <Stack.Screen name="index" options={{ title: 'Cassetteluifel Zoeken' }} />
      <Stack.Screen name="result" options={{ title: 'Gevonden Producten' }} />
    </Stack>);
}
