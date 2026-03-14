import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, Tabs } from "expo-router";
import { useWindowDimensions } from 'react-native';

export default function TabLayout() {

  const {height, width} = useWindowDimensions();

  return (
  <Stack>
    <Stack.Screen name="luifel-search" options={{headerShown: false}} />
  </Stack>);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#3E5F42',
        },
        headerShadowVisible: true,
        headerTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#3E5F42'
        },
        tabBarItemStyle: {
          minHeight:50
        },
        //tabBarPosition: width < 800 ? "bottom" : "left",
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          href: null,
          }} />
      <Tabs.Screen
        name="luifel-search" 
        options={{
          title: 'Cassetteluifels',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'car-sharp' : 'car-outline'} color={color} size={24} />
          ),
          headerShown: false,
        }} />
    </Tabs>);
}
