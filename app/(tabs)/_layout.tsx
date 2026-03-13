import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
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
          headerShown: false
        }} />
    </Tabs>);
}
